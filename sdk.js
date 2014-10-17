(function(window, undefined) {

    var campaignTools = {};

    campaignTools.constant = {
        // 用于电话号码验证，已加入阿里巴巴运营的 170 号段，最后更新于 2014.7
        telReg: /^0?(13[0-9]|15[0-9]|18[0-9]|14[57]|17[0])[0-9]{8}$/,
        // 在 P4 中访问这个 Url 时，P4 会直接关闭当前 Webview
        quitWebviewUrl: 'http://www.wandoujia.com/?callback=finish'
    };

    /*
     * GA 事件统计
     */
    campaignTools.pushGaEvent = function (category, action, label, value) {
        if (typeof ga != 'undefined' && ga) {
            category = category || "";
            action = action || "";
            label = label || "";
            value = value || 0;
            ga('send', 'event', category, action, label, value);
        }
    };

    /*
     * body 高设置为屏幕显示区域高度
     * @notice Webview 有时屏幕初始高度会有 bug，此方法为解决此 bug
     */
     campaignTools.setFullScreenHeight = function () {

        var height = window.innerHeight;
        var minHeight = 480; // 根据页面需求变化，默认 480px

        if (height < minHeight) {
            setTimeout(function () {
                height = window.innerHeight;
                if (height < minHeight) {
                    height = minHeight;
                }
                document.body.style.height = height + 'px';
            }, 1000);
        } else {
            document.body.style.height = height + 'px';
        }
     };


    /*
     * 判断是否在 P4 Webview 中
     * @return {boolean} true || false
     */
    campaignTools.inWdj = function () {
        if (typeof window.campaignPlugin != 'undefined' && window.campaignPlugin) {
            return true;
        } else {
            return false;
        }
    };

    if (typeof window.campaignPlugin != 'undefined' && window.campaignPlugin) {

        /*
         * 调起安卓系统级别分享
         * @param title {string} 分享标题
         * @param content {string} 分享内容
         * @notice 只可分享文字，如需带有图片的分享请使用 shareTo 方法
         */
        campaignTools.runSystemShare = function (title, content) {
            campaignPlugin.share(title, content);
        };

        /*
         * 调起应用级别分享
         * @param title {string} 分享标题
         * @param content {string} 分享内容
         * @param imgUrl {string} 分享图片的地址(不建议过大)
         * @param shareUrl {string} 分享 URL
         * @param appType {string} SINA_WEIBO || WECHAT || WECHAT_TIMELINE
         * @notice 目前只支持新浪微博，微信对话框，微信朋友圈
         */
        campaignTools.runAppShare = function (title, content, imgUrl, shareUrl, appType) {
            campaignPlugin.shareTo(title, content, imgUrl, shareUrl, appType);
        };

        /*
         * 在外部浏览器中打开链接
         * @param {string} URL
         */
        campaignTools.openInBrowser = function (url) {
            campaignPlugin.openInBrowser(url);
        };

        /*
         * 获取手机 UDID
         * @return {string} UDID
         */
        campaignTools.getUDID = function () {
            return campaignPlugin.getUDID();
        };

        /*
         * 获取应用安装状态
         * @param packageName {string} 应用包名
         * @return {boolean} true || false 
         */
        campaignTools.isInstalled = function (packageName) {
            return campaignPlugin.isInstalled(packageName);
        };

        /*
         * 获取应用版本号
         * @param packageName {string} 应用包名
         * @return {string} 版本号
         */
        campaignTools.getAppVersionCode = function (packageName) {
            return campaignPlugin.getAppVersionCode(packageName);
        };

        /*
         * 打开其他应用
         * @param packageName {string} 应用包名
         */
        campaignTools.openApp = function (packageName) {
            campaignPlugin.openApp(packageName);
        };

        /*
         * 打开应用在 P4 内的详情页
         * @param packageName {string} 应用包名
         */
        campaignTools.openAppDetail = function (packageName) {
            campaignPlugin.openAppDetail(packageName);
        };

        /*
         * 待测试
         * @param packageName {string} 应用包名
         */
        campaignTools.openAppDetailWithoutAward = function (packageName) {
            campaignPlugin.openAppDetailWithoutAward(packageName);
        };

        /*
         * 打开其他应用内某页面
         * @param serializedIntent {string} 应用内搜索协议地址 
         * @example meituanmovie://www.meituan.com/movie?id=78379&nm=后会无期
         */
        campaignTools.openAppPage = function (serializedIntent) {
            campaignPlugin.startActivity(serializedIntent);
        };

        /*
         * 安装应用
         * @param packageName {string} 应用包名 
         * @param downloadUrl {string} 下载链接
         * @param appName {string} 应用名称（用于显示在 P4 下载任务列表中）
         * @param iconUrl {string} 图标 URL（用于显示在 P4 下载任务列表中）
         * @param size {number} 应用大小（请访问 http://apps.wandoujia.com/api/v1/apps/ + packageName 查询 bytes 字段）
         */
        campaignTools.installApp = function (packageName, downloadUrl, appName, iconUrl, size) {
            campaignPlugin.install(packageName, downloadUrl, appName, iconUrl, size);
        };

        /*
         * 待测试
         * @param packageName {string} 应用包名 
         */
        campaignTools.installInMarket = function (packageName) {
            campaignPlugin.installInMarket(packageName);
        };

        /*
         * 待测试
         * @param title {string} 页面 Title 
         */
        campaignTools.setTitle = function (title) {
            campaignPlugin.setTitle(title);
        };
    }

    var _campaignTools = window.campaignTools;
    window.campaignTools = campaignTools;

    campaignTools.noConflict = function () {
        window.campaignTools = _campaignTools;
        return campaignTools;
    };
})(this);