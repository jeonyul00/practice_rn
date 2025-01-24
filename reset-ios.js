const {execSync} = require('child_process');

const runCommand = (command, description) => {
  console.log(`\n🚀 ${description}`);
  try {
    execSync(command, {stdio: 'inherit'});
    console.log(`✅ ${description} 완료!`);
  } catch (error) {
    console.error(`❌ ${description} 중 오류 발생:`, error.message);
    process.exit(1);
  }
};

// 캐시 삭제
runCommand('watchman watch-del-all', 'Watchman 캐시 삭제');
runCommand('rm -rf node_modules', 'node_modules 삭제');
runCommand('rm -rf ios/Pods ios/Podfile.lock', 'iOS Pod 캐시 삭제');
runCommand(
  'rm -rf ~/Library/Developer/Xcode/DerivedData',
  'Xcode DerivedData 삭제',
);
runCommand('npm install', 'node_modules 재설치');

// Pod 재설치
runCommand('cd ios && pod install', 'CocoaPods 재설치');

// Metro Bundler 캐시 삭제
runCommand('npm start --reset-cache', 'Metro Bundler 캐시 초기화');

console.log(
  "\n✨ iOS 초기화가 완료되었습니다! 이제 'npm run ios'를 실행하세요.",
);
