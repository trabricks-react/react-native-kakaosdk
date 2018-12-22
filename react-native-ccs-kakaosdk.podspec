require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name    = "react-native-ccs-kakaosdk"
  s.version = package['version']
  s.summary = "KakaoSDK For React Native."
  
  s.authors   = { "Suhan Moon" => "leader@creamcookie.cc" }
  s.homepage  = "https://github.com/creamcookie/react-native-kakaosdk#readme"
  s.license   = "MIT"

  s.platform      = :ios, "9.0"
  s.framework     = 'UIKit'
  s.requires_arc  = true

  s.source        = { :git => "https://github.com/creamcookie/react-native-kakaosdk.git" }
  s.source_files  = "ios/*.{h,m}"

  s.dependency "React"
#  s.dependency "KakaoOpenSDK"
end

  
