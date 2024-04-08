// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::ffi::CString;
use std::ptr;
use winapi::um::winuser::{
    FindWindowA, SendMessageA, SetForegroundWindow, BM_CLICK, WM_CHAR, WM_SETTEXT,
};
use winapi::um::winuser::{
    SendInput, INPUT, INPUT_KEYBOARD, KEYBDINPUT, KEYEVENTF_KEYUP, KEYEVENTF_UNICODE,
};

// use winapi::um::winuser::{FindWindowA, SetForegroundWindow};

use tauri::Manager;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn send_input(text: String) {
    println!("Received text: {}", text);
}

// This works but it changes the WINDOW TITLE (doesn't send text to the window)
#[tauri::command]
fn change_window_title(command: String) {
    let window_class_name = CString::new("Notepad").expect("Failed to create CString");
    let window_handle = unsafe { FindWindowA(window_class_name.as_ptr(), ptr::null()) };

    if window_handle != ptr::null_mut() {
        let command_cstring = CString::new(command).expect("Failed to create CString");

        // Set the text of the window (if applicable)
        unsafe {
            SendMessageA(
                window_handle,
                WM_SETTEXT,
                0,
                command_cstring.as_ptr() as isize,
            );
        }

        // Optionally, you can simulate a button click if needed
        // For example, if there's a button with the ID 1234, you can simulate a click:
        // unsafe {
        //     SendMessageA(window_handle, BM_CLICK, 1234 as usize, ptr::null_mut());
        // }
    } else {
        println!("EverQuest window not found");
    }
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
