/*jshint esnext: true */
import httpLib                 from './http-lib.js';
import getLoginStatus          from './login-status.js';
import getUserProfile,
       {parseUserConfigFromHTML,
        getLocalLoginProfile,
        getSSOProfile}         from './get-user-profile.js';
import autoDetectProtocolAndLoginMethod,
       {getUrl,
        parseUrl,
        setUrl}                from './server-url.js';
import localLogin              from './local-login.js';
import logOut                  from './logout.js';
import setMobileUploadToken    from './set-mobile-upload-token.js';
import uploadJournal           from './upload-journal.js';
import generateUploadToken     from './generate-upload-token.js';
import getSyncData             from './get-sync-data.js';
import uploadFile              from './upload-file.js';
import isSSOServerAvailable    from './sso.js';

export default class MaharaServer {
  constructor(){
    this.loadState = this.loadState.bind(this);
    this.autoDetectProtocolAndLoginMethod = autoDetectProtocolAndLoginMethod.bind(this);
    this.setUrl = setUrl.bind(this);
    this.getUrl = getUrl.bind(this);
    this.setMobileUploadToken = setMobileUploadToken.bind(this);
    this.generateUploadToken = generateUploadToken.bind(this);
    this.usernamePasswordLogin = localLogin.bind(this);
    this.uploadJournal = uploadJournal.bind(this);
    this.uploadFile = uploadFile.bind(this);
    this.getLoginStatus = getLoginStatus.bind(this);
    this.getUserProfile = getUserProfile.bind(this);
    this.parseUserConfigFromHTML = parseUserConfigFromHTML.bind(this);
    this.getLocalLoginProfile = getLocalLoginProfile.bind(this);
    this.getSSOProfile = getSSOProfile.bind(this);
    this.isSSOServerAvailable = isSSOServerAvailable.bind(this);
    this.getSyncData = getSyncData.bind(this);
    this.logOut = logOut.bind(this);
  }
  loadState(state){
    this.url = state.url;
    this.ssoUrl = state.ssoUrl;
    this.loginTypes = state.loginTypes;
    this.loginType = state.loginType;
    this.user = state.user;
    this.uploadToken = state.uploadToken;
    this.profile = state.profile;
    this.sync = state.sync;
    // console.log("ServerState was", state);
  }
}
