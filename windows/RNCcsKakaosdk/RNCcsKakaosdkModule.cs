using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Ccs.Kakaosdk.RNCcsKakaosdk
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNCcsKakaosdkModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNCcsKakaosdkModule"/>.
        /// </summary>
        internal RNCcsKakaosdkModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNCcsKakaosdk";
            }
        }
    }
}
