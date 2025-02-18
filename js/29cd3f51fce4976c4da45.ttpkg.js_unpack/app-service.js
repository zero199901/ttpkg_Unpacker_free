/**
 * 反编译并格式化的 JS 文件
 * 原始文件: app-service.js
 * 处理时间: 2025-02-18 13:03:34
 */

var globPageRegistPath, globPageRegistering, compilerVersion = "1.35.4",
  globalAsyncRegistPaths = [],
  globPackageRoot = "__APP__";
global = "undefined" != typeof global && global || {};
var TMAConfig = {
  appId: "ttc6a8b015599fe90101",
  entryPagePath: "pages/index/index",
  isMicroApp: !0,
  pages: ["pages/index/index", "pages/read-history/index", "pages/reader/index", "pages/mine/index", "pages/window/index", "subpages/mine/vip/index", "subpages/mine/trade-record/index", "subpages/mine/purchase-config/index", "subpages/mine/about-us/index"],
  subPackages: [{
    root: "subpages/mine/",
    pages: ["vip/index", "trade-record/index", "purchase-config/index", "about-us/index"]
  }],
  networkTimeout: {
    request: 6e4,
    uploadFile: 6e4,
    connectSocket: 6e4,
    downloadFile: 6e4
  },
  global: {
    window: {
      navigationBarTextStyle: "black",
      navigationBarTitleText: "渺渺故事会",
      navigationBarBackgroundColor: "#F5F5F5",
      backgroundColor: "#F5F5F5"
    }
  },
  tabBar: {
    color: "#111111",
    selectedColor: "#FF613B",
    borderStyle: "black",
    backgroundColor: "#FFFFFF",
    list: [{
      pagePath: "pages/read-history/index",
      iconPath: "static/tabbar/history.png",
      selectedIconPath: "static/tabbar/history-on.png",
      text: "最近阅读"
    }, {
      pagePath: "pages/index/index",
      iconPath: "static/tabbar/store.png",
      selectedIconPath: "static/tabbar/store-on.png",
      text: "书城"
    }, {
      pagePath: "pages/mine/index",
      iconPath: "static/tabbar/mine.png",
      selectedIconPath: "static/tabbar/mine-on.png",
      text: "我的"
    }]
  },
  navigateToMiniProgramAppIdList: [],
  permission: {},
  prefetches: {},
  preloadRule: {
    "pages/mine/index": {
      network: "all",
      packages: ["subpages/mine/"]
    }
  },
  prefetchRules: {},
  ttPlugins: {},
  extAlias: {},
  npmAlias: {},
  pluginPages: [],
  fallbackPluginPages: {},
  debug: !1,
  ttLaunchApp: {},
  widgets: [],
  ext: {},
  extAppid: "",
  customClose: !1,
  fileRecord: {
    "api/book-store/index.js": !0,
    "api/http/compensation-queue.js": !0,
    "api/http/index.js": !0,
    "api/mine/index.js": !0,
    "api/pay/index.js": !0,
    "api/qm-statistics.js": !0,
    "api/reader/index.js": !0,
    "api/user/index.js": !0,
    "assets/ts/history.js": !0,
    "assets/ts/theme.js": !0,
    "common/assets.js": !0,
    "common/vendor.js": !0,
    "components/qm-book-card/index.js": !0,
    "components/qm-empty/index.js": !0,
    "components/qm-icon/index.js": !0,
    "components/qm-pay-card/components/guide-hand.js": !0,
    "components/qm-pay-card/index.js": !0,
    "components/qm-pay-panel/components/panel-header.js": !0,
    "components/qm-pay-panel/components/purchase-panel.js": !0,
    "components/qm-pay-panel/components/purchase-tips.js": !0,
    "components/qm-pay-panel/index.js": !0,
    "components/qm-pull-up-loading/index.js": !0,
    "components/qm-scrollx-book-list/index.js": !0,
    "components/qm-tab/index.js": !0,
    "hooks/index.js": !0,
    "hooks/use-login.js": !0,
    "hooks/use-pay.js": !0,
    "mixin/share.js": !0,
    "node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js": !0,
    "node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition.js": !0,
    "node-modules/@repo/qm-components/src/queryData-image/index.js": !0,
    "node-modules/@repo/qm-components/src/queryData-popup/index.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/chapter-content.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/components/book-info.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/components/chapter-list.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/components/set-background.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/components/set-box.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/components/set-font-size.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/index.js": !0,
    "node-modules/@repo/qm-components/src/queryData-reader/setting.js": !0,
    "node-modules/@repo/qm-components/src/queryData-theme-overlay/index.js": !0,
    "pages/index/index.js": !0,
    "pages/mine/components/how-to-find-me.js": !0,
    "pages/mine/index.js": !0,
    "pages/read-history/index.js": !0,
    "pages/reader/components/final-chapter.js": !0,
    "pages/reader/index.js": !0,
    "pages/window/index.js": !0,
    "store/index.js": !0,
    "store/modules/global.js": !0,
    "store/modules/user.js": !0,
    "subpages/mine/about-us/index.js": !0,
    "subpages/mine/components/trade-record-list.js": !0,
    "subpages/mine/purchase-config/index.js": !0,
    "subpages/mine/trade-record/index.js": !0,
    "subpages/mine/vip/index.js": !0,
    "app.js": !0,
    "bdp_industry_sdk/main.js": !0,
    "bdp_industry_sdk/index.js": !0
  },
  usingProvide: !1,
  component2: !1,
  industrySDKPages: [],
  industrySDK: !0,
  gameFiles: [],
  publishVideoHookPriorityList: [],
  referrerPolicy: {},
  usePrivacyCheck: !1,
  appLaunchInfo: {
    path: "pages/index/index",
    query: {}
  },
  network: {
    maxRequestConcurrent: 5,
    maxUploadConcurrent: 2,
    maxDownloadConcurrent: 5
  }
};
try {
  nativeTMAConfig = JSON.parse(nativeTMAConfig)
} catch (require) {}
try {
  for (var ii in nativeTMAConfig) TMAConfig[ii] = nativeTMAConfig[ii]
} catch (require) {} finally {
  TMAConfig.launch || (TMAConfig.launch = TMAConfig.appLaunchInfo)
}
var __allConfig__ = {
    "pages/index/index": {
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "qm-tab": "/components/qm-tab/index",
        "qm-scrollx-book-list": "/components/qm-scrollx-book-list/index",
        "qm-book-card": "/components/qm-book-card/index",
        "qm-empty": "/components/qm-empty/index"
      }
    },
    "pages/read-history/index": {
      navigationBarBackgroundColor: "#FFFFFF",
      backgroundColor: "#FFFFFF",
      enablePullDownRefresh: !0,
      onReachBottomDistance: 500,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "qm-book-card": "/components/qm-book-card/index",
        "qm-empty": "/components/qm-empty/index"
      }
    },
    "pages/reader/index": {
      navigationBarTitleText: "",
      navigationBarBackgroundColor: "#FFFFFF",
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "queryData-reader": "/node-modules/@repo/qm-components/src/queryData-reader/index",
        "qm-pay-panel": "/components/qm-pay-panel/index",
        "final-chapter": "/pages/reader/components/final-chapter"
      }
    },
    "pages/mine/index": {
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "uni-popup": "/node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup",
        "how-to-find-me": "/pages/mine/components/how-to-find-me"
      }
    },
    "pages/window/index": {
      navigationBarTitleText: "",
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "subpages/mine/vip/index": {
      navigationBarTitleText: "VIP",
      backgroundColor: "#2F231A",
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "purchase-tips": "/components/qm-pay-panel/components/purchase-tips",
        "qm-pay-card": "/components/qm-pay-card/index"
      }
    },
    "subpages/mine/trade-record/index": {
      navigationBarTitleText: "交易记录",
      navigationBarBackgroundColor: "#FFFFFF",
      onReachBottomDistance: 100,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "qm-tab": "/components/qm-tab/index",
        "trade-record-list": "/subpages/mine/components/trade-record-list"
      }
    },
    "subpages/mine/purchase-config/index": {
      navigationBarTitleText: "购买设置",
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "subpages/mine/about-us/index": {
      navigationBarTitleText: "关于我们",
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "components/qm-icon/index": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "components/qm-tab/index": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "components/qm-scrollx-book-list/index": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "qm-book-card": "/components/qm-book-card/index"
      }
    },
    "components/qm-book-card/index": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "queryData-theme-overlay": "/node-modules/@repo/qm-components/src/queryData-theme-overlay/index"
      }
    },
    "node-modules/@repo/qm-components/src/queryData-theme-overlay/index": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "components/qm-empty/index": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "node-modules/@repo/qm-components/src/queryData-reader/index": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "chapter-content": "/node-modules/@repo/qm-components/src/queryData-reader/chapter-content",
        setting: "/node-modules/@repo/qm-components/src/queryData-reader/setting"
      }
    },
    "node-modules/@repo/qm-components/src/queryData-reader/chapter-content": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "node-modules/@repo/qm-components/src/queryData-reader/setting": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "setting-box": "/node-modules/@repo/qm-components/src/queryData-reader/components/set-box",
        "book-info": "/node-modules/@repo/qm-components/src/queryData-reader/components/book-info",
        "chapter-list": "/node-modules/@repo/qm-components/src/queryData-reader/components/chapter-list",
        "queryData-popup": "/node-modules/@repo/qm-components/src/queryData-popup/index"
      }
    },
    "node-modules/@repo/qm-components/src/queryData-reader/components/set-box": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "set-font-size": "/node-modules/@repo/qm-components/src/queryData-reader/components/set-font-size",
        "set-background": "/node-modules/@repo/qm-components/src/queryData-reader/components/set-background"
      }
    },
    "node-modules/@repo/qm-components/src/queryData-reader/components/set-font-size": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "node-modules/@repo/qm-components/src/queryData-reader/components/set-background": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "node-modules/@repo/qm-components/src/queryData-reader/components/book-info": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "queryData-image": "/node-modules/@repo/qm-components/src/queryData-image/index",
        "queryData-theme-overlay": "/node-modules/@repo/qm-components/src/queryData-theme-overlay/index"
      }
    },
    "node-modules/@repo/qm-components/src/queryData-image/index": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "node-modules/@repo/qm-components/src/queryData-reader/components/chapter-list": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "queryData-theme-overlay": "/node-modules/@repo/qm-components/src/queryData-theme-overlay/index"
      }
    },
    "node-modules/@repo/qm-components/src/queryData-popup/index": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "uni-popup": "/node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup"
      }
    },
    "node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "uni-transition": "/node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition"
      }
    },
    "node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "components/qm-pay-panel/index": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "panel-header": "/components/qm-pay-panel/components/panel-header",
        "qm-pay-card": "/components/qm-pay-card/index",
        "purchase-tips": "/components/qm-pay-panel/components/purchase-tips",
        "purchase-panel": "/components/qm-pay-panel/components/purchase-panel",
        "queryData-theme-overlay": "/node-modules/@repo/qm-components/src/queryData-theme-overlay/index"
      }
    },
    "components/qm-pay-panel/components/panel-header": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "components/qm-pay-card/index": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "guide-hand": "/components/qm-pay-card/components/guide-hand"
      }
    },
    "components/qm-pay-card/components/guide-hand": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "components/qm-pay-panel/components/purchase-tips": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "components/qm-pay-panel/components/purchase-panel": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "panel-header": "/components/qm-pay-panel/components/panel-header",
        "queryData-theme-overlay": "/node-modules/@repo/qm-components/src/queryData-theme-overlay/index"
      }
    },
    "pages/reader/components/final-chapter": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "qm-book-card": "/components/qm-book-card/index"
      }
    },
    "pages/mine/components/how-to-find-me": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "subpages/mine/components/trade-record-list": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index",
        "qm-empty": "/components/qm-empty/index",
        "qm-pull-up-loading": "/components/qm-pull-up-loading/index"
      }
    },
    "components/qm-pull-up-loading/index": {
      component: !0,
      usingComponents: {
        "qm-icon": "/components/qm-icon/index"
      }
    },
    "bdp_industry_sdk/pay-button": {},
    "bdp_industry_sdk/address-area": {},
    "bdp_industry_sdk/consume-card": {},
    "bdp_industry_sdk/store-area": {},
    "bdp_industry_sdk/rate-button": {},
    "bdp_industry_sdk/member-button": {}
  },
  __ExtensionConfig__ = {};
require("app.js"), ttJSCore.onDocumentReady();
