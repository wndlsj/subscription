import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.firebear.androil',
  name: '小熊油耗',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.firebear.androil.app.splash.SplashActivity',
      rules: [
        {
          matches:
            '[id="com.firebear.androil:id/adContainerLay"] [text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12712742',
        },
        {
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/13088169',
            'https://i.gkd.li/import/12855707',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '广告弹窗',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: [
        {
          key: 0,
          name: '点击右上角x',
          matches: '@Image < View + View >2 TextView[text="广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12754919'],
        },
        {
          key: 1,
          name: '点击右上角[数字s|跳过]',
          matches: '[text="广告"] + View >4 [text="| 跳过"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12864214'],
        },
      ],
    },
    {
      key: 2,
      name: '升级弹窗',
      activityIds: 'com.firebear.androil.app.home.MainActivity',
      rules:
        '@[id="com.firebear.androil:id/dismissNtfImgView"] < RelativeLayout - [id="com.firebear.androil:id/contentLay"] >3 TextView[text^="升级"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12755032',
    },
  ],
});
