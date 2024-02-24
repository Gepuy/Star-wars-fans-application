# Getting Started

>**Note**: Since my personal PC is based on the Windows operating system, the app is only available on Android, both for Windows and Mac users. I'm not allowed to use non-personal devices for projects of this type, however, I have experience working with XCode

## Step 1: Create local application build

First you need to run the command to install all requirement dependencies

```bash
yarn install
```

### For Android

It is necessary to launch an emulator or a real device

```bash
# using Windows
yarn android

# using Mac
yarn android:mac
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio ~~and~~ ~~Xcode~~ respectively.

After you need to run command o start Metro, the JavaScript bundler that ships with React Native.
```bash
yarn start
```

## Step 2: Modifying App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!


## Congratulations! :tada:

You've successfully run and modified this React Native App. :partying_face:

