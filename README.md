# food-waste-mobile

Prototype for mobile app that helps users track food expiry dates in their pantry/fridge.

## Running the app: 
1. Clone this repo
2. cd into the project folder you just cloned
3. Open CMD
Run npm install
Run expo start

## First time running the app in a simulator/emulator in Android:
1. Install Android Studio
2. Install Genymotion with Virtual Box
3. Open Android Studio
Go to Configure -> SDK Manager or File -> Anroid SDK
Select the SDK Platforms tab
Select Show Package Details in the bottom right hand corner
Select Android SDK Platform 25-27
Select the SDK Tools tab
Select Android SDK Platform-Tools and Android SDK Tools
Click Apply and OK
4. Add a new environment variable: 
C:\Users\{User}\AppData\Local\Android\Sdk\platform-tools named Path
This will ensure you can run adb in CMD
5. Open CMD
Run adb
Run adb kill-server and adb start-server
Run adb devices, ensure List of devices attached is displayed and nothing else, the device will be installed in Genymotion
Run exp path
(Make sure you have C:\Users\{user}\AppData\Roaming\npm inside the Path variable under System variables
6. Open Genymotion and install virtual device of choice
7. Go to Setting -> ADB
Check Use custom Android SDK Tools
Click Browse select C:\Users\{User}\AppData\Local\Android\Sdk
8. Start virtual device
9. Open CMD
Run adb devices, ensure you can see one new device
10. Start your Expo project
Open Expo Dev Tools
Click on the Run on Android device/emulator

## Running the app in a simulator/emulator in Android
1. Open CMD and run adb start-server
2. Open Genymotion and start virtual device
3. Run expo start
4. Click on the Run on Android device/emulator 

## Running the app on an Android device:
1. Download expo mobile app on your device
2. Run the app
3. Open the expo app and capture the QR code in the CMD window
