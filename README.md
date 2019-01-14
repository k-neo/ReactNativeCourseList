# ReactNativeCourseList

# 動作方法
プロジェクト配下で以下のコマンドを実行する事で、プロジェクトの動作に必要なパッケージの導入が行われます。
```
$ npm install
$ react-native link
```

# iOSでの確認
## シミュレータでの起動
```
$ react-native run-ios
```

# Androidでの確認
## Android SDKのパス設定
ビルド時に使用するSDKのパスを設定するためにプロジェクトの「android」フォルダ配下に「local.properties」にAndroid SDKのパスを記述します。下記に例を示します。（尚、同ファイルは.gitignoreの対象としていますので個々で管理されます。）

```
sdk.dir = /Users/[username]/Library/Android/sdk
```

## シミュレータでの起動
```
$ react-native run-android
```

# 環境
上記の手順はMacを使用していることを前提としています。
