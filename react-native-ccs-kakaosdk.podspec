require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|

  s.name    = "react-native-ccs-kakaosdk"
  s.version = package['version']
  s.summary = "React Native KakaoSDK"
  
  s.author    = { "author" => "leader@creamcookie.cc" }
  s.homepage  = "https://creamcookie.cc"
  s.license   = "MIT"

  s.platform      = :ios, "9.0"
  s.framework     = 'UIKit'
  s.requires_arc = true

  s.source        = { :git => "https://github.com/creamcookie/react-native-ccs-kakaosdk.git" }
  s.source_files  = "ios/*.h", "ios/*.m"

  s.dependency "React"
  s.dependency "KakaoOpenSDK"

end

  
