import React, { Component } from 'react';
import {
  AppState,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Video, { FilterType, TextTrackType } from 'react-native-video';

// const v = require('../assets/treadmill.mp4');
// const vert = require('../assets/vertical.mp4');
// const bbbLocal = require('../assets/big_buck_bunny_720p_1mb.mp4');
const sintelLocal = require('../assets/sintel-2048-surround.mp4');

const bbbFile = 'file:///sdcard/Movies/bb.mp4';

const toyUri = 'http://techslides.com/demos/sample-videos/small.mp4?variable=value';
const bunnyUri = 'https://github.com/mediaelement/mediaelement-files/raw/master/big_buck_bunny.mp4';
const bunny2 = 'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4';
const trailerUri = 'https://gochip000001-a.akamaihd.net/VUBM0000000057481803/VUBM_00000000_0574815_3.mp4';
const assetUri = 'assets://src/main/VUBM_00000000_0592690_3.mp4';
const yt = 'https://www.youtube.com/watch?v=I9ihIfoWl3Q';
const mp3 = 'https://ia600706.us.archive.org/4/items/Sample_Audio_Clips_mp3/KuumbaPodcast1.mp3';
const tester = 'http://d3959tuydafzg6.cloudfront.net/1/travelogue2015.mp4';
const bipBopHLS = 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8';
const bipBop43 = 'https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8';
const tearsHLS = 'http://profficialsite.origin.mediaservices.windows.net/5ab94439-5804-4810-b220-1606ddcb8184/tears_of_steel_1080p-m3u8-aapl.ism/manifest(format=m3u8-aapl)';
const hls3 = 'http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8';
const iguana = 'https://mangaa.in/media/videos/vudumban.mp4';
const cookie = 'https://video-cdn-2.devhv.com/hirevue/53064/videos/188445/mbr/manifest.m3u8';
const bitmove1 = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';
const bitmove2 = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'; // Sintel
const bitmove3 = 'https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8';
const bitmove5 = 'http://www.streambox.fr/playlists/test_001/stream.m3u8'; // Chinese
const vertical1 = 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4';
const vertical2 = 'http://hamptonmaxwell.com/videos/treadmill.avi';
const pher = 'http://124.129.157.208:8810/SD/zhishidian/grade_8_1/wuli_shu/01.mp4';
const bbb = 'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4';
const qq = 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400';
const fs = 'https://cdn.filestackcontent.com/LtfjlQXQnZkRN7rr3gyw';
const kvorumFixed = 'https://storage.googleapis.com/kvorum_test_bucket/app/video/6114/v/out.m3u8';
const kvorumOrig = 'https://storage.googleapis.com/kvorum_test_bucket/app/video/6118/v/out.m3u8';
const corredor = 'http://video.ocean.com/abr/_definst_/smil:v2/video/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/36D64B7D46B8498494460EAB891AAFC1/93C69734057745FCAD595BD34902B10F.v2.eng.smil/playlist.m3u8';
const azure = 'https://nw-scout.azurewebsites.net/videos/e9b315b0-a17a-11e8-a2bc-b16050baa314.mp4';
const dash = 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd';

const posterUri = 'https://ia.media-imdb.com/images/M/MV5BMTczMzQzNDE5NV5BMl5BanBnXkFtZTcwNzYwMzQ1OA@@._V1_UX182_CR0,0,182,268_AL_.jpg';
// Ideal stream for testing multiple track selection, has multiple video, audio & text tracks and video frames have bitrate burned in
const forbiddenPlanet = 'http://sample.vodobox.com/planete_interdite/planete_interdite_alternate.m3u8';
const test1 = 'http://www.atxmediaserver.com:1935/TV_muslim1/TV_muslim1/chunklist_w1520826529.m3u8';

const demNowVideo = 'https://publish.dvlabs.com/democracynow/360/dn2018-0720.mp4';
const brokeniOSSubs = 'http://video.ocean.com/abr/_definst_/smil:v2/video/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/911544EDB10C4CB0822A7DA6A4AA1344/GS_0102_YUCATAN_WEB_2CH_CC/h264.smil/playlist.m3u8';

// Video Tracks
const adaptive = 'https://disprzmsindia.streaming.mediaservices.windows.net/426f4d5d-44d9-4355-96de-76fcf56d65b9/c27f1f4d-f88c-4761-8b59-56b3dd97.ism/manifest(format=m3u8-aapl).m3u8';
const multi = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';

// Audio Tracks
const dual = 'http://hamptonmaxwell.com:8080/dual.mp4';
const dualmp4 = 'http://hamptonmaxwell.com:8080/dualAudio.mp4';
const dualDash = 'http://cchlive.boldmss.com/TRU_TV_HD/TRU_TV_HD.isml/TRU_TV_HD.mpd';
const dualHLS = 'http://cchlive.boldmss.com/TRU_TV_HD/TRU_TV_HD.isml/TRU_TV_HD.m3u8';

// Text Tracks
const ttml = 'http://hamptonmaxwell.com:8080/IS_Intro_Subs.ttml';
const sintel_web = 'http://hamptonmaxwell.com:8080/sintel.mp4';
const sintel_srt_es = 'https://durian.blender.org/wp-content/content/subtitles/sintel_es.srt';
const sintel_srt_de = 'https://durian.blender.org/wp-content/content/subtitles/sintel_de.srt';
const sintel_srt_ru = 'https://durian.blender.org/wp-content/content/subtitles/sintel_ru.srt';
const sintel_vtt_en = 'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt';
const sintel_vtt_es = 'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_es.vtt';

const apple1 = 'https://tungsten.aaplimg.com/VOD/bipbop_adv_example_hevc/master.m3u8';
const apple2 = 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8';

const timedJW = 'https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/basic/audio-metadata/assets/index.m3u8';
const timedChops = 'https://wowzaprod105-i.akamaihd.net/hls/live/577665/da9dd473/playlist.m3u8';
const timedWowza = 'http://wowzaprod105-i.akamaihd.net:1935/vod/mp4:sample.mp4/playlist.m3u8';
const timed = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';

const stuck = 'https://1507-globaldots.gcdn.co/SBG3/58906f0d4f650b851b854f3b/2018-05-27_11-51/1/5b0a718b2d5f99252e62bd2a/COMMON/720/playlist.m3u8';

const demNowText = 'https://integration.democracynow.org/resources/captions/shows/5874/English.vtt';
// const demNowText = 'http://hamptonmaxwell.com:8080/DemNow.vtt';

const textTracks1 = [
  { // 0
    title: 'Spain VTT',
    uri: sintel_vtt_es,
    language: 'es',
    type: TextTrackType.VTT
  },
  { // 1
    title: 'English VTT',
    uri: sintel_vtt_en,
    language: 'en',
    type: TextTrackType.VTT
  },
  /*
  { // 2
    title: 'TTML 1',
    uri: ttml,
    language: 'en',
    type: TextTrackType.TTML
  },
  { // 3
    title: "Russia SRT",
    uri: sintel_srt_ru,
    language: 'ru',
    type: TextTrackType.SRT
  }
  */
];

const textTracks2 = [
  {
    title: "Deutsch SRT",
    uri: sintel_srt_ru,
    language: 'de',
    type: TextTrackType.SRT
  }
];

const textTracks3 = [{
  title: "English",
  language: "en",
  type: TextTrackType.VTT,
  uri: sintel_vtt_en
}];

export default class App extends Component {
  state = {
    bufferConfig: {
      minBufferMs: 50000,
      maxBufferMs: 50000,
      bufferForPlaybackMs: 2500,
      bufferForPlaybackAfterRebufferMs: 5000
    },
    captions: false,
    controls: true,
    currentTime: 0,
    disableFocus: true,
    filter: undefined,
    fullscreen: false,
    hasAudioFocus: true,
    hasVideo: true,
    hidden: false,
    paused: false,
    progressUpdateInterval: 2500,
    rate: 1.0,
    repeat: false,
    seekableDuration: 0,
    selectedAudioTrack: {
      type: 'system'
    },
    selectedTextTrack: {
      type: 'system',
    },
    selectedVideoTrack: {
      type: 'auto'
    },
    source: { uri: forbiddenPlanet },
    source: sintelLocal,
    startFullscreen: true,
    // textTrackGroup: 'one',
    useTextureView: true,
    videoNumber: 0,
    volume: 0.5
  }

  componentDidMount() {
    AppState.addEventListener('change', this.onAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.onAppStateChange);
  }

  loadCookie = () => {
    const url = 'https://app.devhv.com/api/v1/videos/188445/';
    return fetch(url, {
      headers: {
        Authorization: 'Bearer c11AEGPPhVybEjIhOyZAEdkIlh04abOM836LAqZyfa8=',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => json.hlsUrl);
  }

  onAppStateChange = change => {
    console.log('onAppStateChange', change);
    /*
    if (change === 'background') {
      console.log('Pausing due to background');
      this.setState({ paused: true });
    }
    */
  }

  onAudioBecomingNoisy = event => {
    console.log('onAudioBecomingNoisy', event);
  }

  onAudioFocusChanged = event => {
    console.log('onAudioFocusChanged', event);
    this.setState({ hasAudioFocus: event.hasAudioFocus });
  }

  onBandwidthUpdate = event => {
    console.log('onBandwidthUpdate', event);
  }

  onBuffer = event => {
    console.log('onBuffer', event);
  }

  onEnd = () => {
    console.log('onEnd');
  }

  onError = event => {
    console.log('onError', event);
  }

  onFullscreenPlayerWillPresent = event => {
    console.log('onFullscreenPlayerWillPresent', event);
  }

  onFullscreenPlayerDidPresent = event => {
    console.log('onFullscreenPlayerDidPresent', event);
  }

  onFullscreenPlayerWillDismiss = event => {
    console.log('onFullscreenPlayerWillDismiss', event);
  }

  onFullscreenPlayerDidDismiss = event => {
    console.log('onFullscreenPlayerDidDismiss', event);
  }

  onLoad = event => {
    console.log('onLoad', event);
    if (this.state.startFullscreen) {
      this.player.presentFullscreenPlayer();
    }
    if (this.state.seekPosition) {
      this.player.seek(this.state.seekPosition);
    }
  }

  onLoadStart = event => {
    console.log('onLoadStart', event);
  }

  onPressAudioTrack = (type, value) => {
    this.setState({
      selectedAudioTrack: { type, value }
    });
  }

  onPressControls = () => {
    this.setState({
      controls: false
    });
  }

  onPressCookie = async () => {
    const uri = await this.loadCookie();
    console.log('Cookie URL', uri);
    this.setState({
      source: { uri }
    });
  }

  onPressFilter = filter => {
    this.setState({ filter });
  }

  onPressFullscreen = () => {
    if (this.state.fullscreen) {
      this.setState({ fullscreen: false });
      this.player.dismissFullscreenPlayer();
    } else {
      this.setState({ fullscreen: true });
      this.player.presentFullscreenPlayer();
    }
  }

  onPressHide = () => {
    this.setState({ hidden: !this.state.hidden });
  }

  onPressPause = () => {
    this.setState({ paused: !this.state.paused });
  }

  onPressProgressDown = () => {
    const progressUpdateInterval = this.state.progressUpdateInterval / 2;
    console.log('Set progress interval to', progressUpdateInterval);
    this.setState({ progressUpdateInterval });
  }

  onPressProgressUp = () => {
    const progressUpdateInterval = this.state.progressUpdateInterval * 2;
    console.log('Set progress interval to', progressUpdateInterval);
    this.setState({ progressUpdateInterval });
  }

  onPressRateDown = () => {
    const rate = this.state.rate / 2;
    console.log('Set rate to', rate);
    this.setState({ rate });
  }

  onPressRateUp = () => {
    const rate = this.state.rate * 2;
    console.log('Set rate to', rate);
    this.setState({ rate });
  }

  onPressRepeat = () => {
    console.log('Set repeat to', !this.state.repeat);
    this.setState({ repeat: !this.state.repeat });
  }

  onPressRestart = () => {
    this.player.seek(0);
  }

  onPressRoute = () => {
    this.props.navigation.navigate('Other');
  }

  onPressSeek = () => {
    this.player.seek(this.state.currentTime + 300, 500);
  }

  onPressSourceBunny = () => {
    const source = { uri: hls3 };
    this.setState({ source });
  }

  onPressSourceGoosebumps = () => {
    this.setState({
      source: { uri: trailerUri }
    });
  }

  onPressSourceSilence = () => {
    this.setState({
      source: { uri: silence }
    });
  }

  onPressSourceSintel = () => {
    this.setState({
      source: { uri: bitmove2 }
    });
  }

  onPressSwapVideo = () => {
    let videoNumber = this.state.videoNumber;
    videoNumber += 1;
    if (videoNumber === 5) {
      videoNumber = 0;
    }
    let uri;
    switch (videoNumber) {
      case 0: uri = trailerUri; break;
      case 1: uri = bunnyUri; break;
      case 2: uri = hls1; break;
      case 3: uri = sintel_web; break;
      case 4: uri = captionsUri; break;
    }

    const seekPosition = Math.round(10 + (Math.random() * 45));

    this.setState({
      seekPosition,
      source: { uri },
      videoNumber
    });
  }

  onPressSwitchTextTrack = () => {
    this.setState({
      textTracks: text
    });
  }

  onPressTextTrack = (type, value) => {
    if (!type) {
      this.setState({ selectedTextTrack: null });
    } else {
      this.setState({
        selectedTextTrack: { type, value }
      });
    }
  }

  onPressTextTrackGroup = textTrackGroup => {
    this.setState({ textTrackGroup });
  }

  onPressToggleViewType = () => {
    this.setState({
      useTextureView: !this.state.useTextureView
    });
  }

  onPressVideoTrack = (type, value) => {
    this.setState({
      selectedVideoTrack: { type, value }
    });
  }

  onProgress = event => {
    // console.log('Progress', event); // event.currentTime, '/', event.seekableDuration);
    this.setState({
      currentTime: event.currentTime,
      seekableDuration: event.seekableDuration
    });
  }

  onSeek = event => {
    console.log('onSeek', event);
  }

  onTimedMetadata = event => {
    console.log('onTimedMetadata', event);
  }

  render() {
    const { hidden, selectedTextTrack, textTrackGroup } = this.state;

    let selectedTextTrackInfo;
    if (selectedTextTrack) {
      selectedTextTrackInfo = selectedTextTrack.type + ' (' + selectedTextTrack.value + ')';
    } else {
      selectedTextTrackInfo = 'Disabled';
    }
    const isPaused = this.state.paused;

    return (
      <View style={styles.container}>
        {!hidden && this.renderVideo()}
        <View style={styles.buttons}>
          <Text style={styles.labelText}>
            {Math.round(this.state.currentTime)} / {Math.round(this.state.seekableDuration)}
          </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={this.onPressPause}>
            <Text style={styles.buttonText}>
              {isPaused ? 'Play' : 'Pause'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPressRestart}>
            <Text style={styles.buttonText}>Restart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPressRepeat}>
            <Text style={styles.buttonText}>
              Repeat {this.state.repeat ? 'On' : 'Off'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPressSeek}>
            <Text style={styles.buttonText}>
              Seek 300
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPressControls}>
            <Text style={styles.buttonText}>
              Con
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={this.onPressFullscreen}>
            <Text style={styles.buttonText}>
              Fullscreen
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPressCookie}>
            <Text style={styles.buttonText}>
              Cookie
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPressHide}>
            <Text style={styles.buttonText}>
              Hide
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPressRoute}>
            <Text style={styles.buttonText}>
              Route
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPressToggleViewType}>
            <Text style={styles.buttonText}>
              {this.state.useTextureView ? 'TextureView' : 'SurfaceView'}
            </Text>
          </TouchableOpacity>
        </View>
        {this.renderAudioSelection()}
        {/* {this.renderTextSelection()} */}
        {this.renderTextIndexSelection()}
        {this.renderVideoSelection()}
        {this.renderFilter()}
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={this.onPressSourceBunny}>
            <Text style={styles.buttonText}>
              Tears
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPressSourceGoosebumps}>
            <Text style={styles.buttonText}>
              Goosebumps
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPressSourceSilence}>
            <Text style={styles.buttonText}>
              Silence
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPressSourceSintel}>
            <Text style={styles.buttonText}>
              Sintel
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={this.onPressSwapVideo}>
            <Text style={styles.buttonText}>
              Swap Video
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderAudioSelection = () => (
    <View style={styles.buttons}>
      <Text style={styles.buttonText}>
        Audio
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressAudioTrack('disabled', null)}>
        <Text style={styles.buttonText}>
          Off
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressAudioTrack('index', 0)}>
        <Text style={styles.buttonText}>
          T0
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressAudioTrack('index', 1)}>
        <Text style={styles.buttonText}>
          T1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressAudioTrack('index', 2)}>
        <Text style={styles.buttonText}>
          T2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressAudioTrack('index', 3)}>
        <Text style={styles.buttonText}>
          T3
        </Text>
      </TouchableOpacity>
    </View>
  )

  renderRateAndProgress = () => (
    <View style={styles.buttons}>
      <Text style={styles.labelText}>
        Rate {this.state.rate}x
      </Text>
      <TouchableOpacity style={styles.button} onPress={this.onPressRateUp}>
        <Text style={styles.buttonText}>
          Up
      </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={this.onPressRateDown}>
        <Text style={styles.buttonText}>
          Down
      </Text>
      </TouchableOpacity>
      <Text style={styles.labelText}>
        Progress Interval {this.state.progressUpdateInterval}
      </Text>
      <TouchableOpacity style={styles.button} onPress={this.onPressProgressUp}>
        <Text style={styles.buttonText}>
          Up
      </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={this.onPressProgressDown}>
        <Text style={styles.buttonText}>
          Down
      </Text>
      </TouchableOpacity>
    </View>
  )

  renderTextIndexSelection = () => (
    <View style={styles.buttons}>
      <Text style={styles.buttonText}>
        Text
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrack('system')}>
        <Text style={styles.buttonText}>
          Auto
      </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrack('index', 0)}>
        <Text style={styles.buttonText}>
          T0
      </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrack('index', 1)}>
        <Text style={styles.buttonText}>
          T1
      </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrack('index', 2)}>
        <Text style={styles.buttonText}>
          T2
      </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrack('index', 3)}>
        <Text style={styles.buttonText}>
          T3
      </Text>
      </TouchableOpacity>
    </View>
  )

  renderTextSelection = () => {
    const { selectedTextTrackInfo } = this.state;
    return (
      <View style={styles.buttons}>
        <Text style={styles.labelText}>
          Text {selectedTextTrackInfo}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrack('language', 'fre')}>
          <Text style={styles.buttonText}>
            fre
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrack('title', 'English')}>
          <Text style={styles.buttonText}>
            Sintel EN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrack('disabled')}>
          <Text style={styles.buttonText}>
            Disabled
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrack('system')}>
          <Text style={styles.buttonText}>
            System
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrack(null)}>
          <Text style={styles.buttonText}>
            null
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderTrackGroup = () => (
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrack('index', 0)}>
        <Text style={styles.buttonText}>
          Track Group {textTrackGroup}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrackGroup('none')}>
        <Text style={styles.buttonText}>
          None
      </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrackGroup('one')}>
        <Text style={styles.buttonText}>
          One
      </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressTextTrackGroup('two')}>
        <Text style={styles.buttonText}>
          Two
      </Text>
      </TouchableOpacity>
    </View>
  )

  renderVideoSelection = () => (
    <View style={styles.buttons}>
      <Text style={styles.labelText}>
        Video
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressVideoTrack('auto')}>
        <Text style={styles.buttonText}>
          Auto
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressVideoTrack('resolution', 480)}>
        <Text style={styles.buttonText}>
          480p
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressVideoTrack('resolution', 720)}>
        <Text style={styles.buttonText}>
          720p
        </Text>
      </TouchableOpacity>
    </View>
  )

  renderFilter = () => (
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressFilter(undefined)}>
        <Text style={styles.buttonText}>
          undefined
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressFilter(FilterType.NONE)}>
        <Text style={styles.buttonText}>
          None
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressFilter(FilterType.CHROME)}>
        <Text style={styles.buttonText}>
          Chrome
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.onPressFilter(FilterType.MONO)}>
        <Text style={styles.buttonText}>
          Mono
          </Text>
      </TouchableOpacity>

    </View>

  )

  renderVideo = () => {
    const { textTrackGroup, videoNumber } = this.state;

    let textTracks;
    switch (textTrackGroup) {
      case 'one':
        textTracks = textTracks1;
        break;
      case 'two':
        textTracks = textTracks2;
        break;
      case 'three':
        textTracks = textTracks3;
        break;
      default:
        break;
    }

    return (
      <Video
        /*
        source={{
          uri: bitmove2,
          headers: {
            'X-HTTP-Object': { key: 'value' },
            'X-HTTP-Date': new Date()
          },
          // headers: null
        }}
        */
        source={this.state.source}
        controls={this.state.controls}
        style={styles.video}
        /*
        bufferConfig={this.state.bufferConfig}
        //filter={this.state.filter}
        //filterEnabled={false}
        fullScreenOrientation="portrait"
        maxBitRate={700000}
        // ignoreSilentSwitch="ignore"
        onAudioBecomingNoisy={this.onAudioBecomingNoisy}
        onAudioFocusChanged={this.onAudioFocusChanged}
        onBandwidthUpdate={this.onBandwidthUpdate}
        onBuffer={this.onBuffer}
        onEnd={this.onEnd}
        onError={this.onError}
        onFullscreenPlayerWillPresent={this.onFullscreenPlayerWillPresent}
        onFullscreenPlayerDidPresent={this.onFullscreenPlayerDidPresent}
        onFullscreenPlayerWillDismiss={this.onFullscreenPlayerWillDismiss}
        onFullscreenPlayerDidDismiss={this.onFullscreenPlayerDidDismiss}
        onLoad={this.onLoad}
        onLoadStart={this.onLoadStart}
        onProgress={this.onProgress}
        onSeek={this.onSeek}
        onTimedMetadata={this.onTimedMetadata}
        paused={this.state.paused}
        playInBackground={false}
        playWhenInactive
        // poster={posterUri}
        posterResizeMode="cover"
        progressUpdateInterval={this.state.progressUpdateInterval}
        rate={this.state.rate}
        ref={ref => this.player = ref}
        repeat={this.state.repeat}
        reportBandwidth={true}
        resizeMode="contain"
        selectedAudioTrack={this.state.selectedAudioTrack}
        selectedTextTrack={this.state.selectedTextTrack}
        selectedVideoTrack={this.state.selectedVideoTrack}
        stereoPan={0}
        style={styles.video}
        textTracks={textTracks}
        useTextureView={this.state.useTextureView}
        volume={this.state.volume}
        */
      />
    );
  }


}

/*
const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1
  },
  video: {
    borderWidth: 1,
    marginTop: 40,
    width: 500,
    height: 300
  },
  buttons: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  button: {
    borderRadius: 8,
    borderWidth: 1,
    marginLeft: 8,
    padding: 5
  },
  buttonText: {},
  labelText: {
    marginLeft: 8
  }
});
