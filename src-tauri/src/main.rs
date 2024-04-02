// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::ffi::CString;
use std::ptr;

use winapi::um::winuser::{FindWindowA, SetForegroundWindow};
use winapi::um::winuser::{SendInput, INPUT, INPUT_KEYBOARD, KEYEVENTF_KEYUP, KEYEVENTF_UNICODE};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn send_input(text: String) {
    println!("Received text: {}", text);
}

// This works but ONLY for Notepad
// Doesn't work for EQ
#[tauri::command]
fn send_command_to_window(command: String) {
    let window_class_name = CString::new("NOTEPAD").expect("Failed to create CString");
    let window_handle = unsafe { FindWindowA(window_class_name.as_ptr(), ptr::null()) };

    if window_handle != ptr::null_mut() {
        // Focus on the EverQuest window
        unsafe {
            SetForegroundWindow(window_handle);
        }

        // Unsafe block for calling SendInput
        unsafe {
            // Send each character of the command to the window using SendInput
            for c in command.chars() {
                let mut input = INPUT {
                    type_: INPUT_KEYBOARD,
                    u: std::mem::zeroed(),
                };

                input.u.ki_mut().wVk = 0;
                input.u.ki_mut().wScan = c as u16;
                input.u.ki_mut().dwFlags = KEYEVENTF_UNICODE;

                // Press
                SendInput(1, &mut input, std::mem::size_of::<INPUT>() as i32);

                // Release
                input.u.ki_mut().dwFlags |= KEYEVENTF_KEYUP;
                SendInput(1, &mut input, std::mem::size_of::<INPUT>() as i32);
            }
        }
    } else {
        println!("EverQuest window not found");
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![send_input])
        .invoke_handler(tauri::generate_handler![send_command_to_window])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
