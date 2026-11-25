import { Language, SACRED_BRANDING } from '../types';
import { getAppUrlSync } from '../utils/url';
import { buildStandardShareText } from '../services/shareTemplate';

export interface AppTranslations {
  appName: string;
  appSubtitle: string;
  sacredTop: string;
  sacredBottom: string;
  
  // Navigation Tabs
  tabDailySakhi: string;
  tabStepsFormula: string;
  tabGranthaSangrah: string;
  tabQuiz: string;
  tabAkhandPath: string;
  tabDiary: string;
  tabSettings: string;
  tabKabiraKatha: string;

  // Daily Pawan Sakhi
  dailyTitle: string;
  dailySubtitle: string;
  swadhyayDate: string;
  startSwadhyayBtn: string;
  takeDailyQuizBtn: string;
  listenDhunBtn: string;
  shareSakhiBtn: string;
  bookmarkBtn: string;
  savedToBookmarks: string;

  // 10-Step / 5-Step Swadhyay Formula
  stepsHeaderTitle: string;
  stepsHeaderDesc: string;
  step1Title: string;
  step1Subtitle: string;
  step2Title: string;
  step2Subtitle: string;
  step3Title: string;
  step3Subtitle: string;
  step4Title: string;
  step4Subtitle: string;
  step5Title: string;
  step5Subtitle: string;

  wordMeaningsTitle: string;
  contemplationPromptTitle: string;
  practicalActionTitle: string;
  samarpanPrayerTitle: string;
  prevStepBtn: string;
  nextStepBtn: string;
  completeSwadhyayBtn: string;
  swadhyayCompletedCelebration: string;

  // Grantha Sangrah
  allGranthas: string;
  filterByCategory: string;
  searchSakhiPlaceholder: string;
  sakhisCount: string;
  readSakhiBtn: string;

  // Akhand Path
  akhandPathTitle: string;
  akhandPathSubtitle: string;
  playRecitation: string;
  pauseRecitation: string;
  readingSpeed: string;
  autoScrollLabel: string;
  activeCouplet: string;

  // Quiz Module
  quizTitle: string;
  quizSubtitle: string;
  questionNumber: string;
  ofTotal: string;
  scoreLabel: string;
  selectOptionPrompt: string;
  submitAnswerBtn: string;
  nextQuestionBtn: string;
  quizCompletedTitle: string;
  quizCompletedDesc: string;
  divineBlessingEarned: string;
  retakeQuizBtn: string;
  claimBlessingBtn: string;
  correctAnswerText: string;
  explanationTitle: string;

  // Divine Blessing & Rose Petals
  blessingModalTitle: string;
  blessingModalSubtitle: string;
  blessingQuote: string;
  blessingText: string;
  rosePetalShowerText: string;
  triggerPetalsBtn: string;
  closeBtn: string;
  tabHealthDiagnostic: string;
  healthDiagnosticTitle: string;
  connectionStatus: string;
  onlineLabel: string;
  offlineLabel: string;
  appIntegrity: string;
  integrityHealthy: string;
  audioEngineStatus: string;
  audioActive: string;
  audioSuspended: string;
  healthDiagnosticSubtitle: string;
  appVersionLabel: string;
  appVersionValue: string;
  localStorageLabel: string;
  localStorageUsed: string;
  lastCheckLabel: string;
  localEnvTitle: string;
  localEnvDesc: string;
  platformLabel: string;
  themeLabel: string;
  languageLabel: string;
  refreshBtn: string;
  tabDeepSearch: string;
  tabMeditationTimer: string;
  tabCommunityBoard: string;
  searchPlaceholder: string;
  searchBtn: string;
  searchResults: string;
  noResults: string;
  meditationTimerTitle: string;
  meditationSilence: string;
  meditationReady: string;
  deepSumiran: string;
  startMeditation: string;
  stopMeditation: string;
  selectAmbientSound: string;
  natureSound: string;
  fluteSound: string;
  beenSound: string;
  satyanaamDhunSound: string;
  communityBoardTitle: string;
  communityBoardDesc: string;
  shareAnonymously: string;
  postEntry: string;
  signInToJoin: string;
  signInDesc: string;
  continueWithGoogle: string;
  communityLiveMsg: string;
  deepSearchEngine: string;
  deepSearchDesc: string;
  exploreByGrantha: string;
  exploreByGranthaDesc: string;
  topicSearch: string;
  topicSearchDesc: string;
  syncSettingsDesc: string;
  saveSettingsBtn: string;
  nityaVaniTitle: string;
  nityaVaniDesc: string;
  enableNotifications: string;
  notificationTime: string;
  notificationPermissionDenied: string;
  sidebarTitle: string;
  sidebarFooter: string;
  openSidebar: string;
  closeSidebar: string;

  // Simran / Mantra Status
  statusLabel: string;
  goalAchieved: string;
  inProgress: string;
  malasLabel: string;
  noSimranSessions: string;
  simranGoalReached: string;
  simranGoalPending: string;
  dainikChintan: string;
  vishaySandharb: string;
  shabadarthLabel: string;

  // Spiritual Diary
  diaryTitle: string;
  diarySubtitle: string;
  addReflectionPrompt: string;
  saveReflectionBtn: string;
  reflectionSavedToast: string;
  noReflectionsYet: string;
  deleteEntry: string;
  exportDiaryBtn: string;
  newReflectionBtn: string;
  addNewReflectionTitle: string;
  categoryLabel: string;
  sakhiNumberOptional: string;
  yourReflectionLabel: string;
  diaryTags: string[];
  defaultCategory: string;
  exportLabel: string;

  // Saheb Jantri (Calendar)
  jantriTitle: string;
  jantriSubtitle: string;
  purnimaLabel: string;
  amavasyaLabel: string;
  sangrandLabel: string;
  kabirJayantiLabel: string;
  kabirNirvanLabel: string;
  guruJayantiLabel: string;
  magharUtsavLabel: string;
  satnamSalutation: string;
  sahebBangiSalutation: string;
  monthlyGridTitle: string;

  // Mantra Tracker
  mantraTrackerTitle: string;
  mantraTrackerSubtitle: string;
  dailyGoalLabel: string;
  totalCountsLabel: string;
  currentMalaLabel: string;
  logMalaBtn: string;
  resetProgressBtn: string;
  mantraHistoryTitle: string;

  // Audio Library
  audioLibraryTitle: string;
  audioLibrarySubtitle: string;
  playSatsangBtn: string;
  granthAudioLabel: string;
  bhajanAudioLabel: string;
  playingNowLabel: string;

  // Universe Map (Brahmand Darshan)
  tabUniverseMap: string;
  universeMapTitle: string;
  universeMapSubtitle: string;
  universeLevels: {
    id: number;
    title: string;
    entity: string;
    frequency: string;
    description: string;
    vani: string;
  }[];
  vaniLabel: string;
  entityLabel: string;
  frequencyLabel: string;
  elementDetailsTitle: string;
  elementDetailsDesc: string;
  creationSecretTitle: string;
  creationSecretDesc: string;
  suratShabdYogaTitle: string;
  suratShabdYogaDesc: string;
  elementDetailsFull: string;
  creationSecretFull: string;
  suratShabdYogaFull: string;
  universeMapQuote: string;
  listenFrequencyBtn: string;
  stopFrequencyBtn: string;
  startJourneyBtn: string;
  stopJourneyBtn: string;
  journeyDesc: string;
  accordingToKabirSagar: string;

  // Satyanaam Audio & Dhun
  dhunTitle: string;
  dhunDesc: string;
  dhunPlay: string;
  dhunPause: string;
  volumeLabel: string;
  droneHarmonics: string;
  chimeRing: string;

  // Settings & Theme
  settingsTitle: string;
  appearanceTheme: string;
  themeBhojpatra: string;
  themeAmritNeel: string;
  themeSwarnaShanti: string;
  themeBanyanGhat: string;
  themeMagharDham: string;
  themeRoyal: string;
  themeSaffron: string;
  themeEmerald: string;
  themeOled: string;
  themeDawn: string;
  themeForest: string;
  themeSunset: string;
  themeRiver: string;
  themeAutumn: string;
  languageSelect: string;
  nityaVaniReminder: string;
  reminderTime: string;
  notificationsEnabledMsg: string;
  notificationsBlockedMsg: string;
  fontSizeLabel: string;
  sizeSmall: string;
  sizeMedium: string;
  sizeLarge: string;

  // PWA Install & Offline
  installAppTitle: string;
  installAppDesc: string;
  installBtn: string;
  installedBadge: string;
  offlineBanner: string;
  onlineBanner: string;

  // Share template
  shareCopiedToast: string;

  // Convenience aliases & UI labels
  appTitle: string;
  allSakhisTitle: string;
  studyMethodologyTitle: string;
  chooseLanguageTitle: string;
  chooseThemeTitle: string;
  readingModeTitle: string;
  lineSpacingTitle: string;
  widthModeTitle: string;
  widthNarrow: string;
  widthMedium: string;
  widthWide: string;
  fontFamilyTitle: string;
  fontDevotionalSerif: string;
  fontDevotionalSans: string;
  fontSizeTitle: string;
  fontSmall: string;
  fontMedium: string;
  fontLarge: string;
  sahajModeTitle: string;
  sahajModeSubtitle: string;
  sahajModeBadge: string;
  sahajModeActive: string;
  sahajModeEnabledDesc: string;
  sahajModeDisabledDesc: string;
  sahajModeFocusNotice: string;
  openMeditationTimerBtn: string;
  openDailySakhiBtn: string;
  dhunPlayerTitle: string;
  dhunDescription: string;
  vocalChantTitle: string;
  vocalChantDesc: string;
  notificationReminderTitle: string;
  notificationReminderDesc: string;
  testNotificationBtn: string;
  noEntriesYet: string;
  divineDarshanTitle: string;
  divineDarshanSubtitle: string;
  offerFlowersBtn: string;
  viewFullDarshanBtn: string;
  darshanBlessingText: string;
  pranamMantra: string;
  uploadPortraitBtn: string;
  resetPortraitBtn: string;
  customPortraitActive: string;
  tilakAuthenticityNote: string;
  uploadPortraitHelp: string;
  portraitUpdatedSuccess: string;
  uploadChangeImageBtn: string;
  uploadAuthenticPortraitTitle: string;
  uploadAuthenticPortraitDesc: string;
  dragDropOrBrowse: string;
  removePortraitBtn: string;
  shwetTilakBadge: string;
  noImageUploadedYet: string;
  satguruMahimaTitle: string;
  vaniPathBtn: string;
  vaniVandanaLabel: string;
  darshanHeaderTitle: string;
  tilakAuthenticityDetail: string;
  guruGodCouplet: string;
  stopRecitationBtn: string;
  listenBtn: string;
  blessingBtn: string;
  todaySakhiVani: string;
  divineBhavarthLabel: string;
  reflectionPlaceholder: string;
  cancelBtn: string;
  addDiaryEntryBtn: string;
  akhandPathFeatureTitle: string;
  akhandPathFeatureDesc: string;
  startBtn: string;
  swadhyayBlessingTitle: string;
  swadhyayBlessingMsg: string;
  quizBlessingTitle: string;
  quizBlessingMsg: string;
  akhandPathBlessingTitle: string;
  akhandPathBlessingMsg: string;
  footerDescription: string;
  pwaTag: string;
  themeLanguageSettings: string;
  moolPawanSakhiHeader: string;
  bandichhorLabel: string;
  designerTitle: string;
  themeStyleLabel: string;
  downloadLangLabel: string;
  aspectRatioLabel: string;
  squareRatioLabel: string;
  storyRatioLabel: string;
  cancelLabel: string;
  downloadBtn: string;
  lowLabel: string;
  highLabel: string;
  onStatus: string;
  offStatus: string;
  tripleChimeLabel: string;
  sacredBellLabel: string;
  amritvelaLabel: string;
  sentStatus: string;
  pwaTitleLabel: string;
  pwaDescLabel: string;
  notificationPermissionError: string;
  notificationNotSupportedError: string;
  speedSlow: string;
  speedNormal: string;
  speedFast: string;
  kathaTitle: string;
  kathaSubtitle: string;
  toggleExplanation: string;
  hideText: string;
  showText: string;
  bhavarthLabel: string;
  openInNewTab: string;
  settingsSavedSuccess: string;
  inAppReminderActive: string;
  pushNoticeIframe: string;
  kathaAkhandScrollMode: string;
  kathaAkhandScrollActive: string;
  kathaAkhandScrollPause: string;
  kathaAkhandScrollResume: string;
  kathaAkhandScrollSpeed: string;
  kathaAkhandCompleted: string;
  fontSerifLabel: string;
  fontSansLabel: string;
  scrollToTop: string;
  scrollToBottom: string;
  spiritualEssenceLabel: string;
  shabdarthLabel: string;
  selectChapterLabel: string;
  totalGranthsAvailable: string;
  chaptersCountLabel: string;
  swadhyayHoursLabel: string;
  mangalTypeLabel: string;
  chaupaiTypeLabel: string;
  sorthaTypeLabel: string;
  sakhiTypeLabel: string;
  dohaTypeLabel: string;
  shabadTypeLabel: string;
  ramainiTypeLabel: string;
  prevChapterLabel: string;
  nextChapterLabel: string;
  themeMool: string;
  themePothi: string;
  themeBlack: string;
  themeNetra: string;
  fontLabel: string;
  targetLabel: string;
  bhavarthShabdarthToggleLabel: string;
  lineGuideLabel: string;
  dhunMute: string;
  dhunTanpura: string;
  dhunFlute: string;
  dhunSatyanaam: string;
  zenFocusLabel: string;
  normalModeLabel: string;
  autoScrollSpeedLabel: string;
  pageFlipModeLabel: string;
  continuousModeLabel: string;
  pageLabel: string;
  readingGuideInfoTitle: string;
  masterLibraryTitle: string;
  searchVersePlaceholder: string;
  autoCorrectTitle: string;
  autoCorrectDesc: string;
  autoCorrectPlaceholder: string;
  autoCorrectBtn: string;
  autoCorrectProcessing: string;
  autoCorrectResultTitle: string;
  autoCorrectCopyBtn: string;
  tabAutoCorrect: string;
  kabirSagarBrahmandDarshan: string;
  treeNodeLabel: string;
  realmNature: string;
  soulInternalState: string;
  kabirSagarProof: string;
  liberationKey: string;
  universeHierarchyTree: string;
  ascensionTreeNodes: string;
  kabirSagarMahavakya: string;
  autoCorrectVaniBtn: string;
  autoCorrectVaniDesc: string;
  autoCorrectDiaryBtn: string;
}

export const translations: Record<Language, AppTranslations> = {
  hi: {
    appName: 'साहेब वर्ल्ड',
    appSubtitle: 'सात्विक स्वाध्याय',
    sacredTop: SACRED_BRANDING.header.hi,
    sacredBottom: SACRED_BRANDING.footer.hi,

    tabDailySakhi: 'दैनिक पावन साखी',
    tabStepsFormula: 'स्वाध्याय 5-चरण',
    tabGranthaSangrah: 'ग्रंथ संग्रह',
    tabQuiz: 'अमृत प्रश्नोत्तरी',
    tabAkhandPath: 'अखंड पाठ',
    tabDiary: 'आत्म-चिंतन डायरी',
    tabSettings: 'धुन',
    tabAutoCorrect: 'ऑटो-करेक्ट',
    kabirSagarBrahmandDarshan: 'कबीर सागर ब्रह्मांड दर्शन',
    treeNodeLabel: 'ट्री नोड',
    realmNature: 'मंडल का स्वरूप',
    soulInternalState: '🕊️ जीवात्मा की आंतरिक स्थिति',
    kabirSagarProof: '📜 कबीर सागर प्रमाण साखी:',
    liberationKey: 'मुक्ति कुंजी:',
    universeHierarchyTree: 'ब्रह्मांडीय पदानुक्रम चक्र एवं वृक्ष (ECharts Sunburst & Tree)',
    ascensionTreeNodes: 'आरोहण वृक्ष के सभी चरण (क्लिक करें)',
    kabirSagarMahavakya: 'कबीर सागर (अनुराग सागर) महावाक्य',

    dailyTitle: 'दैनिक पावन साखी स्वाध्याय',
    dailySubtitle: 'सतगुरु की दिव्य वाणी से आज के दिन का आध्यात्मिक शुभारंभ',
    swadhyayDate: 'आज की तिथि',
    startSwadhyayBtn: 'गहन स्वाध्याय आरंभ करें',
    takeDailyQuizBtn: 'साखी प्रश्नोत्तरी खेलें',
    listenDhunBtn: 'सत्यनाम धुन सुनें',
    shareSakhiBtn: 'पावन साखी साझा करें',
    bookmarkBtn: 'स्मृति में सहेजें',
    savedToBookmarks: 'साखी स्मृति में सुरक्षित हो गई!',

    stepsHeaderTitle: 'सतगुरु साखी स्वाध्याय पद्धति',
    stepsHeaderDesc: 'पारंपरिक 5-चरणीय स्वाध्याय विधि से साखी का अंतरंग मर्म समझें',
    step1Title: 'चरण 1: मूल पावन वाणी',
    step1Subtitle: 'पवित्र साखी का आदरपूर्वक पाठ व अंतर्मुखी होकर श्रवण',
    step2Title: 'चरण 2: शब्दार्थ एवं भावार्थ',
    step2Subtitle: 'प्रत्येक शब्द का सूक्ष्म अर्थ और रहस्यमय आध्यात्मिक मर्म',
    step3Title: 'चरण 3: दैनिक चिंतन',
    step3Subtitle: 'आत्म-निरीक्षण हेतु प्रश्न और अंतरात्मा से संवाद',
    step4Title: 'चरण 4: विषय संदर्भ एवं आचरण',
    step4Subtitle: 'सांसारिक व्यवहार और आज के कर्मों में इसका सच्चा अमल',
    step5Title: 'चरण 5: समर्पण एवं प्रार्थना',
    step5Subtitle: 'सतगुरु के चरणों में कृतज्ञता और आत्म-समर्पण की भावना',

    wordMeaningsTitle: 'शब्द-वार आध्यात्मिक अर्थ',
    contemplationPromptTitle: 'आज का आत्म-चिंतन प्रश्न',
    practicalActionTitle: 'व्यावहारिक आचरण में कैसे उतारें',
    samarpanPrayerTitle: 'सतगुरु समर्पण प्रार्थना',
    prevStepBtn: 'पिछला चरण',
    nextStepBtn: 'अगला चरण',
    completeSwadhyayBtn: 'स्वाध्याय पूर्ण करें व आशीष पाएं',
    swadhyayCompletedCelebration: 'सादर वंदन! आपने आज का स्वाध्याय निष्ठापूर्वक पूर्ण किया।',

    allGranthas: 'सम्पूर्ण ग्रंथावली',
    filterByCategory: 'अंग व विषय अनुसार',
    searchSakhiPlaceholder: 'साखी, शब्द या भावार्थ खोजें...',
    sakhisCount: 'उपलब्ध पावन साखियां',
    readSakhiBtn: 'स्वाध्याय करें',

    akhandPathTitle: 'अखंड साखी पाठ',
    akhandPathSubtitle: 'सतगुरु कबीर साहेब की वाणियों का सतत, शांत प्रवाह',
    playRecitation: 'अखंड पाठ आरंभ',
    pauseRecitation: 'पाठ विश्राम',
    readingSpeed: 'पठन गति',
    autoScrollLabel: 'स्वतः स्क्रॉल (Auto-Advance)',
    activeCouplet: 'प्रवाहमान साखी',

    quizTitle: 'पावन साखी बोध प्रश्नोत्तरी',
    quizSubtitle: 'दैनिक साखी के आध्यात्मिक मर्म की मनोरंजक व ज्ञानवर्धक परीक्षा',
    questionNumber: 'प्रश्न',
    ofTotal: 'कुल',
    scoreLabel: 'अर्जित अंक',
    selectOptionPrompt: 'सही उत्तर चुनकर अपने आध्यात्मिक ज्ञान की पुष्टि करें:',
    submitAnswerBtn: 'उत्तर जांचें',
    nextQuestionBtn: 'अगला प्रश्न',
    quizCompletedTitle: 'प्रश्नोत्तरी संपन्न!',
    quizCompletedDesc: 'आपने साखी के गूढ़ रहस्यों को अत्यंत निष्ठा से समझा है।',
    divineBlessingEarned: 'सतगुरु कबीर साहेब का दिव्य आशीर्वाद प्राप्त हुआ!',
    retakeQuizBtn: 'पुनः खेलें',
    claimBlessingBtn: 'दिव्य आशीष व पुष्प वर्षा ग्रहण करें',
    correctAnswerText: 'सत्य उत्तर!',
    explanationTitle: 'आध्यात्मिक व्याख्या',

    blessingModalTitle: 'सतगुरु कबीर साहेब का पावन आशीष',
    blessingModalSubtitle: 'हंस आत्मा पर अखंड कृपा व शांति की वर्षा',
    blessingQuote: 'जाको राखे साइयां मारि न सकै कोय। बाल न बाँका करि सकै जो जग बैरी होय।।',
    blessingText: 'सतगुरु कबीर साहेब की असीम कृपा आप पर सदैव बनी रहे। आपका जीवन सत्यनाम के पावन प्रकाश, प्रेम और विवेक से परिपूर्ण हो।',
    rosePetalShowerText: '।। पावन गुलाब पुष्प वर्षा ।।',
    triggerPetalsBtn: 'गुलाब पुष्प वर्षा करें',
    closeBtn: 'बंद करें',

    diaryTitle: 'आत्म-चिंतन डायरी',
    diarySubtitle: 'साखी स्वाध्याय से उत्पन्न निजी अंतर्दृष्टि और अनुभूतियां',
    addReflectionPrompt: 'इस साखी से आपको क्या प्रेरणा मिली? अपने हृदय के भाव लिखें...',
    saveReflectionBtn: 'अनुभूति सहेजें',
    reflectionSavedToast: 'आपकी पावन अनुभूति डायरी में सुरक्षित हो गई।',
    noReflectionsYet: 'अभी तक कोई निजी चिंतन नहीं लिखा गया है। आज की साखी पढ़कर अपने भाव लिखें।',
    deleteEntry: 'हटाएं',
    exportDiaryBtn: 'डायरी साझा / निर्यात करें',
    newReflectionBtn: 'नया भाव',
    addNewReflectionTitle: 'नया स्वाध्याय चिंतन दर्ज करें',
    categoryLabel: 'भाव श्रेणी:',
    sakhiNumberOptional: 'संबद्ध साखी संख्या (वैकल्पिक):',
    yourReflectionLabel: 'आपके अंतर्मन का आध्यात्मिक चिंतन:',
    diaryTags: ['सत्य', 'प्रेम', 'समर्पण', 'विवेक', 'शांति', 'आत्म-चिंतन'],
    defaultCategory: 'चिंतन',
    exportLabel: 'निर्यात',

    dhunTitle: 'सत्यनाम पावन धुन',
    dhunDesc: 'शांतिमय स्वरामंडल, वीणा व शुद्ध सत्यनाम नाम-सिमरन आवर्तन (सतलोक परंपरा — केवल सत्यनाम)',
    dhunPlay: 'धुन चलाएं',
    dhunPause: 'धुन रोकें',
    volumeLabel: 'ध्वनि स्तर',
    droneHarmonics: 'स्वरामंडल तरंग',
    chimeRing: 'पवित्र सत्यनाम नाद घंटी',

    settingsTitle: 'आध्यात्मिक प्राथमिकताएं',
    appearanceTheme: 'पृष्ठभूमि व शैली (Theme)',
    themeBhojpatra: 'भोजपत्र (पारंपरिक सूपिया / Cream)',
    themeAmritNeel: 'अमृत नील (रात्रि स्वाध्याय / Dark)',
    themeSwarnaShanti: 'स्वर्ण शांति (गोल्डन अंबर)',
    themeBanyanGhat: '🌳 बरगद घाट (Banyan Ghat)',
    themeMagharDham: '🌄 मगहर धाम (Maghar Dham)',
    themeRoyal: 'शाही (Royal)',
    themeSaffron: 'केसरिया (Saffron)',
    themeEmerald: 'मरकत (Emerald)',
    themeOled: 'ओलेड (OLED)',
    themeDawn: '⛰️ पर्वत (Dawn)',
    themeForest: '🌿 निकुंज (Forest)',
    themeSunset: '🌅 संध्या (Sunset)',
    themeRiver: '🌊 सरिता (River)',
    themeAutumn: '🍁 वाटिका (Autumn)',
    languageSelect: 'भाषा चयन (Language)',
    nityaVaniReminder: 'दैनिक नित्य वाणी स्मरण (Daily Reminder)',
    reminderTime: 'प्रातः स्मरण समय (Amritvela)',
    notificationsEnabledMsg: 'दैनिक नित्य वाणी स्मरण सक्रिय कर दिया गया है।',
    notificationsBlockedMsg: 'कृपया ब्राउज़र में नोटिफिकेशन अनुमति प्रदान करें।',
    fontSizeLabel: 'अक्षर आकार (Font Size)',
    sizeSmall: 'संतुलित',
    sizeMedium: 'मध्यम',
    sizeLarge: 'बड़ा (सुपाठ्य)',

    installAppTitle: 'साहेब वर्ल्ड PWA स्थापित करें',
    installAppDesc: 'अपने मोबाइल अथवा कंप्यूटर पर बिना इंटरनेट सहज स्वाध्याय हेतु इनस्टॉल करें।',
    installBtn: 'ऐप इनस्टॉल करें (PWA)',
    installedBadge: 'ऐप इनस्टॉल्ड है',
    offlineBanner: 'ऑफ़लाइन मोड — सभी साखियां व ग्रंथ स्थानीय मेमोरी से उपलब्ध हैं।',
    onlineBanner: 'ऑनलाइन कनेक्टेड',

    shareCopiedToast: 'पावन साखी व भावार्थ क्लिपबोर्ड में कॉपी हो गया!',

    appTitle: 'साहेब वर्ल्ड',
    allSakhisTitle: 'ग्रंथ संग्रह (साखी संकलन)',
    studyMethodologyTitle: '5-चरणीय स्वाध्याय',
    chooseLanguageTitle: 'भाषा चयन (Language)',
    chooseThemeTitle: 'स्वाध्याय थीम (पठन शैली)',
    readingModeTitle: 'पठन विन्यास व शैली',
    lineSpacingTitle: 'पंक्ति अंतर (Line Spacing)',
    widthModeTitle: 'पाठ चौड़ाई (Page Width)',
    widthNarrow: 'संक्षिप्त (Narrow)',
    widthMedium: 'संतुलित (Medium)',
    widthWide: 'विस्तृत (Wide)',
    fontFamilyTitle: 'लिपि शैली (Font Family)',
    fontDevotionalSerif: 'पारंपरिक सेरिफ (Serif)',
    fontDevotionalSans: 'सुगम सैन्स (Sans)',
    fontSizeTitle: 'अक्षर आकार (Font Size)',
    fontSmall: 'छोटा (लघु)',
    fontMedium: 'मानक (संतुलित)',
    fontLarge: 'बड़ा (सुपाठ्य)',
    sahajModeTitle: 'सहज मोड (सरल व एकाग्र साधना)',
    sahajModeSubtitle: 'केवल दैनिक पवन साखी एवं पावन ध्यान टाइमर पर केंद्रित रहें',
    sahajModeBadge: '।। सहज मोड ।।',
    sahajModeActive: 'सहज मोड सक्रिय है',
    sahajModeEnabledDesc: 'उन्नत व जटिल टूल्स छिपा दिए गए हैं। आपका ध्यान केवल दैनिक पवन साखी और ध्यान टाइमर पर केंद्रित रहेगा।',
    sahajModeDisabledDesc: 'समस्त टूल्स (नितनेम, समग्र ग्रन्थ, अखंड पाठ, प्रश्नोत्तरी, ज्ञान मानचित्र आदि) दृश्यमान हैं।',
    sahajModeFocusNotice: 'सहज मोड सक्रिय: उन्नत टूल्स छिपे हुए हैं। सेटिंग्स से पुनः बदल सकते हैं।',
    openMeditationTimerBtn: 'पावन ध्यान टाइमर',
    openDailySakhiBtn: 'दैनिक पवन साखी',
    dhunPlayerTitle: 'सत्यनाम पावन धुन (सतलोक नाद साधना)',
    dhunDescription: 'शांतिमय स्वरामंडल, वीणा व सत्यनाम नाम-सिमरन आवर्तन (सतलोक परंपरा — केवल सत्यनाम)',
    vocalChantTitle: 'सत्यनाम सिमरन जप (वाणी आवर्तन)',
    vocalChantDesc: 'पावन वाणी द्वारा शांत सत्यनाम जप आवर्तन',
    notificationReminderTitle: 'दैनिक नित्य वाणी स्मरण',
    notificationReminderDesc: 'अमृतवेला में स्वाध्याय हेतु दैनिक स्मरण प्राप्त करें',
    testNotificationBtn: 'परीक्षण सूचना',
    noEntriesYet: 'अभी कोई व्यक्तिगत चिंतन दर्ज नहीं है। आज की साखी पढ़कर अपने विचार लिखें।',
    divineDarshanTitle: 'सतगुरु कबीर साहेब दिव्य पावन दर्शन',
    divineDarshanSubtitle: 'कमल पुष्प पर विराजित, वरद हस्त व अलौकिक आभामंडल युक्त पावन स्वरूप',
    offerFlowersBtn: 'पुष्प अर्पण व नमन',
    viewFullDarshanBtn: 'पूर्ण दिव्य दर्शन',
    darshanBlessingText: 'सतगुरु कबीर साहेब के पावन चरणों में कोटि-कोटि वंदना। सत्यनाम की पावन ज्योति आपके अंतःकरण में सदैव प्रज्वलित रहे।',
    pranamMantra: '।।साहेब बंदगी साहेब दयाल।।',
    uploadPortraitBtn: 'प्रामाणिक स्वरूप अपलोड करें',
    resetPortraitBtn: 'मूल स्वरूप पर रीसेट करें',
    customPortraitActive: 'आपका प्रामाणिक स्वरूप सक्रिय है',
    tilakAuthenticityNote: 'पारंपरिक कबीर पंथी तिलक: श्वेत ऊर्ध्व पुण्ड्र रेखा (माथे से नासिका तक)',
    uploadPortraitHelp: 'यदि आप अपने आश्रम / संप्रदाय का मूल प्रामाणिक चित्र लगाना चाहते हैं, तो यहाँ अपनी छवि अपलोड करें।',
    portraitUpdatedSuccess: 'प्रामाणिक स्वरूप सफलतापूर्वक सुरक्षित कर दिया गया!',
    uploadChangeImageBtn: 'तस्वीर अपलोड / बदलें',
    uploadAuthenticPortraitTitle: 'सतगुरु कबीर साहेब का प्रामाणिक पावन चित्र अपलोड करें',
    uploadAuthenticPortraitDesc: 'पारंपरिक कबीर पंथी श्वेत ऊर्ध्व पुण्ड्र तिलक युक्त अपने आश्रम या मंदिर का मूल चित्र यहाँ सीधे अपलोड करें।',
    dragDropOrBrowse: 'यहाँ तस्वीर खींचें (Drag & Drop) अथवा क्लिक करके चुनें',
    removePortraitBtn: 'तस्वीर हटाएं',
    shwetTilakBadge: 'बंदीछोड़ सतगुरु कबीर साहेब',
    noImageUploadedYet: 'दर्शन हेतु अपना प्रामाणिक चित्र अपलोड करें',
    satguruMahimaTitle: '।। सतगुरु महिमा ।।',
    vaniPathBtn: 'वाणी पाठ',
    vaniVandanaLabel: 'वाणी वंदना',
    darshanHeaderTitle: 'सतगुरु कबीर साहेब पावन दर्शन',
    tilakAuthenticityDetail: 'पारंपरिक कबीर पंथ मान्यता अनुसार सतगुरु कबीर साहेब के ललाट पर पावन श्वेत ऊर्ध्व पुण्ड्र तिलक (माथे के केंद्र से नासिका तक) सुशोभित रहता है। आप अपने आश्रम अथवा मंदिर का मूल प्रामाणिक चित्र यहाँ सीधे अपलोड कर सकते हैं।',
    guruGodCouplet: '"गुरु गोविंद दोऊ खड़े, काके लागूं पांय। बलिहारी गुरु आपने, गोविंद दियो बताय॥"',
    stopRecitationBtn: 'रोकें',
    listenBtn: 'श्रवण',
    blessingBtn: 'आशीष',
    todaySakhiVani: '।। आज की पावन साखी वाणी ।।',
    divineBhavarthLabel: '।। दिव्य भावार्थ ।।',
    reflectionPlaceholder: 'आज के चिंतन के पावन भाव यहाँ लिखें...',
    cancelBtn: 'रद्द करें',
    addDiaryEntryBtn: 'डायरी में व्यक्तिगत विचार जोड़ें',
    akhandPathFeatureTitle: 'अखंड पाठ एवं स्व-चालित स्क्रॉलिंग',
    akhandPathFeatureDesc: 'बिना हाथ लगाए पाठ करने के लिए ऑटो-स्क्रॉल एवं स्पीड कंट्रोल का उपयोग करें।',
    startBtn: 'शुरू करें',
    swadhyayBlessingTitle: 'स्वाध्याय सिद्धि आशीष',
    swadhyayBlessingMsg: 'आपने सतगुरु कबीर साहेब की पावन वाणी का मनन, चिंतन और समर्पण पूर्ण किया। साहेब बंदगी साहेब!',
    quizBlessingTitle: 'प्रश्नोत्तरी सिद्धि आशीष',
    quizBlessingMsg: 'सत्य, विवेक और गुरु महिमा के आध्यात्मिक बोध में आपकी प्रगति प्रशंसनीय है। सतगुरु कबीर साहेब की कृपा आप पर सदा रहे!',
    akhandPathBlessingTitle: 'अखंड पाठ पूर्णता आशीष',
    akhandPathBlessingMsg: 'आपने सतगुरु कबीर साहेब के पावन वचनों का अखंड श्रवण व पाठ किया। अमर लोक का मार्ग निष्कपट भक्ति से सुगम होता है।',
    footerDescription: 'सतगुरु कबीर साहेब की अमर वाणियों (कबीर साखी संग्रह, कबीर सागर, बीजक) पर आधारित पावन स्वाध्याय एवं साधना हेतु समर्पित।\n।।साहेब बंदगी साहेब।।',
    pwaTag: 'साहेब वर्ल्ड PWA • ऑफ़लाइन स्वाध्याय',
    themeLanguageSettings: 'थीम एवं भाषा',
    moolPawanSakhiHeader: '।। मूल पावन साखी वाणी ।।',
    bandichhorLabel: 'बंदीछोड़ सतगुरु कबीर साहेब',
    designerTitle: 'साखी सन्देश कार्ड डिज़ाइनर',
    themeStyleLabel: 'कार्ड थीम शैली:',
    downloadLangLabel: 'डाउनलोड भाषा:',
    aspectRatioLabel: 'कार्ड का आकार (Aspect Ratio):',
    squareRatioLabel: 'वर्गाकार (1:1)',
    storyRatioLabel: 'स्टोरी (9:16)',
    cancelLabel: 'रद्द करें',
    downloadBtn: 'डाउनलोड करें',
    lowLabel: 'धीमी',
    highLabel: 'तीव्र',
    onStatus: 'सक्रिय (ON)',
    offStatus: 'शांत (OFF)',
    tripleChimeLabel: "✨ 'सत्य-नाम' पावन नाद",
    sacredBellLabel: '🔔 पावन घंटी',
    amritvelaLabel: '(अमृतवेला 05:00 AM)',
    sentStatus: '✓ भेजा गया',
    pwaTitleLabel: 'साहेब वर्ल्ड - सत्यनाम स्वाध्याय PWA',
    pwaDescLabel: '100% ऑफ़लाइन सक्षम • कबीर साखी संग्रह, कबीर सागर एवं बीजक पर आधारित पावन स्वाध्याय साधना',
    notificationPermissionError: 'कृपया ब्राउज़र में नोटिफिकेशन की अनुमति प्रदान करें।',
    notificationNotSupportedError: 'इस ब्राउज़र में नोटिफिकेशन समर्थित नहीं है।',
    speedSlow: 'शांत',
    speedNormal: 'मानक',
    speedFast: 'द्रुत',
    bhavarthLabel: 'भावार्थ:',
    // Saheb Jantri (Calendar)
    jantriTitle: 'साहेब जंत्री',
    jantriSubtitle: 'पावन तिथियां एवं उत्सव',
    purnimaLabel: 'पूर्णिमा',
    amavasyaLabel: 'अमावस्या',
    sangrandLabel: 'संग्रांद',
    kabirJayantiLabel: 'सतगुरु कबीर साहेब जयंती',
    kabirNirvanLabel: 'सतगुरु कबीर साहेब निर्वाण दिवस',
    guruJayantiLabel: 'गुरु जयंती',
    magharUtsavLabel: 'मघर पावन उत्सव',
    satnamSalutation: '🌹 ।। सत्यनाम ।। 🌹',
    sahebBangiSalutation: '।। साहेब बंदगी साहेब ।। 🙏',
    monthlyGridTitle: 'साहेब वार्षिक जंत्री 2026',
    // Mantra Tracker
    mantraTrackerTitle: 'सत्यनाम नाम-सिमरन आवर्तन',
    mantraTrackerSubtitle: 'दैनिक सुमिरन एवं माला गणना',
    dailyGoalLabel: 'दैनिक लक्ष्य (माला)',
    totalCountsLabel: 'कुल सुमिरन (जाप)',
    currentMalaLabel: 'वर्तमान माला',
    logMalaBtn: 'माला दर्ज करें',
    resetProgressBtn: 'प्रगति रीसेट करें',
    mantraHistoryTitle: 'सुमिरन इतिहास',

    // Audio Library
    audioLibraryTitle: 'अमर वाणी ऑडियो लाइब्रेरी',
    audioLibrarySubtitle: 'सतगुरु के पावन शब्द एवं सत्संग',
    playSatsangBtn: 'सत्संग श्रवण',
    granthAudioLabel: 'ग्रंथ पाठ',
    bhajanAudioLabel: 'पावन भजन',
    playingNowLabel: 'अभी चल रहा है:',

    // Universe Map (Brahmand Darshan)
    tabUniverseMap: 'ब्रह्मांड दर्शन (सृष्टि व लोक रचना)',
    universeMapTitle: 'ब्रह्मांड एवं अमरलोक दर्शन (Universe Map)',
    universeMapSubtitle: '🌟 सजीव ब्रह्मांड मानचित्र - समस्त लोकों का तत्व विवरण',
    universeLevels: [
      {
        id: 1,
        title: 'अनामी लोक (अकह लोक)',
        entity: 'अनामी पुरुष (सत्यपुरुष कबीर साहेब का सर्वोच्च रूप)',
        frequency: '963 Hz',
        description: 'सृष्टि का सर्वोच्च, अनादि और अकह धाम जहाँ न रूप है, न रेखा, केवल परम चेतना का अखण्ड दिव्य प्रकाश है। यहाँ से समस्त दिव्य लोकों का विस्तार होता है।',
        vani: '"अनामी पुरुष की अजब कहानी। जहाँ न सूरज चाँद न पानी॥ कोटि भानु सम एक-एक लोमा। ऐसा अमर धाम निष्कामा॥"',
      },
      {
        id: 2,
        title: 'अगम एवं अलख लोक',
        entity: 'अगम पुरुष एवं अलख पुरुष (कबीर साहेब का पावन विस्तार)',
        frequency: '852 Hz',
        description: 'अमरलोक से ऊपर और अनामी लोक से नीचे स्थित दो अत्यंत पावन आध्यात्मिक मंडल। जहाँ शब्द की अत्यंत बारीक और मधुर गूँज होती है।',
        vani: '"अलख अगम की महिमा भारी, जहँ सुरत पहुंचे निर्विकारी॥ सतगुरु कृपा से पंथ लखावे, हंस अमर पद सहज समावे॥"',
      },
      {
        id: 3,
        title: 'अमरलोक / सतलोक (सचखंड)',
        entity: 'सत्यपुरुष कबीर साहेब (परमेश्वर)',
        frequency: '741 Hz',
        description: 'कबीर सागर में वर्णित हंस आत्माओं का सनातन निज घर। यहाँ अमृत का मानसरोवर, अजर-अमर कल्पवृक्ष, मोती चुगते हंस और सुखों की अखण्ड वर्षा है। यहाँ जीव कभी दुखी या विचलित नहीं होता।',
        vani: '"अमर लोक इक देश हमारा, जहाँ न काल का संचारा॥ हंस करहिं अमृत आहारा, सोहंग शब्द की धार अपारा॥"',
      },
      {
        id: 4,
        title: 'भँवर गुफा (अन्तरिक्ष सीमा)',
        entity: 'सोहंग पुरुष (महा चेतन)',
        frequency: '639 Hz',
        description: 'अमरलोक और काल के २१ ब्रह्मांडों के बीच का महा-अन्तरिक्ष। यहाँ काल का प्रवेश वर्जित है और यहाँ मुरली की पावन अनहद धुन गूँजती है।',
        vani: '"भँवर गुफा में मुरली बाजै, सोहंग शब्द तहाँ पर गाजै॥ हंसन की गति अति सुखदाई, सतगुरु कृपा से लखी जाई॥"',
      },
      {
        id: 5,
        title: 'महा-सुन्न (अन्तरिक्ष महा-शून्य)',
        entity: 'अक्षर पुरुष (अव्यक्त ब्रह्म)',
        frequency: '528 Hz',
        description: 'अमरलोक और काल के लोकों को अलग करने वाला ५ अरब योजन चौड़ा महा-शून्य। यहाँ काल की शक्ति शून्य हो जाती है। केवल सतगुरु के सत्यनाम का प्रकाश ही इस महा-शून्य को पार कराता है।',
        vani: '"महा सुन्न का पंथ विकारा, बिन सतगुरु कोई न पाए पारा॥ सत्यनाम की नौका भारी, हंस पार उतरे सुखकारी॥"',
      },
      {
        id: 6,
        title: 'त्रिकुटी (ब्रह्म लोक / ओंकार धाम)',
        entity: 'काल ब्रह्म (क्षर पुरुष / ज्योति निरंजन)',
        frequency: '396 Hz',
        description: 'लाल रंग का गगन जहाँ ओंकार की नाद गूँजती है और मृदंग व नगाड़े की ध्वनि होती है। यह क्षर ब्रह्म का प्रमुख लोक है जहाँ से मन और माया का नियंत्रण होता है।',
        vani: '"त्रिकुटी महल में बादल गरजे, लाल गगन विच सुरत बिराजे॥ ओंकार शब्द की धुन भारी, काल पुरुष की हद विस्तारी॥"',
      },
      {
        id: 7,
        title: 'सहस्रदल कमल (अण्ड ब्रह्मांड / ज्योति लोक)',
        entity: 'ज्योति निरंजन का सूक्ष्म रूप (काल)',
        frequency: '288 Hz',
        description: 'सहस्र पंखुड़ियों वाला देदीप्यमान कमल जहाँ करोड़ों दीपकों जैसी एक महान ज्योति जलती है। यहाँ घण्टा और शंख की अनहद ध्वनि गूँजती है।',
        vani: '"सहस्र कँवल दल ज्योति प्रकाशी, निरंजन बैठा घट आवासी॥ घण्टा शंख बजे शहनाई, साधु सुरत तहाँ ठहराई॥"',
      },
      {
        id: 8,
        title: '२१ ब्रह्मांड एवं तीन लोक',
        entity: 'ब्रह्मा (रजोगुण), विष्णु (सतोगुण), शिव (तमोगुण)',
        frequency: '192 Hz',
        description: 'वह भौतिक व देव लोक जहाँ चौरासी लाख योनियों का चक्रव्यूह चलता है। स्वर्ग में पुण्य भोग, पृथ्वी पर कर्म और पाताल में अधोगति। यहाँ प्रत्येक जीव काल और कर्म के अधीन जन्मता और मरता है।',
        vani: '"तीन लोक संशय में बीते, काल बली सबही को जीते॥ कबीर साहेब कहे पुकारी, सत्यनाम भज उतरो पारी॥"',
      },
      {
        id: 9,
        title: 'पिंड दर्शन (घट के भीतर ब्रह्मांड का भेद)',
        entity: 'सूरत (जीवात्मा / चेतना)',
        frequency: '144 Hz',
        description: '"जो ब्रह्माण्डे सोई पिण्डे।" सतगुरु कबीर साहेब ने समझाया कि जो कुछ बाहर के लोकों में है, वह सब मानव शरीर (घट) के भीतर चक्रों और द्वारों के रूप में विद्यमान है।',
        vani: '"जो ब्रह्माण्डे सोई पिण्डे, जो खोजै सो पावै। घट ही में साहेब घट ही में अमरलोक, सुरत शब्द ठहरावै॥"',
      },
    ],
    vaniLabel: 'वाणी प्रमाण:',
    entityLabel: 'अधिपति / स्वरूप:',
    frequencyLabel: 'ध्वनि तरंग (Frequency):',
    elementDetailsTitle: 'समस्त लोकों का तत्व विवरण',
    elementDetailsDesc: 'कबीर सागर के अनुसार प्रत्येक लोक की रचना, वहां के सुख और अधिपति का सूक्ष्म विवरण।',
    creationSecretTitle: 'सृष्टि रचना का मूल भेद',
    creationSecretDesc: 'अनादि काल से चली आ रही सृष्टि की उत्पत्ति और काल-पुरुष के जाल का वास्तविक बोध।',
    suratShabdYogaTitle: 'सूरत-शब्द योग साधना',
    suratShabdYogaDesc: 'अंतर्मन में शब्द की धुन को पकड़कर अमरलोक की यात्रा करने की प्राचीनतम विहंगम मार्ग पद्धति।',
    elementDetailsFull: 'कबीर सागर के अनुसार, हमारा ब्रह्मांड विभिन्न तत्वों और लोकों का मिश्रण है। मृत्यु लोक (पृथ्वी) पाँच स्थूल तत्वों (मिट्टी, पानी, अग्नि, वायु, आकाश) से बना है। इसके ऊपर स्वर्ग और अन्य लोक सूक्ष्म तत्वों से बने हैं। परन्तु "अमरलोक" (सतलोक) इन नश्वर तत्वों से परे है। वहाँ का तत्व "नूर" (परम प्रकाश) है जो कभी नष्ट नहीं होता। वहाँ न बुढ़ापा है, न दुख और न ही मृत्यु। प्रत्येक लोक के अपने अधिपति और नियम हैं, जिनका सूक्ष्म विवरण संतों ने अपनी वाणी में दिया है।',
    creationSecretFull: 'सृष्टि की उत्पत्ति अनादि पुरुष (अनामी पुरुष) से हुई। सबसे पहले अनामी पुरुष ने अपनी शक्ति से सतपुरुष को प्रकट किया। सतपुरुष ने अन्य पुत्रों की रचना की, जिनमें से एक "ज्योति निरंजन" (काल ब्रह्म) था। काल ब्रह्म की हठ और तपस्या के कारण उसे २१ ब्रह्मांड मिले, परन्तु उसने छल से आत्माओं को अपने जाल में फंसा लिया। कबीर साहेब ने स्वयं आकर इस भेद को खोला कि कैसे काल-पुरुष ने हमें अपनी माया के चक्रव्यूह (८४ लाख योनियों) में उलझा रखा है और वास्तविक मोक्ष का मार्ग क्या है।',
    suratShabdYogaFull: 'सूरत-शब्द योग वह प्राचीनतम पद्धति है जिसे "विहंगम मार्ग" भी कहा जाता है। इसमें "सूरत" (आत्मा की एकाग्रता) को "शब्द" (गुरु द्वारा दिए गए सार शब्द या अनाहत नाद) के साथ जोड़ा जाता है। जैसे पतंग धागे के सहारे आकाश में उड़ती है, वैसे ही आत्मा शब्द की धुन को पकड़कर काल के लोकों को पार करते हुए अमरलोक पहुँचती है। यह साधना केवल एक पूर्ण सतगुरु के मार्गदर्शन में ही संभव है, जो दिव्य ध्वनि की पहचान और उसे पकड़ने की विधि प्रदान करते हैं।',
    universeMapQuote: '"जहाँ न सूरज चाँद न पानी, अनामी पुरुष की अजब कहानी।"',
    listenFrequencyBtn: 'ध्वनि तरंग सुनें',
    stopFrequencyBtn: 'ध्वनि बंद करें',
    startJourneyBtn: 'सूरत-यात्रा प्रारंभ करें (Soul Journey)',
    stopJourneyBtn: 'यात्रा रोकें',
    journeyDesc: 'सूरत का पिंड (शरीर) से अनामी लोक तक का दिव्य सफर',
    accordingToKabirSagar: 'कबीर सागर के अनुसार',
    tabHealthDiagnostic: 'ऐप स्वास्थ्य',
    healthDiagnosticTitle: 'सिस्टम डायग्नोस्टिक',
    connectionStatus: 'कनेक्शन स्थिति',
    onlineLabel: 'ऑनलाइन (सक्रिय)',
    offlineLabel: 'ऑफलाइन (कनेक्शन नहीं)',
    appIntegrity: 'ऐप अखंडता',
    integrityHealthy: 'स्वस्थ (Healthy)',
    audioEngineStatus: 'ऑडियो इंजन स्थिति',
    audioActive: 'सक्रिय (Active)',
    audioSuspended: 'निलंबित (Suspended)',
    sidebarTitle: 'साहेब वर्ल्ड (Saheb World)',
    sidebarFooter: 'सतगुरु कबीर साहेब स्वाध्याय',
    openSidebar: 'मेन्यू खोलें',
    closeSidebar: 'मेन्यू बंद करें',
    healthDiagnosticSubtitle: 'साहेब वर्ल्ड आध्यात्मिक एप्लिकेशन की रीयल-टाइम सिस्टम अखंडता और कनेक्टिविटी स्थिति।',
    appVersionLabel: 'ऐप संस्करण',
    appVersionValue: 'v2.4.0 (सतगुरु कृपा संस्करण)',
    localStorageLabel: 'स्थानीय संग्रहण',
    localStorageUsed: 'उपयोग किया गया',
    lastCheckLabel: 'अंतिम जाँच',
    localEnvTitle: 'स्थानीय वातावरण अंतर्दृष्टि',
    localEnvDesc: 'यह एप्लिकेशन आपके ब्राउज़र वातावरण में प्रोग्रेसिव वेब ऐप (PWA) के रूप में चल रहा है। आपके सभी आध्यात्मिक नोट्स, मंत्र गणना और पढ़ने की प्रगति ऑफ़लाइन पहुंच के लिए आपके ब्राउज़र के स्थानीय संग्रहण में सुरक्षित रूप से संग्रहीत हैं।',
    platformLabel: 'प्लेटफ़ॉर्म',
    themeLabel: 'थीम',
    languageLabel: 'भाषा',
    refreshBtn: 'फिर से जांचें',
    tabDeepSearch: 'गहन खोज',
    tabMeditationTimer: 'सुमिरन टाइमर',
    tabCommunityBoard: 'साधना मंच',
    searchPlaceholder: 'साखी या शब्द खोजें...',
    searchBtn: 'खोजें',
    searchResults: 'खोज परिणाम',
    noResults: 'कोई परिणाम नहीं मिला।',
    meditationTimerTitle: 'सुमिरन ध्यान समय',
    meditationSilence: 'मौन (Silence)',
    meditationReady: 'तैयार (Ready)',
    deepSumiran: 'गहन सुमिरन',
    startMeditation: 'ध्यान आरंभ',
    stopMeditation: 'ध्यान विश्राम',
    selectAmbientSound: 'पृष्ठभूमि ध्वनि चयन',
    natureSound: 'प्रकृति (Wind)',
    fluteSound: 'बांसुरी (Flute)',
    beenSound: 'बीन (Resonance)',
    satyanaamDhunSound: 'सत्यनाम धुन',
    communityBoardTitle: 'आध्यात्मिक हंस मंडल',
    communityBoardDesc: 'विश्व भर के हंसों के साथ अपनी आध्यात्मिक अनुभूतियां साझा करें',
    shareAnonymously: 'निजी पहचान के साथ साझा करें',
    postEntry: 'अनुभूति साझा करें',
    signInToJoin: 'मंडल में शामिल होने के लिए साइन-इन करें',
    signInDesc: 'अपनी आध्यात्मिक अनुभूतियां साझा करने के लिए गूगल खाते से जुड़ें।',
    continueWithGoogle: 'गूगल के साथ जारी रखें',
    communityLiveMsg: 'हंस मंडल अब सक्रिय है! आपकी अनुभूतियां विश्व भर के हंसों के साथ सुरक्षित रूप से साझा की जाती हैं।',
    deepSearchEngine: 'गहन खोज इंजन',
    deepSearchDesc: 'कबीर सागर, साखी संग्रह और बीजक में किसी भी शब्द, विषय या साखी संख्या से खोजें।',
    exploreByGrantha: 'ग्रंथ अनुसार खोजें',
    exploreByGranthaDesc: 'विशेष रूप से कबीर सागर या बीजक के भीतर खोजें।',
    topicSearch: 'विषय अनुसार खोजें',
    topicSearchDesc: 'गुरु, माया, या प्रेम जैसे विषयों के आधार पर खोजें।',
    syncSettingsDesc: 'सभी उपकरणों पर अपनी नोटिफिकेशन प्राथमिकताओं को सिंक करने के लिए साइन-इन करें।',
    saveSettingsBtn: 'सहेजें',
    statusLabel: 'स्थिति',
    goalAchieved: 'लक्ष्य प्राप्त',
    inProgress: 'प्रगति पर',
    malasLabel: 'माला',
    noSimranSessions: 'अभी तक कोई सुमिरन सत्र नहीं हुआ है।',
    simranGoalReached: 'लक्ष्य पूर्ण',
    simranGoalPending: 'सुमिरन जारी है',
    dainikChintan: 'दैनिक चिंतन',
    vishaySandharb: 'विषय संदर्भ',
    shabadarthLabel: 'शब्दार्थ',
    nityaVaniTitle: 'दैनिक नित्य वाणी',
    nityaVaniDesc: 'हर सुबह एक पवित्र साखी प्राप्त करने के लिए सूचनाएं सक्षम करें।',
    enableNotifications: 'सूचनाएं सक्षम करें',
    notificationTime: 'सूचना का समय',
    notificationPermissionDenied: 'सूचना की अनुमति अस्वीकार कर दी गई है। कृपया ब्राउज़र सेटिंग्स में इसे सक्षम करें।',
    tabKabiraKatha: 'श्री कबीर कथा',
    kathaTitle: 'श्री कबीरजी की कथा (मूल एवं व्याख्या)',
    kathaSubtitle: 'सतगुरु की लीला और इतिहास — दो-दो पंक्तियों के साथ गूढ़ व्याख्या एवं "छुपाएं/दिखाएं" (Chupao) सुविधा',
    toggleExplanation: 'व्याख्या एवं मर्म छुपाएं / दिखाएं',
    hideText: 'छिपा हुआ (Chupao Active)',
    showText: 'व्याख्या देखें',
    openInNewTab: 'पूर्ण विंडो / नए टैब में खोलें',
    settingsSavedSuccess: 'सफलतापूर्वक सुरक्षित की गईं!',
    inAppReminderActive: 'इन-ऐप अमृतवाणी स्मरण सक्रिय है',
    pushNoticeIframe: 'पूर्वावलोकन में सिस्टम पुश नोटिफिकेशन सीमित हो सकते हैं। पूर्ण पुश सूचनाओं के लिए कृपया इसे नए टैब में खोलें या PWA इंस्टॉल करें।',
    kathaAkhandScrollMode: 'अखंड पाठ स्क्रॉल मोड',
    kathaAkhandScrollActive: 'अखंड पाठ प्रवाह जारी है',
    kathaAkhandScrollPause: 'रोकें (Pause)',
    kathaAkhandScrollResume: 'प्रवाह जारी रखें (Play)',
    kathaAkhandScrollSpeed: 'स्क्रॉल गति',
    kathaAkhandCompleted: '।।सत्यनाम।। श्री कबीर कथा अखंड पाठ संपन्न हुआ।',
    fontSerifLabel: 'पारंपरिक सेरिफ (Serif)',
    fontSansLabel: 'सुगम सैन्स (Sans)',
    scrollToTop: 'शीर्ष पर जाएं (ऊपर)',
    scrollToBottom: 'नीचे जाएं (तल पर)',
    spiritualEssenceLabel: 'आध्यात्मिक मर्म / रहस्य:',
    shabdarthLabel: 'शब्दार्थ:',
    selectChapterLabel: 'अध्याय चुनें:',
    totalGranthsAvailable: 'कुल 7 पावन ग्रन्थ उपलब्ध',
    chaptersCountLabel: 'अध्याय',
    swadhyayHoursLabel: 'स्वाध्याय',
    mangalTypeLabel: 'मंगलाचरण',
    chaupaiTypeLabel: 'चौपाई',
    sorthaTypeLabel: 'सोठा',
    sakhiTypeLabel: 'साखी',
    dohaTypeLabel: 'दोहा',
    shabadTypeLabel: 'शब्द / पद',
    ramainiTypeLabel: 'रमैनी',
    prevChapterLabel: 'पिछला अध्याय',
    nextChapterLabel: 'अगला अध्याय',
    themeMool: 'मूल',
    themePothi: 'पोथी',
    themeBlack: 'ब्लैक',
    themeNetra: 'नेत्र',
    fontLabel: 'फ़ॉन्ट:',
    targetLabel: 'लक्ष्य:',
    bhavarthShabdarthToggleLabel: 'भावार्थ/शब्दार्थ:',
    lineGuideLabel: 'पंक्ति गाइड',
    dhunMute: 'म्यूट',
    dhunTanpura: 'तानपुरा',
    dhunFlute: 'बांसुरी',
    dhunSatyanaam: 'सत्यनाम धुन',
    zenFocusLabel: 'जेन एकाग्रता',
    normalModeLabel: 'साधारण मोड',
    autoScrollSpeedLabel: 'गति:',
    pageFlipModeLabel: '📖 ३D पोथी पठन मोड',
    continuousModeLabel: 'निरंतर पाठ',
    pageLabel: 'पृष्ठ',
    readingGuideInfoTitle: 'पावन ग्रन्थ पाठ सुविधाएँ एवं शैलियाँ',
    masterLibraryTitle: 'समग्र कबीर ग्रन्थालय एवं कथा कोष',
    searchVersePlaceholder: 'पद्य या भावार्थ खोजें...',
    autoCorrectTitle: 'ऑटो-करेक्ट',
    autoCorrectDesc: 'अपने किसी भी हस्तलिखित या टाइप किए हुए ग्रंथ के पाठ को यहाँ पेस्ट करें। AI तकनीक द्वारा इसे शुद्ध, सटीक और सुव्यवस्थित किया जाएगा।',
    autoCorrectPlaceholder: 'अपना ग्रंथ या पाठ यहाँ पेस्ट करें (असीमित शब्द)...',
    autoCorrectBtn: 'पाठ शुद्ध व सुव्यवस्थित करें',
    autoCorrectProcessing: 'शुद्धिकरण प्रक्रिया चल रही है, कृपया प्रतीक्षा करें...',
    autoCorrectResultTitle: 'शुद्ध किया हुआ पावन पाठ',
    autoCorrectCopyBtn: 'शुद्ध पाठ कॉपी करें',
    autoCorrectVaniBtn: 'वाणी शुद्ध करें (Doha/Sakhi)',
    autoCorrectVaniDesc: 'यह विकल्प विशेष रूप से दोहों और साखियों की मात्राओं और शब्दों को शुद्ध करने के लिए है।',
    autoCorrectDiaryBtn: 'लिखावट शुद्ध करें',
  },

  pb: {
    appName: 'ਸਾਹੇਬ ਵਰਲਡ',
    appSubtitle: 'ਸਾਤਵਿਕ ਸਵਾਧਿਆਏ',
    sacredTop: SACRED_BRANDING.header.pb,
    sacredBottom: SACRED_BRANDING.footer.pb,

    tabDailySakhi: 'ਦੈਨਿਕ ਪਾਵਨ ਸਾਖੀ',
    tabStepsFormula: 'ਸਵਾਧਿਆਏ 5-ਪੜਾਅ',
    tabGranthaSangrah: 'ਗ੍ਰੰਥ ਸੰਗ੍ਰਹਿ',
    tabQuiz: 'ਅੰਮ੍ਰਿਤ ਪ੍ਰਸ਼ਨੋਤਰੀ',
    tabAkhandPath: 'ਅਖੰਡ ਪਾਠ',
    tabDiary: 'ਆਤਮ-ਚਿੰਤਨ ਡਾਇਰੀ',
    tabSettings: 'ਧੁਨ',

    dailyTitle: 'ਦੈਨਿਕ ਪਾਵਨ ਸਾਖੀ ਸਵਾਧਿਆਏ',
    dailySubtitle: 'ਸਤਿਗੁਰੂ ਜੀ ਦੀ ਦੈਵੀ ਬਾਣੀ ਨਾਲ ਅੱਜ ਦੇ ਦਿਨ ਦੀ ਰੂਹਾਨੀ ਸ਼ੁਰੂਆਤ',
    swadhyayDate: 'ਅੱਜ ਦੀ ਮਿਤੀ',
    startSwadhyayBtn: 'ਡੂੰਘਾ ਸਵਾਧਿਆਏ ਸ਼ੁਰੂ ਕਰੋ',
    takeDailyQuizBtn: 'ਸਾਖੀ ਪ੍ਰਸ਼ਨੋਤਰੀ ਖੇਡੋ',
    listenDhunBtn: 'ਸਤਯਨਾਮ ਧੁਨ ਸੁਣੋ',
    shareSakhiBtn: 'ਪਾਵਨ ਸਾਖੀ ਸਾਂਝੀ ਕਰੋ',
    bookmarkBtn: 'ਯਾਦਗਾਰ ਵਿੱਚ ਸਾਂਭੋ',
    savedToBookmarks: 'ਸਾਖੀ ਯਾਦਗਾਰ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਹੋ ਗਈ!',

    stepsHeaderTitle: 'ਸਤਿਗੁਰੂ ਸਾਖੀ ਸਵਾਧਿਆਏ ਵਿਧੀ',
    stepsHeaderDesc: 'ਰਵਾਇਤੀ 5-ਪੜਾਵੀ ਸਵਾਧਿਆਏ ਢੰਗ ਨਾਲ ਸਾਖੀ ਦਾ ਅੰਦਰਲਾ ਭੇਤ ਸਮਝੋ',
    step1Title: 'ਪੜਾਅ 1: ਮੂਲ ਪਾਵਨ ਬਾਣੀ',
    step1Subtitle: 'ਪਵਿੱਤਰ ਸਾਖੀ ਦਾ ਸਤਿਕਾਰ ਸਹਿਤ ਪਾਠ ਅਤੇ ਅੰਤਰਮੁਖੀ ਹੋ ਕੇ ਸਰਵਣ',
    step2Title: 'ਪੜਾਅ 2: ਸ਼ਬਦਾਰਥ ਅਤੇ ਭਾਵਾਰਥ',
    step2Subtitle: 'ਹਰੇਕ ਸ਼ਬਦ ਦਾ ਡੂੰਘਾ ਅਰਥ ਅਤੇ ਰੂਹਾਨੀ ਮਰਮ',
    step3Title: 'ਪੜਾਅ 3: ਦੈਨਿਕ ਚਿੰਤਨ',
    step3Subtitle: 'ਆਤਮ-ਪੜਚੋਲ ਲਈ ਸਵਾਲ ਅਤੇ ਅੰਤਰਾਤਮਾ ਨਾਲ ਸੰਵਾਦ',
    step4Title: 'ਪੜਾਅ 4: ਵਿਸ਼ੇ ਸੰਦਰਭ ਤੇ ਆਚਰਨ',
    step4Subtitle: 'ਸੰਸਾਰਕ ਵਿਵਹਾਰ ਅਤੇ ਅੱਜ ਦੇ ਕਰਮਾਂ ਵਿੱਚ ਸੱਚਾ ਅਮਲ',
    step5Title: 'ਪੜਾਅ 5: ਸਮਰਪਣ ਅਤੇ ਅਰਦਾਸ',
    step5Subtitle: 'ਸਤਿਗੁਰੂ ਜੀ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸ਼ੁਕਰਾਨਾ ਅਤੇ ਪੂਰਨ ਸਮਰਪਣ',

    wordMeaningsTitle: 'ਸ਼ਬਦ-ਵਾਰ ਰੂਹਾਨੀ ਅਰਥ',
    contemplationPromptTitle: 'ਅੱਜ ਦਾ ਆਤਮ-ਚਿੰਤਨ ਪ੍ਰਸ਼ਨ',
    practicalActionTitle: 'ਵਿਹਾਰਕ ਜੀਵਨ ਵਿੱਚ ਕਿਵੇਂ ਉਤਾਰੀਏ',
    samarpanPrayerTitle: 'ਸਤਿਗੁਰੂ ਸਮਰਪਣ ਅਰਦਾਸ',
    prevStepBtn: 'ਪਿਛਲਾ ਪੜਾਅ',
    nextStepBtn: 'ਅਗਲਾ ਪੜਾਅ',
    completeSwadhyayBtn: 'ਸਵਾਧਿਆਏ ਸੰਪੂਰਨ ਕਰੋ ਤੇ ਅਸੀਸ ਪਾਓ',
    swadhyayCompletedCelebration: 'ਸਤਿਕਾਰ ਸਹਿਤ ਬੰਦਗੀ! ਤੁਸੀਂ ਅੱਜ ਦਾ ਸਵਾਧਿਆਏ ਸ਼ਰਧਾ ਨਾਲ ਪੂਰਾ ਕੀਤਾ।',

    allGranthas: 'ਸਮੁੱਚੀ ਗ੍ਰੰਥਾਵਲੀ',
    filterByCategory: 'ਅੰਗ ਤੇ ਵਿਸ਼ੇ ਅਨੁਸਾਰ',
    searchSakhiPlaceholder: 'ਸਾਖੀ, ਸ਼ਬਦ ਜਾਂ ਭਾਵਾਰਥ ਖੋਜੋ...',
    sakhisCount: 'ਉਪਲਬਧ ਪਾਵਨ ਸਾਖੀਆਂ',
    readSakhiBtn: 'ਸਵਾਧਿਆਏ ਕਰੋ',

    akhandPathTitle: 'ਅਖੰਡ ਸਾਖੀ ਪਾਠ',
    akhandPathSubtitle: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਬਾਣੀ ਦਾ ਨਿਰੰਤਰ, ਸ਼ਾਂਤ ਪ੍ਰਵਾਹ',
    playRecitation: 'ਅਖੰਡ ਪਾਠ ਆਰੰਭ',
    pauseRecitation: 'ਪਾਠ ਵਿਸ਼ਰਾਮ',
    readingSpeed: 'ਪਾਠ ਦੀ ਗਤੀ',
    autoScrollLabel: 'ਸਵੈ-ਚਾਲਿਤ ਅਗਾਂਹ (Auto-Advance)',
    activeCouplet: 'ਪ੍ਰਵਾਹਮਾਨ ਸਾਖੀ',

    quizTitle: 'ਪਾਵਨ ਸਾਖੀ ਬੋਧ ਪ੍ਰਸ਼ਨੋਤਰੀ',
    quizSubtitle: 'ਦੈਨਿਕ ਸਾਖੀ ਦੇ ਰੂਹਾਨੀ ਰਹੱਸਾਂ ਦੀ ਗਿਆਨਵਰਧਕ ਪਰਖ',
    questionNumber: 'ਪ੍ਰਸ਼ਨ',
    ofTotal: 'ਕੁੱਲ',
    scoreLabel: 'ਪ੍ਰਾਪਤ ਅੰਕ',
    selectOptionPrompt: 'ਸਹੀ ਉੱਤਰ ਚੁਣ ਕੇ ਆਪਣੀ ਰੂਹਾਨੀ ਸਮਝ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ:',
    submitAnswerBtn: 'ਉੱਤਰ ਜਾਂਚੋ',
    nextQuestionBtn: 'ਅਗਲਾ ਪ੍ਰਸ਼ਨ',
    quizCompletedTitle: 'ਪ੍ਰਸ਼ਨੋਤਰੀ ਸੰਪੰਨ!',
    quizCompletedDesc: 'ਤੁਸੀਂ ਸਾਖੀ ਦੇ ਗੁਪਤ ਰਹੱਸਾਂ ਨੂੰ ਬੜੀ ਸ਼ਰਧਾ ਨਾਲ ਸਮਝਿਆ ਹੈ।',
    divineBlessingEarned: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਪਾਵਨ ਅਸੀਸ ਪ੍ਰਾਪਤ ਹੋਈ!',
    retakeQuizBtn: 'ਦੁਬਾਰਾ ਖੇਡੋ',
    claimBlessingBtn: 'ਦੈਵੀ ਅਸੀਸ ਤੇ ਗੁਲਾਬ ਪੁਸ਼ਪ ਵਰਖਾ ਪ੍ਰਾਪਤ ਕਰੋ',
    correctAnswerText: 'ਸੱਚਾ ਉੱਤਰ!',
    explanationTitle: 'ਰੂਹਾਨੀ ਵਿਆਖਿਆ',

    blessingModalTitle: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਪਾਵਨ ਅਸੀਸ',
    blessingModalSubtitle: 'ਹੰਸ ਆਤਮਾ ਉੱਤੇ ਅਖੰਡ ਕ੍ਰਿਪਾ ਅਤੇ ਸ਼ਾਂਤੀ ਦੀ ਵਰਖਾ',
    blessingQuote: 'ਜਾਕੋ ਰਾਖੈ ਸਾਈਆਂ ਮਾਰਿ ਨ ਸਾਕੈ ਕੋਇ। ਬਾਲ ਨ ਬਾਂਕਾ ਕਰਿ ਸਕੈ ਜੋ ਜਗ ਬੈਰੀ ਹੋਇ।।',
    blessingText: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਅਪਾਰ ਦਇਆ ਤੁਹਾਡੇ ਉੱਤੇ ਸਦਾ ਬਣੀ ਰਹੇ। ਤੁਹਾਡਾ ਜੀਵਨ ਸਤਯਨਾਮ ਦੇ ਪ੍ਰਕਾਸ਼, ਪ੍ਰੇਮ ਅਤੇ ਵਿਵੇਕ ਨਾਲ ਭਰਪੂਰ ਹੋਵੇ।',
    rosePetalShowerText: '।। ਪਾਵਨ ਗੁਲਾਬ ਪੁਸ਼ਪ ਵਰਖਾ ।।',
    triggerPetalsBtn: 'ਗੁਲਾਬ ਪੁਸ਼ਪ ਵਰਖਾ ਕਰੋ',
    closeBtn: 'ਬੰਦ ਕਰੋ',

    diaryTitle: 'ਆਤਮ-ਚਿੰਤਨ ਡਾਇਰੀ',
    diarySubtitle: 'ਸਾਖੀ ਸਵਾਧਿਆਏ ਤੋਂ ਉਪਜੇ ਨਿੱਜੀ ਵਿਚਾਰ ਤੇ ਅਨੁਭਵ',
    addReflectionPrompt: 'ਇਸ ਸਾਖੀ ਤੋਂ ਤੁਹਾਨੂੰ ਕੀ ਪ੍ਰੇਰਨਾ ਮਿਲੀ? ਆਪਣੇ ਦਿਲ ਦੇ ਭਾਵ ਲਿਖੋ...',
    saveReflectionBtn: 'ਅਨੁਭਵ ਸਾਂਭੋ',
    reflectionSavedToast: 'ਤੁਹਾਡਾ ਰੂਹਾਨੀ ਵਿਚਾਰ ਡਾਇਰੀ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਹੋ ਗਿਆ।',
    noReflectionsYet: 'ਅਜੇ ਤੱਕ ਕੋਈ ਨਿੱਜੀ ਚਿੰਤਨ ਨਹੀਂ ਲਿਖਿਆ ਗਿਆ। ਅੱਜ ਦੀ ਸਾਖੀ ਪੜ੍ਹ ਕੇ ਆਪਣੇ ਭਾਵ ਲਿਖੋ।',
    deleteEntry: 'ਹਟਾਓ',
    exportDiaryBtn: 'ਡਾਇਰੀ ਸਾਂਝੀ / ਨਿਰਯਾਤ ਕਰੋ',
    newReflectionBtn: 'ਨਵਾਂ ਭਾਵ',
    addNewReflectionTitle: 'ਨਵਾਂ ਸਵਾਧਿਆਏ ਚਿੰਤਨ ਦਰਜ ਕਰੋ',
    categoryLabel: 'ਭਾਵ ਸ਼੍ਰੇਣੀ:',
    sakhiNumberOptional: 'ਸਬੰਧਤ ਸਾਖੀ ਸੰਖਿਆ (ਵੈਕਲਪਿਕ):',
    yourReflectionLabel: 'ਤੁਹਾਡੇ ਅੰਤਰਮਨ ਦਾ ਰੂਹਾਨੀ ਚਿੰਤਨ:',
    diaryTags: ['ਸੱਚ', 'ਪ੍ਰੇਮ', 'ਸਮਰਪਣ', 'ਵਿਵੇਕ', 'ਸ਼ਾਂਤੀ', 'ਆਤਮ-ਚਿੰਤਨ'],
    defaultCategory: 'ਚਿੰਤਨ',
    exportLabel: 'ਨਿਰਯਾਤ',

    dhunTitle: 'ਸਤਯਨਾਮ ਪਾਵਨ ਧੁਨ',
    dhunDesc: 'ਸ਼ਾਂਤ ਸਵਰਮੰਡਲ, ਵੀਣਾ ਤੇ ਸ਼ੁੱਧ ਸਤਯਨਾਮ ਸਿਮਰਨ ਜਾਪ (ਸਤਿਲੋਕ ਪਰੰਪਰਾ — ਕੇਵਲ ਸਤਯਨਾਮ)',
    dhunPlay: 'ਧੁਨ ਚਲਾਓ',
    dhunPause: 'ਧੁਨ ਰੋਕੋ',
    volumeLabel: 'ਆਵਾਜ਼ ਦਾ ਪੱਧਰ',
    droneHarmonics: 'ਸਵਰਮੰਡਲ ਤਰੰਗ',
    chimeRing: 'ਪਵਿੱਤਰ ਸਤਯਨਾਮ ਨਾਦ ਘੰਟੀ',

    settingsTitle: 'ਰੂਹਾਨੀ ਤਰਜੀਹਾਂ',
    appearanceTheme: 'ਪਿਛੋਕੜ ਤੇ ਸ਼ੈਲੀ (Theme)',
    themeBhojpatra: 'ਭੋਜਪੱਤਰ (ਰਵਾਇਤੀ ਕਰੀਮ / Bhojpatra)',
    themeAmritNeel: 'ਅੰਮ੍ਰਿਤ ਨੀਲ (ਰਾਤਰੀ ਸਵਾਧਿਆਏ / Dark)',
    themeSwarnaShanti: 'ਸਵਰਨ ਸ਼ਾਂਤੀ (ਗੋਲਡਨ ਅੰਬਰ)',
    nityaVaniReminder: 'ਦੈਨਿਕ ਨਿੱਤ ਬਾਣੀ ਯਾਦ (Daily Reminder)',
    reminderTime: 'ਅੰਮ੍ਰਿਤ ਵੇਲਾ ਯਾਦ ਸਮਾਂ (Amritvela)',
    notificationsEnabledMsg: 'ਦੈਨਿਕ ਨਿੱਤ ਬਾਣੀ ਯਾਦ ਸੂਚਨਾ ਚਾਲੂ ਹੋ ਗਈ ਹੈ।',
    notificationsBlockedMsg: 'ਕਿਰਪਾ ਕਰਕੇ ਬਰਾਊਜ਼ਰ ਵਿੱਚ ਨੋਟੀਫਿਕੇਸ਼ਨ ਆਗਿਆ ਦਿਓ।',
    fontSizeLabel: 'ਅੱਖਰਾਂ ਦਾ ਆਕਾਰ (Font Size)',
    sizeSmall: 'ਸੰਤੁਲਿਤ',
    sizeMedium: 'ਦਰਮਿਆਨਾ',
    sizeLarge: 'ਵੱਡਾ (ਸਪੱਸ਼ਟ)',

    installAppTitle: 'ਸਾਹੇਬ ਵਰਲਡ PWA ਇੰਸਟਾਲ ਕਰੋ',
    installAppDesc: 'ਆਪਣੇ ਮੋਬਾਈਲ ਜਾਂ ਕੰਪਿਊਟਰ ਉੱਤੇ ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਸਵਾਧਿਆਏ ਲਈ ਇੰਸਟਾਲ ਕਰੋ।',
    installBtn: 'ਐਪ ਇੰਸਟਾਲ ਕਰੋ (PWA)',
    installedBadge: 'ਐਪ ਇੰਸਟਾਲਡ ਹੈ',
    offlineBanner: 'ਆਫਲਾਈਨ ਮੋਡ — ਸਾਰੀਆਂ ਸਾਖੀਆਂ ਲੋਕਲ ਮੈਮੋਰੀ ਤੋਂ ਉਪਲਬਧ ਹਨ।',
    onlineBanner: 'ਔਨਲਾਈਨ ਕਨੈਕਟਡ',

    shareCopiedToast: 'ਪਾਵਨ ਸਾਖੀ ਤੇ ਭਾਵਾਰਥ ਕਲਿੱਪਬੋਰਡ ਵਿੱਚ ਕਾਪੀ ਹੋ ਗਿਆ!',

    appTitle: 'ਸਾਹੇਬ ਵਰਲਡ',
    allSakhisTitle: 'ਗ੍ਰੰਥ ਸੰਗ੍ਰਹਿ (ਸਾਖੀ ਸੰਗ੍ਰਹਿ)',
    studyMethodologyTitle: '5-ਪੜਾਵੀ ਸਵਾਧਿਆਏ',
    chooseLanguageTitle: 'ਭਾਸ਼ਾ ਚੋਣ (Language)',
    chooseThemeTitle: 'ਸਵਾਧਿਆਏ ਥੀਮ (ਸ਼ੈਲੀ)',
    readingModeTitle: 'ਪਾਠ ਸ਼ੈਲੀ ਤੇ ਵਿਵਸਥਾ',
    lineSpacingTitle: 'ਲਾਈਨ ਸਪੇਸਿੰਗ (Line Spacing)',
    widthModeTitle: 'ਪੰਨਾ ਚੌੜਾਈ (Page Width)',
    widthNarrow: 'ਤੰਗ (Narrow)',
    widthMedium: 'ਸੰਤੁਲਿਤ (Medium)',
    widthWide: 'ਚੌੜਾ (Wide)',
    fontFamilyTitle: 'ਲਿਪੀ ਸ਼ੈਲੀ (Font Family)',
    fontDevotionalSerif: 'ਪਰੰਪਰਾਗਤ ਸੈਰਿਫ (Serif)',
    fontDevotionalSans: 'ਸੁਗਮ ਸੈਂਸ (Sans)',
    fontSizeTitle: 'ਅੱਖਰਾਂ ਦਾ ਆਕਾਰ (Font Size)',
    fontSmall: 'ਛੋਟਾ',
    fontMedium: 'ਮਿਆਰੀ',
    fontLarge: 'ਵੱਡਾ (ਸਪਸ਼ਟ)',
    sahajModeTitle: 'ਸਹਿਜ ਮੋਡ (ਸਰਲ ਤੇ ਇਕਾਗਰ ਸਾਧਨਾ)',
    sahajModeSubtitle: 'ਸਿਰਫ਼ ਦੈਨਿਕ ਪਵਨ ਸਾਖੀ ਅਤੇ ਪਾਵਨ ਧਿਆਨ ਟਾਈਮਰ ਤੇ ਕੇਂਦਰਿਤ ਰਹੋ',
    sahajModeBadge: '।। ਸਹਿਜ ਮੋਡ ।।',
    sahajModeActive: 'ਸਹਿਜ ਮੋਡ ਸਕ੍ਰਿਯ ਹੈ',
    sahajModeEnabledDesc: 'ਉੱਨਤ ਟੂਲ ਲੁਕਾ ਦਿੱਤੇ ਗਏ ਹਨ। ਤੁਹਾਡਾ ਧਿਆਨ ਕੇਵਲ ਦੈਨਿਕ ਪਵਨ ਸਾਖੀ ਅਤੇ ਧਿਆਨ ਟਾਈਮਰ ਤੇ ਰਹੇਗਾ।',
    sahajModeDisabledDesc: 'ਸਾਰੇ ਟੂਲ (ਨਿਤਨੇਮ, ਸਮੁੱਚੀ ਗ੍ਰੰਥਾਵਲੀ, ਅਖੰਡ ਪਾਠ ਆਦਿ) ਦਿਖਾਈ ਦੇ ਰਹੇ ਹਨ।',
    sahajModeFocusNotice: 'ਸਹਿਜ ਮੋਡ ਸਕ੍ਰਿਯ: ਉੱਨਤ ਟੂਲ ਲੁਕੇ ਹੋਏ ਹਨ।',
    openMeditationTimerBtn: 'ਪਾਵਨ ਧਿਆਨ ਟਾਈਮਰ',
    openDailySakhiBtn: 'ਦੈਨਿਕ ਪਵਨ ਸਾਖੀ',
    dhunPlayerTitle: 'ਸਤਯਨਾਮ ਪਾਵਨ ਧੁਨ (ਸਤਿਲੋਕ ਨਾਦ ਸਾਧਨਾ)',
    dhunDescription: 'ਸ਼ਾਂਤ ਸਵਰਮੰਡਲ, ਵੀਣਾ ਤੇ ਸਤਯਨਾਮ ਸਿਮਰਨ ਜਾਪ (ਸਤਿਲੋਕ ਪਰੰਪਰਾ — ਕੇਵਲ ਸਤਯਨਾਮ)',
    vocalChantTitle: 'ਸਤਯਨਾਮ ਸਿਮਰਨ ਜਾਪ (ਬਾਣੀ ਜਾਪ)',
    vocalChantDesc: 'ਪਾਵਨ ਬਾਣੀ ਰਾਹੀਂ ਸ਼ਾਂਤ ਸਤਯਨਾਮ ਜਾਪ',
    notificationReminderTitle: 'ਦੈਨਿਕ ਨਿੱਤ ਬਾਣੀ ਯਾਦ-ਪੱਤਰ',
    notificationReminderDesc: 'ਅੰਮ੍ਰਿਤ ਵੇਲੇ ਸਵਾਧਿਆਏ ਲਈ ਰੋਜ਼ਾਨਾ ਯਾਦ-ਪੱਤਰ ਪ੍ਰਾਪਤ ਕਰੋ',
    testNotificationBtn: 'ਟੈਸਟ ਨੋਟੀਫਿਕੇਸ਼ਨ',
    noEntriesYet: 'ਅਜੇ ਕੋਈ ਨਿੱਜੀ ਚਿੰਤਨ ਦਰਜ ਨਹੀਂ ਹੈ। ਅੱਜ ਦੀ ਸਾਖੀ ਪੜ੍ਹ ਕੇ ਆਪਣੇ ਵਿਚਾਰ ਲਿਖੋ।',
    divineDarshanTitle: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਿਵਯ ਪਾਵਨ ਦਰਸ਼ਨ',
    divineDarshanSubtitle: 'ਕਮਲ ਫੁੱਲ ਉੱਤੇ ਬਿਰਾਜਮਾਨ, ਅਭੈ ਮੁਦਰਾ ਤੇ ਅਲੌਕਿਕ ਆਭਾਮੰਡਲ ਯੁਕਤ ਪਾਵਨ ਸਰੂਪ',
    offerFlowersBtn: 'ਫੁੱਲ ਭੇਟ ਤੇ ਨਮਨ',
    viewFullDarshanBtn: 'ਪੂਰਨ ਦਿਵਯ ਦਰਸ਼ਨ',
    darshanBlessingText: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿੱਚ ਕੋਟਿ-ਕੋਟਿ ਵੰਦਨਾ। ਸਤਯਨਾਮ ਦੀ ਪਾਵਨ ਜੋਤ ਤੁਹਾਡੇ ਹਿਰਦੇ ਵਿੱਚ ਸਦਾ ਜਗਦੀ ਰਹੇ।',
    pranamMantra: '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ਦਿਆਲ ।।',
    uploadPortraitBtn: 'ਪ੍ਰਮਾਣਿਕ ਸਰੂਪ ਅਪਲੋਡ ਕਰੋ',
    resetPortraitBtn: 'ਮੂਲ ਸਰੂਪ ਤੇ ਰੀਸੈਟ ਕਰੋ',
    customPortraitActive: 'ਤੁਹਾਡਾ ਪ੍ਰਮਾਣਿਕ ਸਰੂਪ ਸਰਗਰਮ ਹੈ',
    tilakAuthenticityNote: 'ਕਬੀਰ ਪੰਥੀ ਰਵਾਇਤੀ ਤਿਲਕ: ਚਿੱਟਾ ਊਰਧਵ ਪੁੰਡ੍ਰ ਤਿਲਕ (ਮੱਥੇ ਤੋਂ ਨੱਕ ਤੱਕ)',
    uploadPortraitHelp: 'ਜੇਕਰ ਤੁਸੀਂ ਆਪਣੇ ਆਸ਼ਰਮ / ਸੰਪ੍ਰਦਾਏ ਦਾ ਮੂਲ ਪ੍ਰਮਾਣਿਕ ਚਿੱਤਰ ਲਗਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਇੱਥੇ ਤਸਵੀਰ ਅਪਲੋਡ ਕਰੋ।',
    portraitUpdatedSuccess: 'ਪ੍ਰਮਾਣਿਕ ਸਰੂਪ ਸਫਲਤਾਪੂਰਵਕ ਸੁਰੱਖਿਅਤ ਕਰ ਦਿੱਤਾ ਗਿਆ!',
    uploadChangeImageBtn: 'ਤਸਵੀਰ ਅਪਲੋਡ / ਬਦਲੋ',
    uploadAuthenticPortraitTitle: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦਾ ਪ੍ਰਮਾਣਿਕ ਪਾਵਨ ਸਰੂਪ ਅਪਲੋਡ ਕਰੋ',
    uploadAuthenticPortraitDesc: 'ਰਵਾਇਤੀ ਕਬੀਰ ਪੰਥੀ ਚਿੱਟੇ ਤਿਲਕ ਵਾਲੀ ਆਪਣੇ ਆਸ਼ਰਮ ਜਾਂ ਮੰਦਿਰ ਦੀ ਮੂਲ ਤਸਵੀਰ ਇੱਥੇ ਅਪਲੋਡ ਕਰੋ।',
    dragDropOrBrowse: 'ਇੱਥੇ ਤਸਵੀਰ ਖਿੱਚੋ (Drag & Drop) ਜਾਂ ਕਲਿੱਕ ਕਰਕੇ ਚੁਣੋ',
    removePortraitBtn: 'ਤਸਵੀਰ ਹਟਾਓ',
    shwetTilakBadge: 'ਬੰਦੀਛੋੜ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ',
    noImageUploadedYet: 'ਦਰਸ਼ਨ ਲਈ ਆਪਣੀ ਪ੍ਰਮਾਣਿਕ ਤਸਵੀਰ ਅਪਲੋਡ ਕਰੋ',
    satguruMahimaTitle: '।। ਸਤਿਗੁਰੂ ਮਹਿਮਾ ।।',
    vaniPathBtn: 'ਬਾਣੀ ਪਾਠ',
    vaniVandanaLabel: 'ਬਾਣੀ ਵੰਦਨਾ',
    darshanHeaderTitle: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਦਰਸ਼ਨ',
    tilakAuthenticityDetail: 'ਰਵਾਇਤੀ ਕਬੀਰ ਪੰਥੀ ਮਾਨਤਾ ਅਨੁਸਾਰ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਮੱਥੇ ਉੱਤੇ ਪਾਵਨ ਚਿੱਟਾ ਊਰਧਵ ਪੁੰਡ੍ਰ ਤਿਲਕ (ਮੱਥੇ ਦੇ ਕੇਂਦਰ ਤੋਂ ਨੱਕ ਤੱਕ) ਸੁਸ਼ੋਭਿਤ ਰਹਿੰਦਾ ਹੈ। ਤੁਸੀਂ ਆਪਣੇ ਆਸ਼ਰਮ ਜਾਂ ਮੰਦਿਰ ਦਾ ਮੂਲ ਪ੍ਰਮਾਣਿਕ ਚਿੱਤਰ ਇੱਥੇ ਸਿੱਧਾ ਅਪਲੋਡ ਕਰ ਸਕਦੇ ਹੋ।',
    guruGodCouplet: '"ਗੁਰੂ ਗੋਬਿੰਦ ਦੋਊ ਖੜੇ, ਕਾਕੇ ਲਾਗੂੰ ਪਾਂਯ। ਬਲਿਹਾਰੀ ਗੁਰੂ ਆਪਣੇ, ਗੋਬਿੰਦ ਦੀਯੋ ਬਤਾਯ॥"',
    stopRecitationBtn: 'ਰੋਕੋ',
    listenBtn: 'ਸਰਵਣ',
    blessingBtn: 'ਅਸੀਸ',
    todaySakhiVani: '।। ਅੱਜ ਦੀ ਪਾਵਨ ਸਾਖੀ ਬਾਣੀ ।।',
    divineBhavarthLabel: '।। ਦਿਵਯ ਭਾਵਾਰਥ ।।',
    reflectionPlaceholder: 'ਅੱਜ ਦੇ ਚਿੰਤਨ ਦੇ ਪਾਵਨ ਭਾਵ ਇੱਥੇ ਲਿਖੋ...',
    cancelBtn: 'ਰੱਦ ਕਰੋ',
    addDiaryEntryBtn: 'ਡਾਇਰੀ ਵਿੱਚ ਨਿੱਜੀ ਵਿਚਾਰ ਜੋੜੋ',
    akhandPathFeatureTitle: 'ਅਖੰਡ ਪਾਠ ਅਤੇ ਸਵੈ-ਚਾਲਿਤ ਸਕ੍ਰੌਲਿੰਗ',
    akhandPathFeatureDesc: 'ਬਿਨਾਂ ਹੱਥ ਲਗਾਏ ਪਾਠ ਕਰਨ ਲਈ ਆਟੋ-ਸਕ੍ਰੌਲ ਅਤੇ ਸਪੀਡ ਕੰਟਰੋਲ ਦੀ ਵਰਤੋਂ ਕਰੋ।',
    startBtn: 'ਸ਼ੁਰੂ ਕਰੋ',
    swadhyayBlessingTitle: 'ਸਵੈ-ਅਧਿਐਨ ਸਿੱਧੀ ਅਸੀਸ',
    swadhyayBlessingMsg: 'ਤੁਸੀਂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਪਾਵਨ ਬਾਣੀ ਦਾ ਮਨਨ, ਚਿੰਤਨ ਅਤੇ ਸਮਰਪਣ ਪੂਰਾ ਕੀਤਾ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
    quizBlessingTitle: 'ਪ੍ਰਸ਼ਨੋਤਰੀ ਸਿੱਧੀ ਅਸੀਸ',
    quizBlessingMsg: 'ਸੱਚ, ਵਿਵੇਕ ਅਤੇ ਗੁਰੂ ਮਹਿਮਾ ਦੇ ਅਧਿਆਤਮਿਕ ਬੋਧ ਵਿੱਚ ਤੁਹਾਡੀ ਪ੍ਰਗਤੀ ਸ਼ਲਾਘਾਯੋਗ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਕਿਰਪਾ ਤੁਹਾਡੇ ਉੱਤੇ ਸਦਾ ਰਹੇ!',
    akhandPathBlessingTitle: 'ਅਖੰਡ ਪਾਠ ਸੰਪੂਰਨਤਾ ਅਸੀਸ',
    akhandPathBlessingMsg: 'ਤੁਸੀਂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਪਾਵਨ ਬਚਨਾਂ ਦਾ ਅਖੰਡ ਸਰਵਣ ਅਤੇ ਪਾਠ ਕੀਤਾ। ਅਮਰ ਲੋਕ ਦਾ ਮਾਰਗ ਨਿਸ਼ਕਪਟ ਭਗਤੀ ਨਾਲ ਸੁਖਾਲਾ ਹੁੰਦਾ ਹੈ।',
    footerDescription: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀਆਂ ਅਮਰ ਬਾਣੀਆਂ (ਕਬੀਰ ਸਾਖੀ ਸੰਗ੍ਰਹਿ, ਕਬੀਰ ਸਾਗਰ, ਬੀਜਕ) ਤੇ ਅਧਾਰਤ ਪਾਵਨ ਸਵੈ-ਅਧਿਐਨ ਅਤੇ ਸਾਧਨਾ ਲਈ ਸਮਰਪਿਤ।\n।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।',
    pwaTag: 'ਸਾਹੇਬ ਵਰਲਡ PWA • ਆਫ਼ਲਾਈਨ ਸਵੈ-ਅਧਿਐਨ',
    themeLanguageSettings: 'ਥੀਮ ਅਤੇ ਭਾਸ਼ਾ ਸੈਟਿੰਗਾਂ',
    moolPawanSakhiHeader: '।। ਮੂਲ ਪਾਵਨ ਸਾਖੀ ਬਾਣੀ ।।',
    bandichhorLabel: 'ਬੰਦੀਛੋੜ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ',
    designerTitle: 'ਸਾਖੀ ਸੰਦੇਸ਼ ਕਾਰਡ ਡਿਜ਼ਾਈਨਰ',
    themeStyleLabel: 'ਕਾਰਡ ਥੀਮ ਸ਼ੈਲੀ:',
    downloadLangLabel: 'ਡਾਊਨਲੋਡ ਭਾਸ਼ਾ:',
    aspectRatioLabel: 'ਕਾਰਡ ਦਾ ਆਕਾਰ (Aspect Ratio):',
    squareRatioLabel: 'ਵਰਗਾਕਾਰ (1:1)',
    storyRatioLabel: 'ਸਟੋਰੀ (9:16)',
    cancelLabel: 'ਰੱਦ ਕਰੋ',
    downloadBtn: 'ਡਾਊਨਲੋਡ ਕਰੋ',
    lowLabel: 'ਧੀਮੀ',
    highLabel: 'ਤੇਜ਼',
    onStatus: 'ਸਰਗਰਮ (ON)',
    offStatus: 'ਸ਼ਾਂਤ (OFF)',
    tripleChimeLabel: "✨ 'ਸਤਯ-ਨਾਮ' ਪਾਵਨ ਨਾਦ",
    sacredBellLabel: '🔔 ਪਾਵਨ ਘੰਟੀ',
    amritvelaLabel: '(ਅੰਮ੍ਰਿਤਵੇਲਾ 05:00 AM)',
    sentStatus: '✓ ਭੇਜਿਆ ਗਿਆ',
    pwaTitleLabel: 'ਸਾਹੇਬ ਵਰਲਡ - ਸਤਯਨਾਮ ਸਵੈ-ਅਧਿਐਨ PWA',
    pwaDescLabel: '100% ਆਫ਼ਲਾਈਨ ਸਮਰੱਥ • ਕਬੀਰ ਸਾਖੀ ਸੰਗ੍ਰਹਿ, ਕਬੀਰ ਸਾਗਰ ਅਤੇ ਬੀਜਕ ਤੇ ਅਧਾਰਤ ਪਾਵਨ ਸਵੈ-ਅਧਿਐਨ ਸਾਧਨਾ',
    notificationPermissionError: 'ਕਿਰਪਾ ਕਰਕੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਨੋਟੀਫਿਕੇਸ਼ਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿਓ।',
    notificationNotSupportedError: 'ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਨੋਟੀਫਿਕੇਸ਼ਨ ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ।',
    speedSlow: 'ਸ਼ਾਂਤ',
    speedNormal: 'ਮਾਨਕ',
    speedFast: 'ਤੇਜ਼',
    bhavarthLabel: 'ਭਾਵਾਰਥ:',
    // Saheb Jantri (Calendar)
    jantriTitle: 'ਸਾਹੇਬ ਜੰਤਰੀ',
    jantriSubtitle: 'ਪਾਵਨ ਤਿਥੀਆਂ ਅਤੇ ਉਤਸਵ',
    purnimaLabel: 'ਪੂਰਨਮਾਸ਼ੀ',
    amavasyaLabel: 'ਮੱਸਿਆ',
    sangrandLabel: 'ਸੰਗਰਾਂਦ',
    kabirJayantiLabel: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜਯੰਤੀ',
    kabirNirvanLabel: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨਿਰਵਾਣ ਦਿਵਸ',
    guruJayantiLabel: 'ਗੁਰੂ ਜਯੰਤੀ',
    magharUtsavLabel: 'ਮਘਰ ਪਾਵਨ ਉਤਸਵ',
    satnamSalutation: '🌹।।ਸਤਯਨਾਮ।।🌹',
    sahebBangiSalutation: '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।🙏',
    monthlyGridTitle: 'ਸਾਹੇਬ ਸਾਲਾਨਾ ਜੰਤਰੀ 2026',
    // Mantra Tracker
    mantraTrackerTitle: 'ਸਤਯਨਾਮ ਨਾਮ-ਸਿਮਰਨ ਆਵਰਤਨ',
    mantraTrackerSubtitle: 'ਦੈਨਿਕ ਸਿਮਰਨ ਅਤੇ ਮਾਲਾ ਗਣਨਾ',
    dailyGoalLabel: 'ਦੈਨਿਕ ਟੀਚਾ (ਮਾਲਾ)',
    totalCountsLabel: 'ਕੁੱਲ ਸਿਮਰਨ (ਜਾਪ)',
    currentMalaLabel: 'ਵਰਤਮਾਨ ਮਾਲਾ',
    logMalaBtn: 'ਮਾਲਾ ਦਰਜ ਕਰੋ',
    resetProgressBtn: 'ਪ੍ਰਗਤੀ ਰੀਸੈਟ ਕਰੋ',
    mantraHistoryTitle: 'ਸਿਮਰਨ ਇਤਿਹਾਸ',

    // Audio Library
    audioLibraryTitle: 'ਅਮਰ ਬਾਣੀ ਆਡੀਓ ਲਾਇਬ੍ਰੇਰੀ',
    audioLibrarySubtitle: 'ਸਤਿਗੁਰੂ ਦੇ ਪਾਵਨ ਸ਼ਬਦ ਅਤੇ ਸਤਿਸੰਗ',
    playSatsangBtn: 'ਸਤਿਸੰਗ ਸਰਵਣ',
    granthAudioLabel: 'ਗ੍ਰੰਥ ਪਾਠ',
    bhajanAudioLabel: 'ਪਾਵਨ ਭਜਨ',
    playingNowLabel: 'ਹੁਣ ਚੱਲ ਰਿਹਾ ਹੈ:',

    // Universe Map (Brahmand Darshan)
    tabUniverseMap: 'ਬ੍ਰਹਮੰਡ ਦਰਸ਼ਨ (ਸ੍ਰਿਸ਼ਟੀ ਤੇ ਲੋਕ ਰਚਨਾ)',
    universeMapTitle: 'ਬ੍ਰਹਮੰਡ ਅਤੇ ਅਮਰਲੋਕ ਦਰਸ਼ਨ (Universe Map)',
    universeMapSubtitle: '🌟 ਸਜੀਵ ਬ੍ਰਹਮੰਡ ਮਾਨਚਿੱਤਰ - ਸਮੂਹ ਲੋਕਾਂ ਦਾ ਤੱਤ ਵੇਰਵਾ',
    kabirSagarBrahmandDarshan: 'ਕਬੀਰ ਸਾਗਰ ਬ੍ਰਹਮੰਡ ਦਰਸ਼ਨ',
    treeNodeLabel: 'ਟ੍ਰੀ ਨੋਡ',
    realmNature: 'ਮੰਡਲ ਦਾ ਸਰੂਪ',
    soulInternalState: '🕊️ ਜੀਵਾਤਮਾ ਦੀ ਆਤਮਿਕ ਸਥਿਤੀ',
    kabirSagarProof: '📜 ਕਬੀਰ ਸਾਗਰ ਪ੍ਰਮਾਣ ਸਾਖੀ:',
    liberationKey: 'ਮੁਕਤੀ ਕੁੰਜੀ:',
    universeHierarchyTree: 'ਬ੍ਰਹਮੰਡੀ ਪਦਕ੍ਰਮ ਚੱਕਰ ਤੇ ਰੁੱਖ (ECharts Sunburst & Tree)',
    ascensionTreeNodes: 'ਆਤਮਿਕ ਆਰੋਹਣ ਟ੍ਰੀ ਨੋਡਜ਼ (ਕਲਿੱਕ ਕਰੋ)',
    kabirSagarMahavakya: 'ਕਬੀਰ ਸਾਗਰ (ਅਨੁਰਾਗ ਸਾਗਰ) ਮਹਾਵਾਕ',
    universeLevels: [
      {
        id: 1,
        title: 'ਅਨਾਮੀ ਲੋਕ (ਅਕਹ ਲੋਕ)',
        entity: 'ਅਨਾਮੀ ਪੁਰਸ਼ (ਸਤਯਪੁਰਸ਼ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਸਰਵਉੱਚ ਰੂਪ)',
        frequency: '963 Hz',
        description: 'ਸ੍ਰਿਸ਼ਟੀ ਦਾ ਸਰਵਉੱਚ, ਅਨਾਦਿ ਅਤੇ ਅਕਹ ਧਾਮ ਜਿੱਥੇ ਨਾ ਰੂਪ ਹੈ, ਨਾ ਰੇਖਾ, ਕੇਵਲ ਪਰਮ ਚੇਤਨਾ ਦਾ ਅਖੰਡ ਦਿਵਯ ਪ੍ਰਕਾਸ਼ ਹੈ। ਇੱਥੋਂ ਹੀ ਸਮੂਹ ਦਿਵਯ ਲੋਕਾਂ ਦਾ ਵਿਸਤਾਰ ਹੁੰਦਾ ਹੈ।',
        vani: '"ਅਨਾਮੀ ਪੁਰਸ਼ ਕੀ ਅਜਬ ਕਹਾਨੀ। ਜਹਾਂ ਨ ਸੂਰਜ ਚਾਂਦ ਨ ਪਾਨੀ॥ ਕੋਟਿ ਭਾਨੁ ਸਮ ਏਕ-ਏਕ ਲੋਮਾ। ਐਸਾ ਅਮਰ ਧਾਮ ਨਿਸ਼ਕਾਮਾ॥"',
      },
      {
        id: 2,
        title: 'ਅਗਮ ਅਤੇ ਅਲਖ ਲੋਕ',
        entity: 'ਅਗਮ ਪੁਰਸ਼ ਅਤੇ ਅਲਖ ਪੁਰਸ਼ (ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਪਾਵਨ ਵਿਸਤਾਰ)',
        frequency: '852 Hz',
        description: 'ਅਮਰਲੋਕ ਤੋਂ ਉੱਪਰ ਅਤੇ ਅਨਾਮੀ ਲੋਕ ਤੋਂ ਹੇਠਾਂ ਸਥਿਤ ਦੋ ਅਤਿ ਪਾਵਨ ਅਧਿਆਤਮਿਕ ਮੰਡਲ। ਜਿੱਥੇ ਸ਼ਬਦ ਦੀ ਬਹੁਤ ਹੀ ਬਾਰੀਕ ਅਤੇ ਮਧੁਰ ਗੂੰਜ ਹੁੰਦੀ ਹੈ।',
        vani: '"ਅਲਖ ਅਗਮ ਕੀ ਮਹਿਮਾ ਭਾਰੀ, ਜਹੱ ਸੁਰਤ ਪਹੁੰਚੇ ਨਿਰਵਿਕਾਰੀ॥ ਸਤਿਗੁਰੂ ਕ੍ਰਿਪਾ ਸੇ ਪੰਥ ਲਖਾਵੇ, ਹੰਸ ਅਮਰ ਪਦ ਸਹਜ ਸਮਾਵੇ॥"',
      },
      {
        id: 3,
        title: 'ਅਮਰਲੋਕ / ਸਤਯਲੋਕ (ਸਚਖੰਡ)',
        entity: 'ਸਤਯਪੁਰਸ਼ ਕਬੀਰ ਸਾਹੇਬ (ਪਰਮੇਸ਼ਵਰ)',
        frequency: '741 Hz',
        description: 'ਕਬੀਰ ਸਾਗਰ ਵਿੱਚ ਵਰਣਿਤ ਹੰਸ ਆਤਮਾਵਾਂ ਦਾ ਸਨਾਤਨ ਨਿਜ ਘਰ। ਇੱਥੇ ਅੰਮ੍ਰਿਤ ਦਾ ਮਾਨਸਰੋਵਰ, ਅਜਰ-ਅਮਰ ਕਲਪਵ੍ਰਿਕਸ਼, ਮੋਤੀ ਚੁਗਦੇ ਹੰਸ ਅਤੇ ਸੁਖਾਂ ਦੀ ਅਖੰਡ ਵਰਖਾ ਹੈ। ਇੱਥੇ ਜੀਵ ਕਦੇ ਦੁਖੀ ਜਾਂ ਵਿਚਲਿਤ ਨਹੀਂ ਹੁੰਦਾ।',
        vani: '"ਅਮਰ ਲੋਕ ਇਕ ਦੇਸ਼ ਹਮਾਰਾ, ਜਹਾਂ ਨ ਕਾਲ ਕਾ ਸੰਚਾਰਾ॥ ਹੰਸ ਕਰਹਿਂ ਅੰਮ੍ਰਿਤ ਆਹਾਰਾ, ਸੋਹੰਗ ਸ਼ਬਦ ਕੀ ਧਾਰ ਅਪਾਰਾ॥"',
      },
      {
        id: 4,
        title: 'ਭੰਵਰ ਗੁਫਾ (ਅੰਤਰਿਕਸ਼ ਸੀਮਾ)',
        entity: 'ਸੋਹੰਗ ਪੁਰਸ਼ (ਮਹਾ ਚੇਤਨ)',
        frequency: '639 Hz',
        description: 'ਅਮਰਲੋਕ ਅਤੇ ਕਾਲ ਦੇ 21 ਬ੍ਰਹਮੰਡਾਂ ਦੇ ਵਿਚਕਾਰ ਦਾ ਮਹਾ-ਅੰਤਰਿਕਸ਼। ਇੱਥੇ ਕਾਲ ਦਾ ਪ੍ਰਵੇਸ਼ ਵਰਜਿਤ ਹੈ ਅਤੇ ਇੱਥੇ ਮੁਰਲੀ ਦੀ ਪਾਵਨ ਅਨਹਦ ਧੁਨ ਗੂੰਜਦੀ ਹੈ।',
        vani: '"ਭੰਵਰ ਗੁਫਾ ਮੇਂ ਮੁਰਲੀ ਬਾਜੈ, ਸੋਹੰਗ ਸ਼ਬਦ ਤਹਾਂ ਪਰ ਗਾਜੈ॥ ਹੰਸਨ ਕੀ ਗਤਿ ਅਤਿ ਸੁਖਦਾਈ, ਸਤਿਗੁਰੂ ਕ੍ਰਿਪਾ ਸੇ ਲਖੀ ਜਾਈ॥"',
      },
      {
        id: 5,
        title: 'ਮਹਾ-ਸੁੰਨ (ਅੰਤਰਿਕਸ਼ ਮਹਾ-ਸ਼ੁੰਨ)',
        entity: 'ਅਕਸ਼ਰ ਪੁਰਸ਼ (ਅਵਿਅਕਤ ਬ੍ਰਹਮ)',
        frequency: '528 Hz',
        description: 'ਅਮਰਲੋਕ ਅਤੇ ਕਾਲ ਦੇ ਲੋਕਾਂ ਨੂੰ ਵੱਖ ਕਰਨ ਵਾਲਾ 5 ਅਰਬ ਯੋਜਨ ਚੌੜਾ ਮਹਾ-ਸ਼ੁੰਨ। ਇੱਥੇ ਕਾਲ ਦੀ ਸ਼ਕਤੀ ਸ਼ੁੰਨ ਹੋ ਜਾਂਦੀ ਹੈ। ਕੇਵਲ ਸਤਿਗੁਰੂ ਦੇ ਸਤਯਨਾਮ ਦਾ ਪ੍ਰਕਾਸ਼ ਹੀ ਇਸ ਮਹਾ-ਸ਼ੁੰਨ ਨੂੰ ਪਾਰ ਕਰਾਉਂਦਾ ਹੈ।',
        vani: '"ਮਹਾ ਸੁੰਨ ਕਾ ਪੰਥ ਵਿਕਾਰਾ, ਬਿਨ ਸਤਿਗੁਰੂ ਕੋਈ ਨ ਪਾਏ ਪਾਰਾ॥ ਸਤਯਨਾਮ ਕੀ ਨੌਕਾ ਭਾਰੀ, ਹੰਸ ਪਾਰ ਉਤਰੇ ਸੁਖਕਾਰੀ॥"',
      },
      {
        id: 6,
        title: 'ਤ੍ਰਿਕੁਟੀ (ਬ੍ਰਹਮ ਲੋਕ / ਓਂਕਾਰ ਧਾਮ)',
        entity: 'ਕਾਲ ਬ੍ਰਹਮ (ਕਸ਼ਰ ਪੁਰਸ਼ / ਜਯੋਤੀ ਨਿਰੰਜਨ)',
        frequency: '396 Hz',
        description: 'ਲਾਲ ਰੰਗ ਦਾ ਗਗਨ ਜਿੱਥੇ ਓਂਕਾਰ ਦੀ ਨਾਦ ਗੂੰਜਦੀ ਹੈ ਅਤੇ ਮ੍ਰਿਦੰਗ ਤੇ ਨਗਾੜੇ ਦੀ ਧੁਨੀ ਹੁੰਦੀ ਹੈ। ਇਹ ਕਸ਼ਰ ਬ੍ਰਹਮ ਦਾ ਪ੍ਰਮੁੱਖ ਲੋਕ ਹੈ ਜਿੱਥੋਂ ਮਨ ਅਤੇ ਮਾਇਆ ਦਾ ਨਿਯੰਤਰਣ ਹੁੰਦਾ ਹੈ।',
        vani: '"ਤ੍ਰਿਕੁਟੀ ਮਹਲ ਮੇਂ ਬਾਦਲ ਗਰਜੇ, ਲਾਲ ਗਗਨ ਵਿਚ ਸੁਰਤ ਬਿਰਾਜੇ॥ ਓਂਕਾਰ ਸ਼ਬਦ ਕੀ ਧੁਨ ਭਾਰੀ, ਕਾਲ ਪੁਰਸ਼ ਕੀ ਹਦ ਵਿਸਤਾਰੀ॥"',
      },
      {
        id: 7,
        title: 'ਸਹਸ੍ਰਦਲ ਕਮਲ (ਅੰਡ ਬ੍ਰਹਮੰਡ / ਜਯੋਤੀ ਲੋਕ)',
        entity: 'ਜਯੋਤੀ ਨਿਰੰਜਨ ਦਾ ਸੂਖਮ ਰੂਪ (ਕਾਲ)',
        frequency: '288 Hz',
        description: 'ਸਹਸ੍ਰ ਪੰਖੁੜੀਆਂ ਵਾਲਾ ਦੇਦੀਪਯਮਾਨ ਕਮਲ ਜਿੱਥੇ ਕਰੋੜਾਂ ਦੀਵਿਆਂ ਵਰਗੀ ਇਕ ਮਹਾਨ ਜਯੋਤੀ ਜਲਦੀ ਹੈ। ਇੱਥੇ ਘੰਟਾ ਅਤੇ ਸ਼ੰਖ ਦੀ ਅਨਹਦ ਧੁਨੀ ਗੂੰਜਦੀ ਹੈ।',
        vani: '"ਸਹਸ੍ਰ ਕੰਵਲ ਦਲ ਜਯੋਤੀ ਪ੍ਰਕਾਸ਼ੀ, ਨਿਰੰਜਨ ਬੈਠਾ ਘਟ ਆਵਾਸੀ॥ ਘੰਟਾ ਸ਼ੰਖ ਬਜੇ ਸ਼ਹਨਾਈ, ਸਾਧੂ ਸੁਰਤ ਤਹਾਂ ਠਹਰਾਈ॥"',
      },
      {
        id: 8,
        title: '21 ਬ੍ਰਹਮੰਡ ਅਤੇ ਤਿੰਨ ਲੋਕ',
        entity: 'ਬ੍ਰਹਮਾ (ਰਜੋਗੁਣ), ਵਿਸ਼ਨੂੰ (ਸਤੋਗੁਣ), ਸ਼ਿਵ (ਤਮੋਗੁਣ)',
        frequency: '192 Hz',
        description: 'ਉਹ ਭੌਤਿਕ ਅਤੇ ਦੇਵ ਲੋਕ ਜਿੱਥੇ ਚੌਰਾਸੀ ਲੱਖ ਜੂਨੀਆਂ ਦਾ ਚੱਕਰਵਿਊਹ ਚਲਦਾ ਹੈ। ਸਵਰਗ ਵਿੱਚ ਪੁੰਨ ਭੋਗ, ਪ੍ਰਿਥਵੀ ਉੱਤੇ ਕਰਮ ਅਤੇ ਪਾਤਾਲ ਵਿੱਚ ਅਧੋਗਤੀ। ਇੱਥੇ ਹਰ ਜੀਵ ਕਾਲ ਅਤੇ ਕਰਮ ਦੇ ਅਧੀਨ ਜਨਮਦਾ ਅਤੇ ਮਰਦਾ ਹੈ।',
        vani: '"ਤੀਨ ਲੋਕ ਸੰਸ਼ਯ ਮੇਂ ਬੀਤੇ, ਕਾਲ ਬਲੀ ਸਬਹੀ ਕੋ ਜੀਤੇ॥ ਕਬੀਰ ਸਾਹੇਬ ਕਹੇ ਪੁਕਾਰੀ, ਸਤਯਨਾਮ ਭਜ ਉਤਰੋ ਪਾਰੀ॥"',
      },
      {
        id: 9,
        title: 'ਪਿੰਡ ਦਰਸ਼ਨ (ਘਟ ਦੇ ਭੀਤਰ ਬ੍ਰਹਮੰਡ ਦਾ ਭੇਦ)',
        entity: 'ਸੂਰਤ (ਜੀਵਾਤਮਾ / ਚੇਤਨਾ)',
        frequency: '144 Hz',
        description: '"ਜੋ ਬ੍ਰਹਮੰਡੇ ਸੋਈ ਪਿੰਡੇ।" ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਸਮਝਾਇਆ ਕਿ ਜੋ ਕੁਝ ਬਾਹਰ ਦੇ ਲੋਕਾਂ ਵਿੱਚ ਹੈ, ਉਹ ਸਭ ਮਨੁੱਖੀ ਸਰੀਰ (ਘਟ) ਦੇ ਭੀਤਰ ਚੱਕਰਾਂ ਅਤੇ ਦੁਆਰਾਂ ਦੇ ਰੂਪ ਵਿੱਚ ਮੌਜੂਦ ਹੈ।',
        vani: '"ਜੋ ਬ੍ਰਹਮੰਡੇ ਸੋਈ ਪਿੰਡੇ, ਜੋ ਖੋਜੈ ਸੋ ਪਾਵੈ। ਘਟ ਹੀ ਮੇਂ ਸਾਹੇਬ ਘਟ ਹੀ ਮੇਂ ਅਮਰਲੋਕ, ਸੁਰਤ ਸ਼ਬਦ ਠਹਰਾਵੈ॥"',
      },
    ],
    vaniLabel: 'ਬਾਣੀ ਪ੍ਰਮਾਣ:',
    entityLabel: 'ਅਧਿਪਤੀ / ਸਰੂਪ:',
    frequencyLabel: 'ਧੁਨੀ ਤਰੰਗ (Frequency):',
    elementDetailsTitle: 'ਸਮੂਹ ਲੋਕਾਂ ਦਾ ਤੱਤ ਵੇਰਵਾ',
    elementDetailsDesc: 'ਕਬੀਰ ਸਾਗਰ ਅਨੁਸਾਰ ਹਰ ਲੋਕ ਦੀ ਰਚਨਾ, ਉਥੋਂ ਦੇ ਸੁਖਾਂ ਅਤੇ ਅਧਿਪਤੀ ਦਾ ਸੂਖਮ ਵੇਰਵਾ।',
    creationSecretTitle: 'ਸ੍ਰਿਸ਼ਟੀ ਰਚਨਾ ਦਾ ਮੂਲ ਭੇਦ',
    creationSecretDesc: 'ਅਨਾਦਿ ਕਾਲ ਤੋਂ ਚਲੀ ਆ ਰਹੀ ਸ੍ਰਿਸ਼ਟੀ ਦੀ ਉਤਪੱਤੀ ਅਤੇ ਕਾਲ-ਪੁਰਸ਼ ਦੇ ਜਾਲ ਦਾ ਅਸਲੀ ਬੋਧ।',
    suratShabdYogaTitle: 'ਸੂਰਤ-ਸ਼ਬਦ ਯੋਗ ਸਾਧਨਾ',
    suratShabdYogaDesc: 'ਅੰਤਰਮਨ ਵਿੱਚ ਸ਼ਬਦ ਦੀ ਧੁਨ ਨੂੰ ਫੜ ਕੇ ਅਮਰਲੋਕ ਦੀ ਯਾਤਰਾ ਕਰਨ ਦੀ ਪ੍ਰਾਚੀਨਤਮ ਵਿਹੰਗਮ ਮਾਰਗ ਪੱਧਤੀ।',
    elementDetailsFull: 'ਕਬੀਰ ਸਾਗਰ ਅਨੁਸਾਰ, ਸਾਡਾ ਬ੍ਰਹਿਮੰਡ ਵੱਖ-ਵੱਖ ਤੱਤਾਂ ਅਤੇ ਲੋਕਾਂ ਦਾ ਸੁਮੇਲ ਹੈ। ਮੌਤ ਲੋਕ (ਧਰਤੀ) ਪੰਜ ਸਥੂਲ ਤੱਤਾਂ (ਮਿੱਟੀ, ਪਾਣੀ, ਅੱਗ, ਹਵਾ, ਆਕਾਸ਼) ਨਾਲ ਬਣਿਆ ਹੈ। ਇਸ ਦੇ ਉੱਪਰ ਸਵਰਗ ਅਤੇ ਹੋਰ ਲੋਕ ਸੂਖਮ ਤੱਤਾਂ ਨਾਲ ਬਣੇ ਹਨ। ਪਰ "ਅਮਰਲੋਕ" (ਸਤਲੋਕ) ਇਹਨਾਂ ਨਾਸ਼ਵਾਨ ਤੱਤਾਂ ਤੋਂ ਪਰੇ ਹੈ। ਉੱਥੋਂ ਦਾ ਤੱਤ "ਨੂਰ" (ਪਰਮ ਪ੍ਰਕਾਸ਼) ਹੈ ਜੋ ਕਦੇ ਨਸ਼ਟ ਨਹੀਂ ਹੁੰਦਾ। ਉੱਥੇ ਨਾ ਬੁਢਾਪਾ ਹੈ, ਨਾ ਦੁੱਖ ਅਤੇ ਨਾ ਹੀ ਮੌਤ। ਹਰ ਲੋਕ ਦੇ ਆਪਣੇ ਅਧਿਪਤੀ ਅਤੇ ਨਿਯਮ ਹਨ, ਜਿਨ੍ਹਾਂ ਦਾ ਸੂਖਮ ਵੇਰਵਾ ਸੰਤਾਂ ਨੇ ਆਪਣੀ ਬਾਣੀ ਵਿੱਚ ਦਿੱਤਾ ਹੈ।',
    creationSecretFull: 'ਸ੍ਰਿਸ਼ਟੀ ਦੀ ਉਤਪੱਤੀ ਅਨਾਦਿ ਪੁਰਸ਼ (ਅਨਾਮੀ ਪੁਰਸ਼) ਤੋਂ ਹੋਈ। ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਅਨਾਮੀ ਪੁਰਸ਼ ਨੇ ਆਪਣੀ ਸ਼ਕਤੀ ਨਾਲ ਸਤਪੁਰਸ਼ ਨੂੰ ਪ੍ਰਗਟ ਕੀਤਾ। ਸਤਪੁਰਸ਼ ਨੇ ਹੋਰ ਪੁੱਤਰਾਂ ਦੀ ਰਚਨਾ ਕੀਤੀ, ਜਿਨ੍ਹਾਂ ਵਿੱਚੋਂ ਇੱਕ "ਜੋਤੀ ਨਿਰੰਜਨ" (ਕਾਲ ਬ੍ਰਹਮ) ਸੀ। ਕਾਲ ਬ੍ਰਹਮ ਦੀ ਹਠ ਅਤੇ ਤਪੱਸਿਆ ਕਾਰਨ ਉਸਨੂੰ ੨੧ ਬ੍ਰਹਿਮੰਡ ਮਿਲੇ, ਪਰ ਉਸਨੇ ਛਲ ਨਾਲ ਆਤਮਾਵਾਂ ਨੂੰ ਆਪਣੇ ਜਾਲ ਵਿੱਚ ਫਸਾ ਲਿਆ। ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਖੁਦ ਆ ਕੇ ਇਸ ਭੇਦ ਨੂੰ ਖੋਲ੍ਹਿਆ ਕਿ ਕਿਵੇਂ ਕਾਲ-ਪੁਰਸ਼ ਨੇ ਸਾਨੂੰ ਆਪਣੀ ਮਾਇਆ ਦੇ ਚੱਕਰਵਿਊ (੮੪ ਲੱਖ ਜੂਨੀਆਂ) ਵਿੱਚ ਉਲਝਾ ਰੱਖਿਆ ਹੈ ਅਤੇ ਅਸਲ ਮੁਕਤੀ ਦਾ ਮਾਰਗ ਕੀ ਹੈ।',
    suratShabdYogaFull: 'ਸੂਰਤ-ਸ਼ਬਦ ਯੋਗ ਉਹ ਪ੍ਰਾਚੀਨਤਮ ਪੱਧਤੀ ਹੈ ਜਿਸ ਨੂੰ "ਵਿਹੰਗਮ ਮਾਰਗ" ਵੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਇਸ ਵਿੱਚ "ਸੂਰਤ" (ਆਤਮਾ ਦੀ ਇਕਾਗਰਤਾ) ਨੂੰ "ਸ਼ਬਦ" (ਗੁਰੂ ਦੁਆਰਾ ਦਿੱਤੇ ਗਏ ਸਾਰ ਸ਼ਬਦ ਜਾਂ ਅਨਾਹਤ ਨਾਦ) ਨਾਲ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ। ਜਿਵੇਂ ਪਤੰਗ ਧਾਗੇ ਦੇ ਸਹਾਰੇ ਆਕਾਸ਼ ਵਿੱਚ ਉੱਡਦੀ ਹੈ, ਉਵੇਂ ਹੀ ਆਤਮਾ ਸ਼ਬਦ ਦੀ ਧੁਨ ਨੂੰ ਫੜ ਕੇ ਕਾਲ ਦੇ ਲੋਕਾਂ ਨੂੰ ਪਾਰ ਕਰਦੇ ਹੋਏ ਅਮਰਲੋਕ ਪਹੁੰਚਦੀ ਹੈ। ਇਹ ਸਾਧਨਾ ਕੇਵਲ ਇੱਕ ਪੂਰਨ ਸਤਗੁਰੂ ਦੇ ਮਾਰਗਦਰਸ਼ਨ ਵਿੱਚ ਹੀ ਸੰਭਵ ਹੈ, ਜੋ ਦਿਵਯ ਧੁਨੀ ਦੀ ਪਛਾਣ ਅਤੇ ਉਸਨੂੰ ਫੜਨ ਦੀ ਵਿਧੀ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ।',
    universeMapQuote: '"ਜਹਾਂ ਨ ਸੂਰਜ ਚਾਂਦ ਨ ਪਾਨੀ, ਅਨਾਮੀ ਪੁਰਸ਼ ਕੀ ਅਜਬ ਕਹਾਨੀ॥"',
    listenFrequencyBtn: 'ਧੁਨੀ ਤਰੰਗ ਸੁਣੋ',
    stopFrequencyBtn: 'ਧੁਨੀ ਬੰਦ ਕਰੋ',
    startJourneyBtn: 'ਸੂਰਤ-ਯਾਤਰਾ ਪ੍ਰਾਰੰਭ ਕਰੋ (Soul Journey)',
    stopJourneyBtn: 'ਯਾਤਰਾ ਰੋਕੋ',
    journeyDesc: 'ਸੂਰਤ ਦਾ ਪਿੰਡ (ਸਰੀਰ) ਤੋਂ ਅਨਾਮੀ ਲੋਕ ਤੱਕ ਦਾ ਦਿਵਯ ਸਫਰ',
    accordingToKabirSagar: 'ਕਬੀਰ ਸਾਗਰ ਅਨੁਸਾਰ',
    tabHealthDiagnostic: 'ਐਪ ਸਿਹਤ',
    healthDiagnosticTitle: 'ਸਿਸਟਮ ਡਾਇਗਨੌਸਟਿਕ',
    connectionStatus: 'ਕੁਨੈਕਸ਼ਨ ਸਥਿਤੀ',
    onlineLabel: 'ਔਨਲਾਈਨ (ਸਰਗਰਮ)',
    offlineLabel: 'ਆਫਲਾਈਨ (ਕੁਨੈਕਸ਼ਨ ਨਹੀਂ)',
    appIntegrity: 'ਐਪ ਅਖੰਡਤਾ',
    integrityHealthy: 'ਸਿਹਤਮੰਦ (Healthy)',
    audioEngineStatus: 'ਆਡੀਓ ਇੰਜਣ ਸਥਿਤੀ',
    audioActive: 'ਸਰਗਰਮ (Active)',
    audioSuspended: 'ਮੁਅੱਤਲ (Suspended)',
    sidebarTitle: 'ਸਾਹੇਬ ਵਰਲਡ (Saheb World)',
    sidebarFooter: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸਵਾਧਿਆਏ',
    openSidebar: 'ਮੀਨੂ ਖੋਲ੍ਹੋ',
    closeSidebar: 'ਮੀਨੂ ਬੰਦ ਕਰੋ',
    healthDiagnosticSubtitle: 'ਸਾਹੇਬ ਵਰਲਡ ਅਧਿਆਤਮਿਕ ਐਪਲੀਕੇਸ਼ਨ ਦੀ ਰੀਅਲ-ਟਾਈਮ ਸਿਸਟਮ ਅਖੰਡਤਾ ਅਤੇ ਕਨੈਕਟੀਵਿਟੀ ਸਥਿਤੀ।',
    appVersionLabel: 'ਐਪ ਸੰਸਕਰਣ',
    appVersionValue: 'v2.4.0 (ਸਤਿਗੁਰੂ ਕ੍ਰਿਪਾ ਸੰਸਕਰਣ)',
    localStorageLabel: 'ਸਥਾਨਕ ਸਟੋਰੇਜ',
    localStorageUsed: 'ਵਰਤਿਆ ਗਿਆ',
    lastCheckLabel: 'ਆਖਰੀ ਜਾਂਚ',
    localEnvTitle: 'ਸਥਾਨਕ ਵਾਤਾਵਰਣ ਸਮਝ',
    localEnvDesc: 'ਇਹ ਐਪਲੀਕੇਸ਼ਨ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਾਤਾਵਰਣ ਵਿੱਚ ਪ੍ਰੋਗਰੈਸਿਵ ਵੈੱਬ ਐਪ (PWA) ਵਜੋਂ ਚੱਲ ਰਹੀ ਹੈ। ਤੁਹਾਡੇ ਸਾਰੇ ਅਧਿਆਤਮਿਕ ਨੋਟਸ, ਮੰਤਰ ਗਿਣਤੀ ਅਤੇ ਪੜ੍ਹਨ ਦੀ ਪ੍ਰਗਤੀ ਔਫਲਾਈਨ ਪਹੁੰਚ ਲਈ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਦੀ ਸਥਾਨਕ ਸਟੋਰੇਜ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਰੂਪ ਵਿੱਚ ਸਟੋਰ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
    platformLabel: 'ਪਲੇਟਫਾਰਮ',
    themeLabel: 'ਥੀਮ',
    languageLabel: 'ਭਾਸ਼ਾ',
    refreshBtn: 'ਫਿਰ ਤੋਂ ਜਾਂਚੋ',
    tabDeepSearch: 'ਗਹਿਨ ਖੋਜ',
    tabMeditationTimer: 'ਸੁਮਿਰਨ ਟਾਈਮਰ',
    tabCommunityBoard: 'ਸਾਧਨਾ ਮੰਚ',
    searchPlaceholder: 'ਸਾਖੀ ਜਾਂ ਸ਼ਬਦ ਖੋਜੋ...',
    searchBtn: 'ਖੋਜੋ',
    searchResults: 'ਖੋਜ ਨਤੀਜੇ',
    noResults: 'ਕੋਈ ਨਤੀਜਾ ਨਹੀਂ ਮਿਲਿਆ।',
    meditationTimerTitle: 'ਸਿਮਰਨ ਧਿਆਨ ਸਮਾਂ',
    tabAutoCorrect: 'ਆਟੋ-ਕਰੈਕਟ',
    meditationSilence: 'ਮੌਨ (Silence)',
    meditationReady: 'ਤਿਆਰ (Ready)',
    deepSumiran: 'ਗਹਿਣ ਸਿਮਰਨ',
    startMeditation: 'ਧਿਆਨ ਆਰੰਭ',
    stopMeditation: 'ਧਿਆਨ ਵਿਸ਼ਰਾਮ',
    selectAmbientSound: 'ਪਿਛੋਕੜ ਧੁਨੀ ਚੋਣ',
    natureSound: 'ਕੁਦਰਤ (Wind)',
    fluteSound: 'ਬੰਸਰੀ (Flute)',
    beenSound: 'ਬੀਨ (Resonance)',
    satyanaamDhunSound: 'ਸਤਯਨਾਮ ਧੁਨ',
    communityBoardTitle: 'ਆਧਿਆਤਮਿਕ ਹੰਸ ਮੰਡਲ',
    communityBoardDesc: 'ਵਿਸ਼ਵ ਭਰ ਦੇ ਹੰਸਾਂ ਨਾਲ ਆਪਣੀਆਂ ਆਧਿਆਤਮਿਕ ਅਨੁਭੂਤੀਆਂ ਸਾਂਝੀਆਂ ਕਰੋ',
    shareAnonymously: 'ਨਿੱਜੀ ਪਛਾਣ ਨਾਲ ਸਾਂਝਾ ਕਰੋ',
    postEntry: 'ਅਨੁਭਵ ਸਾਂਝਾ ਕਰੋ',
    signInToJoin: 'ਮੰਡਲ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਲਈ ਸਾਈਨ-ਇਨ ਕਰੋ',
    signInDesc: 'ਆਪਣੀਆਂ ਆਧਿਆਤਮਿਕ ਅਨੁਭੂਤੀਆਂ ਸਾਂਝੀਆਂ ਕਰਨ ਲਈ ਗੂਗਲ ਖਾਤੇ ਨਾਲ ਜੁੜੋ।',
    continueWithGoogle: 'ਗੂਗਲ ਦੇ ਨਾਲ ਜਾਰੀ ਰੱਖੋ',
    communityLiveMsg: 'ਹੰਸ ਮੰਡਲ ਹੁਣ ਸਰਗਰਮ ਹੈ! ਤੁਹਾਡੀਆਂ ਅਨੁਭੂਤੀਆਂ ਵਿਸ਼ਵ ਭਰ ਦੇ ਹੰਸਾਂ ਨਾਲ ਸੁਰੱਖਿਅਤ ਰੂਪ ਵਿੱਚ ਸਾਂਝੀਆਂ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।',
    deepSearchEngine: 'ਗਹਿਣ ਖੋਜ ਇੰਜਣ',
    deepSearchDesc: 'ਕਬੀਰ ਸਾਗਰ, ਸਾਖੀ ਸੰਗ੍ਰਹਿ ਅਤੇ ਬੀਜਕ ਵਿੱਚ ਕਿਸੇ ਵੀ ਸ਼ਬਦ, ਵਿਸ਼ੇ ਜਾਂ ਸਾਖੀ ਸੰਖਿਆ ਨਾਲ ਖੋਜੋ।',
    exploreByGrantha: 'ਗ੍ਰੰਥ ਅਨੁਸਾਰ ਖੋਜੋ',
    exploreByGranthaDesc: 'ਵਿਸ਼ੇਸ਼ ਤੌਰ ਤੇ ਕਬੀਰ ਸਾਗਰ ਜਾਂ ਬੀਜਕ ਦੇ ਅੰਦਰ ਖੋਜੋ।',
    topicSearch: 'ਵਿਸ਼ੇ ਅਨੁਸਾਰ ਖੋਜੋ',
    topicSearchDesc: 'ਗੁਰੂ, ਮਾਇਆ, ਜਾਂ ਪ੍ਰੇਮ ਵਰਗੇ ਵਿਸ਼ਿਆਂ ਦੇ ਅਧਾਰ ਤੇ ਖੋਜੋ।',
    syncSettingsDesc: 'ਸਾਰੇ ਉਪਕਰਣਾਂ ਤੇ ਆਪਣੀਆਂ ਨੋਟੀਫਿਕੇਸ਼ਨ ਤਰਜੀਹਾਂ ਨੂੰ ਸਿੰਕ ਕਰਨ ਲਈ ਸਾਈਨ-ਇਨ ਕਰੋ।',
    saveSettingsBtn: 'ਸੰਭਾਲੋ',
    statusLabel: 'ਸਥਿਤੀ',
    goalAchieved: 'ਟੀਚਾ ਪ੍ਰਾਪਤ',
    inProgress: 'ਜਾਰੀ ਹੈ',
    malasLabel: 'ਮਾਲਾ',
    noSimranSessions: 'ਅਜੇ ਤੱਕ ਕੋਈ ਸਿਮਰਨ ਸੈਸ਼ਨ ਨਹੀਂ ਹੋਇਆ।',
    simranGoalReached: 'ਟੀਚਾ ਪੂਰਾ ਹੋਇਆ',
    simranGoalPending: 'ਸਿਮਰਨ ਜਾਰੀ ਹੈ',
    dainikChintan: 'ਦੈਨਿਕ ਚਿੰਤਨ',
    vishaySandharb: 'ਵਿਸ਼ੇ ਸੰਦਰਭ',
    shabadarthLabel: 'ਸ਼ਬਦਾਰਥ',
    nityaVaniTitle: 'ਦੈਨਿਕ ਨਿੱਤ ਬਾਣੀ',
    nityaVaniDesc: 'ਹਰ ਸਵੇਰ ਇੱਕ ਪਾਵਨ ਸਾਖੀ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਸੂਚਨਾਵਾਂ ਨੂੰ ਸਮਰੱਥ ਕਰੋ।',
    enableNotifications: 'ਸੂਚਨਾਵਾਂ ਸਮਰੱਥ ਕਰੋ',
    notificationTime: 'ਸੂਚਨਾ ਦਾ ਸਮਾਂ',
    notificationPermissionDenied: 'ਸੂਚਨਾ ਦੀ ਇਜਾਜ਼ਤ ਨਹੀਂ ਦਿੱਤੀ ਗਈ। ਕਿਰਪਾ ਕਰਕੇ ਬ੍ਰਾਊਜ਼ਰ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਇਸਨੂੰ ਸਮਰੱਥ ਕਰੋ।',
    tabKabiraKatha: 'ਸ਼੍ਰੀ ਕਬੀਰ ਕਥਾ',
    kathaTitle: 'ਸ਼੍ਰੀ ਕਬੀਰਜੀ ਦੀ ਕਥਾ (ਮੂਲ ਅਤੇ ਵਿਆਖਿਆ)',
    kathaSubtitle: 'ਸਤਿਗੁਰੂ ਜੀ ਦੀ ਲੀਲਾ ਅਤੇ ਇਤਿਹਾਸ — ਦੋ-ਦੋ ਪੰਕਤੀਆਂ ਨਾਲ ਡੂੰਘੀ ਵਿਆਖਿਆ ਅਤੇ "ਛੁਪਾਓ/ਦਿਖਾਓ" (Chupao) ਸਹੂਲਤ',
    toggleExplanation: 'ਵਿਆਖਿਆ ਅਤੇ ਮਰਮ ਛੁਪਾਓ / ਦਿਖਾਓ',
    hideText: 'ਛੁਪਿਆ ਹੋਇਆ (Chupao Active)',
    showText: 'ਵਿਆਖਿਆ ਵੇਖੋ',
    openInNewTab: 'ਪੂਰੀ ਵਿੰਡੋ / ਨਵੇਂ ਟੈਬ ਵਿੱਚ ਖੋਲ੍ਹੋ',
    settingsSavedSuccess: 'ਸਫਲਤਾਪੂਰਵਕ ਸੁਰੱਖਿਅਤ ਕੀਤੀਆਂ ਗਈਆਂ!',
    inAppReminderActive: 'ਇਨ-ਐਪ ਅੰਮ੍ਰਿਤ ਬਾਣੀ ਯਾਦਗਾਰ ਸਰਗਰਮ ਹੈ',
    pushNoticeIframe: 'ਪ੍ਰੀਵਿਊ ਵਿੱਚ ਸਿਸਟਮ ਪੁਸ਼ ਸੂਚਨਾਵਾਂ ਸੀਮਤ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਪੂਰੀਆਂ ਪੁਸ਼ ਸੂਚਨਾਵਾਂ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਨਵੇਂ ਟੈਬ ਵਿੱਚ ਖੋਲ੍ਹੋ ਜਾਂ PWA ਇੰਸਟਾਲ ਕਰੋ।',
    kathaAkhandScrollMode: 'ਅਖੰਡ ਪਾਠ ਸਕ੍ਰੌਲ ਮੋਡ',
    kathaAkhandScrollActive: 'ਅਖੰਡ ਪਾਠ ਪ੍ਰਵਾਹ ਜਾਰੀ ਹੈ',
    kathaAkhandScrollPause: 'ਰੋਕੋ (Pause)',
    kathaAkhandScrollResume: 'ਪ੍ਰਵਾਹ ਜਾਰੀ ਰੱਖੋ (Play)',
    kathaAkhandScrollSpeed: 'ਸਕ੍ਰੌਲ ਗਤੀ',
    kathaAkhandCompleted: '।।ਸਤਯਨਾਮ।। ਸ਼੍ਰੀ ਕਬੀਰ ਕਥਾ ਅਖੰਡ ਪਾਠ ਸੰਪੰਨ ਹੋਇਆ।',
    fontSerifLabel: 'ਰਵਾਇਤੀ ਸੇਰਿਫ (Serif)',
    fontSansLabel: 'ਸੁਗਮ ਸੈਂਸ (Sans)',
    scrollToTop: 'ਸਿਖਰ ਤੇ ਜਾਓ (ਉੱਪਰ)',
    scrollToBottom: 'ਹੇਠਾਂ ਜਾਓ (ਤਲ ਤੇ)',
    spiritualEssenceLabel: 'ਆਤਮਿਕ ਮਰਮ / ਰਹਿਸ:',
    shabdarthLabel: 'ਅੱਖਰੀ ਅਰਥ (ਸ਼ਬਦਾਰਥ):',
    themeBanyanGhat: '🌳 ਬਰਗਦ ਘਾਟ (Banyan Ghat)',
    themeMagharDham: '🌄 ਮਗਹਰ ਧਾਮ (Maghar Dham)',
    themeRoyal: 'ਸ਼ਾਹੀ (Royal)',
    themeSaffron: 'ਕੇਸਰੀ (Saffron)',
    themeEmerald: 'ਮਰਕਤ (Emerald)',
    themeOled: 'ਓਲੇਡ (OLED)',
    themeDawn: '⛰️ ਪਰਬਤ (Dawn)',
    themeForest: '🌿 ਨਿਕੁੰਜ (Forest)',
    themeSunset: '🌅 ਸੰਧਿਆ (Sunset)',
    themeRiver: '🌊 ਸਰਿਤਾ (River)',
    themeAutumn: '🍁 ਵਾਟਿਕਾ (Autumn)',
    languageSelect: 'ਭਾਸ਼ਾ ਚੋਣ (Language)',
    selectChapterLabel: 'ਅਧਿਆਇ ਚੁਣੋ:',
    totalGranthsAvailable: 'ਕੁੱਲ ੭ ਪਾਵਨ ਗ੍ਰੰਥ ਉਪਲਬਧ',
    chaptersCountLabel: 'ਅਧਿਆਇ',
    swadhyayHoursLabel: 'ਅਧਿਐਨ',
    mangalTypeLabel: 'ਮੰਗਲਾਚਰਣ',
    chaupaiTypeLabel: 'ਚੌਪਈ',
    sorthaTypeLabel: 'ਸੋਰਠਾ',
    sakhiTypeLabel: 'ਸਾਖੀ',
    dohaTypeLabel: 'ਦੋਹਾ',
    shabadTypeLabel: 'ਸ਼ਬਦ / ਪਦ',
    ramainiTypeLabel: 'ਰਮੈਨੀ',
    prevChapterLabel: 'ਪਿਛਲਾ ਅਧਿਆਇ',
    nextChapterLabel: 'ਅਗਲਾ ਅਧਿਆਇ',
    themeMool: 'ਮੂਲ',
    themePothi: 'ਪੋਥੀ',
    themeBlack: 'ਬਲੈਕ',
    themeNetra: 'ਨੇਤਰ',
    fontLabel: 'ਫੌਂਟ:',
    targetLabel: 'ਲਕਸ਼:',
    bhavarthShabdarthToggleLabel: 'ਭਾਵਾਰਥ/ਸ਼ਬਦਾਰਥ:',
    lineGuideLabel: 'ਲਾਈਨ ਗਾਈਡ',
    dhunMute: 'ਮਿਊਟ',
    dhunTanpura: 'ਤਾਨਪੁਰਾ',
    dhunFlute: 'ਬਾਂਸੁਰੀ',
    dhunSatyanaam: 'ਸਤਯਨਾਮ ਧੁਨ',
    zenFocusLabel: 'ਜੇਨ ਇਕਾਗਰਤਾ',
    normalModeLabel: 'ਸਾਧਾਰਣ ਮੋਡ',
    autoScrollSpeedLabel: 'ਗਤੀ:',
    pageFlipModeLabel: '📖 3D ਪੋਥੀ ਪਾਠ ਮੋਡ',
    continuousModeLabel: 'ਨਿਰੰਤਰ ਪਾਠ',
    pageLabel: 'ਪੰਨਾ',
    readingGuideInfoTitle: 'ਪਾਵਨ ਗ੍ਰੰਥ ਪਾਠ ਸੁਵਿਧਾਵਾਂ ਅਤੇ ਸ਼ੈਲੀਆਂ',
    masterLibraryTitle: 'ਸਮਗਰ ਕਬੀਰ ਗ੍ਰੰਥਾਲਯ ਅਤੇ ਕਥਾ ਕੋਸ਼',
    searchVersePlaceholder: 'ਪਦ ਜਾਂ ਭਾਵਾਰਥ ਖੋਜੋ...',
    autoCorrectTitle: 'ਆਟੋ-ਕਰੈਕਟ',
    autoCorrectDesc: 'ਆਪਣੇ ਕਿਸੇ ਵੀ ਹੱਥ ਲਿਖਤ ਜਾਂ ਟਾਈਪ ਕੀਤੇ ਗ੍ਰੰਥ ਦੇ ਪਾਠ ਨੂੰ ਇੱਥੇ ਪੇਸਟ ਕਰੋ। AI ਤਕਨੀਕ ਦੁਆਰਾ ਇਸਨੂੰ ਸ਼ੁੱਧ, ਸਹੀ ਅਤੇ ਸੁਚੱਜਾ ਕੀਤਾ ਜਾਵੇਗਾ।',
    autoCorrectPlaceholder: 'ਆਪਣਾ ਗ੍ਰੰਥ ਜਾਂ ਪਾਠ ਇੱਥੇ ਪੇਸਟ ਕਰੋ (ਅਸੀਮਤ ਸ਼ਬਦ)...',
    autoCorrectBtn: 'ਪਾਠ ਸ਼ੁੱਧ ਅਤੇ ਸੁਚੱਜਾ ਕਰੋ',
    autoCorrectProcessing: 'ਸ਼ੁੱਧੀਕਰਨ ਪ੍ਰਕਿਰਿਆ ਚੱਲ ਰਹੀ ਹੈ, ਕਿਰਪਾ ਕਰਕੇ ਉਡੀਕ ਕਰੋ...',
    autoCorrectResultTitle: 'ਸ਼ੁੱਧ ਕੀਤਾ ਹੋਇਆ ਪਾਵਨ ਪਾਠ',
    autoCorrectCopyBtn: 'ਸ਼ੁੱਧ ਪਾਠ ਕਾਪੀ ਕਰੋ',
    autoCorrectVaniBtn: 'ਬਾਣੀ ਸ਼ੁੱਧ ਕਰੋ (Doha/Sakhi)',
    autoCorrectVaniDesc: 'ਇਹ ਵਿਕਲਪ ਵਿਸ਼ੇਸ਼ ਤੌਰ ਤੇ ਦੋਹਿਆਂ ਅਤੇ ਸਾਖੀਆਂ ਦੀਆਂ ਮਾਤਰਾਵਾਂ ਅਤੇ ਸ਼ਬਦਾਂ ਨੂੰ ਸ਼ੁੱਧ ਕਰਨ ਲਈ ਹੈ।',
    autoCorrectDiaryBtn: 'ਲਿਖਤ ਸ਼ੁੱਧ ਕਰੋ',
  },

  en: {
    appName: 'Saheb World',
    appSubtitle: 'Sacred Swadhyay',
    sacredTop: SACRED_BRANDING.header.en,
    sacredBottom: SACRED_BRANDING.footer.en,

    tabDailySakhi: 'Daily Pawan Sakhi',
    tabStepsFormula: '5-Step Swadhyay',
    tabGranthaSangrah: 'Sacred Scripture',
    tabQuiz: 'Spiritual Quiz',
    tabAkhandPath: 'Akhand Path',
    tabDiary: 'Reflection Diary',
    tabSettings: 'Dhun',
    tabAutoCorrect: 'Auto-Correct',
    kabirSagarBrahmandDarshan: 'Kabir Sagar Cosmology',
    treeNodeLabel: 'Tree Node',
    realmNature: 'Nature of Realm',
    soulInternalState: '🕊️ Soul\'s Internal State',
    kabirSagarProof: '📜 Kabir Sagar Proof Verse:',
    liberationKey: 'Liberation Key:',
    universeHierarchyTree: 'Cosmological Hierarchy Sunburst & Tree (ECharts)',
    ascensionTreeNodes: 'Ascension Tree Nodes (Click to Inspect)',
    kabirSagarMahavakya: 'Kabir Sagar (Anurag Sagar) Sacred Quote',

    dailyTitle: 'Daily Pawan Sakhi Swadhyay',
    dailySubtitle: 'Begin each sacred day immersed in the eternal wisdom of Satguru Kabir Saheb',
    swadhyayDate: "Today's Sacred Date",
    startSwadhyayBtn: 'Begin Deep Swadhyay',
    takeDailyQuizBtn: 'Play Sakhi Quiz',
    listenDhunBtn: 'Listen Satyanaam Dhun',
    shareSakhiBtn: 'Share Sacred Sakhi',
    bookmarkBtn: 'Save to Memory',
    savedToBookmarks: 'Sakhi preserved in your spiritual memory!',

    stepsHeaderTitle: 'Satguru Sakhi Swadhyay Formula',
    stepsHeaderDesc: 'The traditional 5-step contemplation methodology to unlock the mystic core',
    step1Title: 'Step 1: Sacred Recitation (Mool Path)',
    step1Subtitle: 'Reverent recitation and inward meditative listening to the original couplet',
    step2Title: 'Step 2: Word Breakdown & Meaning (Bhavarth)',
    step2Subtitle: 'Esoteric spiritual meaning and line-by-line revelation',
    step3Title: 'Step 3: Contemplation & Inquiry (Manan & Chintan)',
    step3Subtitle: 'Inner self-inquiry questions directed to the soul',
    step4Title: 'Step 4: Daily Application (Jeevan Upayog)',
    step4Subtitle: 'Translating truth into conscious speech, ethics, and daily living',
    step5Title: 'Step 5: Devotional Surrender (Samarpan & Prarthana)',
    step5Subtitle: 'Gratitude, humility, and surrender at the lotus feet of Satguru',

    wordMeaningsTitle: 'Word-by-Word Esoteric Meaning',
    contemplationPromptTitle: "Today's Self-Inquiry Question",
    practicalActionTitle: 'How to Practice in Real Life Today',
    samarpanPrayerTitle: 'Satguru Surrender Prayer',
    prevStepBtn: 'Previous Step',
    nextStepBtn: 'Next Step',
    completeSwadhyayBtn: 'Complete Swadhyay & Receive Blessing',
    swadhyayCompletedCelebration: 'Bandagi! You have dedicatedly completed your sacred Swadhyay.',

    allGranthas: 'All Sacred Collections',
    filterByCategory: 'Filter by Section / Ang',
    searchSakhiPlaceholder: 'Search sakhis, words, or meanings...',
    sakhisCount: 'Sacred Sakhis Available',
    readSakhiBtn: 'Study Sakhi',

    akhandPathTitle: 'Akhand Path Continuous Flow',
    akhandPathSubtitle: 'Continuous meditative stream of Satguru Kabir Saheb couplets',
    playRecitation: 'Start Continuous Recitation',
    pauseRecitation: 'Pause Recitation',
    readingSpeed: 'Pacing Speed',
    autoScrollLabel: 'Auto-Advance & Auto-Scroll',
    activeCouplet: 'Currently Reciting',

    quizTitle: 'Sacred Sakhi Wisdom Quiz',
    quizSubtitle: 'Interactive 5-question gamified inquiry to test spiritual understanding',
    questionNumber: 'Question',
    ofTotal: 'of',
    scoreLabel: 'Wisdom Score',
    selectOptionPrompt: 'Select the true spiritual answer to confirm your understanding:',
    submitAnswerBtn: 'Verify Answer',
    nextQuestionBtn: 'Next Question',
    quizCompletedTitle: 'Quiz Completed!',
    quizCompletedDesc: 'You have deeply contemplated the mystical truths within the Sakhi.',
    divineBlessingEarned: 'Satguru Kabir Saheb Divine Blessing Bestowed!',
    retakeQuizBtn: 'Play Again',
    claimBlessingBtn: 'Receive Divine Blessing & Rose Petal Shower',
    correctAnswerText: 'Satyanaam! Correct Insight.',
    explanationTitle: 'Spiritual Explanation',

    blessingModalTitle: 'Satguru Kabir Saheb Divine Blessing',
    blessingModalSubtitle: 'Eternal grace and tranquility bestowed upon the seeking soul',
    blessingQuote: 'Jako Rakhe Saiyan Mari Na Sakai Koy. Baal Na Baka Kari Sakai Jo Jag Bairi Hoy..',
    blessingText: "May the boundless grace of Satguru Kabir Saheb forever guide your consciousness. May your path be filled with the sacred light of Satyanaam, pure love, and spiritual discrimination.",
    rosePetalShowerText: '|| Sacred Rose Petal Shower (Varsha) ||',
    triggerPetalsBtn: 'Shower Rose Petals',
    closeBtn: 'Close',

    diaryTitle: 'Personal Spiritual Diary',
    diarySubtitle: 'Reflections, inner realizations, and notes from your Swadhyay',
    addReflectionPrompt: 'What deep realization arose from this sakhi? Write your heart feelings...',
    saveReflectionBtn: 'Save Reflection',
    reflectionSavedToast: 'Your realization has been saved in your personal diary.',
    noReflectionsYet: 'No personal reflections saved yet. Read today’s sakhi and write your contemplative notes.',
    deleteEntry: 'Delete',
    exportDiaryBtn: 'Share / Export Diary',
    newReflectionBtn: 'New Reflection',
    addNewReflectionTitle: 'Record New Spiritual Insight',
    categoryLabel: 'Reflection Category:',
    sakhiNumberOptional: 'Related Sakhi Number (Optional):',
    yourReflectionLabel: 'Your Inner Spiritual Contemplation:',
    diaryTags: ['Truth', 'Love', 'Surrender', 'Wisdom', 'Peace', 'Self-Reflection'],
    defaultCategory: 'Contemplation',
    exportLabel: 'Export',

    dhunTitle: 'Satyanaam Sacred Dhun',
    dhunDesc: 'Serene Swarmandal, celestial Veena & pure Satyanaam chanting simran (strictly Satyanaam, Satlok tradition)',
    dhunPlay: 'Play Satyanaam Dhun',
    dhunPause: 'Pause Dhun',
    volumeLabel: 'Volume',
    droneHarmonics: 'Swarmandal Waves',
    chimeRing: 'Sacred Satyanaam Chime',

    settingsTitle: 'Spiritual Preferences',
    appearanceTheme: 'Reading Canvas Theme',
    themeBhojpatra: 'Bhojpatra (Traditional Cream / Sepia)',
    themeAmritNeel: 'Amrit Neel (Night Study / Dark)',
    themeSwarnaShanti: 'Swarna Shanti (Golden Amber)',
    nityaVaniReminder: 'Daily Nitya Vani Reminder',
    reminderTime: 'Amritvela Reminder Time',
    notificationsEnabledMsg: 'Daily Nitya Vani reminder has been scheduled.',
    notificationsBlockedMsg: 'Please allow notifications in your browser settings.',
    fontSizeLabel: 'Text Reading Size',
    sizeSmall: 'Compact',
    sizeMedium: 'Standard',
    sizeLarge: 'Large (Spacious)',

    installAppTitle: 'Install Saheb World PWA',
    installAppDesc: 'Install to your mobile device or desktop for seamless uninterrupted offline study.',
    installBtn: 'Install App (PWA)',
    installedBadge: 'App is Installed',
    offlineBanner: 'Offline Mode Active — Sacred teachings are cached and fully readable.',
    onlineBanner: 'Connected Online',

    shareCopiedToast: 'Sacred Sakhi & commentary copied to clipboard!',

    appTitle: 'Saheb World',
    allSakhisTitle: 'Sacred Scripture Explorer',
    studyMethodologyTitle: '5-Step Swadhyay',
    chooseLanguageTitle: 'Language Selection',
    chooseThemeTitle: 'Reading Canvas Theme',
    readingModeTitle: 'Reading Layout & Style',
    lineSpacingTitle: 'Line Spacing',
    widthModeTitle: 'Page Width',
    widthNarrow: 'Narrow',
    widthMedium: 'Balanced',
    widthWide: 'Wide',
    fontFamilyTitle: 'Typography Style',
    fontDevotionalSerif: 'Devotional Serif',
    fontDevotionalSans: 'Clean Sans',
    fontSizeTitle: 'Text Reading Size',
    fontSmall: 'Compact',
    fontMedium: 'Standard',
    fontLarge: 'Spacious',
    sahajModeTitle: 'Sahaj Mode (Tranquil Simplicity)',
    sahajModeSubtitle: 'Focus purely on Daily Pawan Sakhi & Meditation Timer',
    sahajModeBadge: '|| Sahaj Mode ||',
    sahajModeActive: 'Sahaj Mode is Active',
    sahajModeEnabledDesc: 'Advanced tools are hidden to provide a distraction-free sanctuary focused on Daily Sakhi and Meditation.',
    sahajModeDisabledDesc: 'All advanced tools (Nitnem Gutka, Granthavali, Akhand Path, Quiz, etc.) are currently visible.',
    sahajModeFocusNotice: 'Sahaj Mode Active: Sanctuary is simplified. You can toggle anytime in Settings.',
    openMeditationTimerBtn: 'Meditation Timer',
    openDailySakhiBtn: 'Daily Pawan Sakhi',
    dhunPlayerTitle: 'Satyaanaam Sacred Dhun Loop',
    dhunDescription: 'Serene Swarmandal, celestial Veena & pure Satyaanaam chanting simran (strictly Satyaanaam, Satlok tradition)',
    vocalChantTitle: 'Satyanaam Vocal Simran Loop',
    vocalChantDesc: 'Peaceful vocal repetition of Satyanaam in sacred cadence',
    notificationReminderTitle: 'Daily Nitya Vani Reminder',
    notificationReminderDesc: 'Receive daily contemplative reminders at Amritvela',
    testNotificationBtn: 'Test Alert',
    noEntriesYet: 'No reflections saved yet. Contemplate today’s sakhi and record your thoughts.',
    divineDarshanTitle: 'Satguru Kabir Saheb Divine Sacred Darshan',
    divineDarshanSubtitle: 'Seated upon the celestial lotus with radiant halo, blessing hand & divine aura',
    offerFlowersBtn: 'Offer Flowers & Pranam',
    viewFullDarshanBtn: 'Divine Full Darshan',
    darshanBlessingText: 'Infinite reverence at the holy lotus feet of Satguru Kabir Saheb. May the eternal light of Satyanaam forever illuminate your consciousness.',
    pranamMantra: '|| Saheb Bandagi Saheb Dayal ||',
    uploadPortraitBtn: 'Upload Authentic Portrait',
    resetPortraitBtn: 'Reset to Default Swaroop',
    customPortraitActive: 'Authentic Traditional Portrait Active',
    tilakAuthenticityNote: 'Traditional Kabir Panthi Tilak: Sacred white vertical mark (urdhva pundra) from forehead down the nose',
    uploadPortraitHelp: 'If you wish to display your exact authentic temple or ashram portrait (such as kabir-saheb-wallpaper.jpg), upload it here.',
    portraitUpdatedSuccess: 'Authentic portrait successfully updated and saved!',
    uploadChangeImageBtn: 'Upload / Change Image',
    uploadAuthenticPortraitTitle: 'Upload Authentic Portrait of Satguru Kabir Saheb',
    uploadAuthenticPortraitDesc: 'Upload your authentic temple or ashram portrait featuring the traditional white vertical tilak (shwet urdhva pundra) directly here.',
    dragDropOrBrowse: 'Drag & drop image here or click to browse',
    removePortraitBtn: 'Remove Image',
    shwetTilakBadge: 'Bandichhor Satguru Kabir Saheb',
    noImageUploadedYet: 'Upload your authentic portrait for divine darshan',
    satguruMahimaTitle: '|| Satguru Mahima ||',
    vaniPathBtn: 'Vani Path',
    vaniVandanaLabel: 'Vani Vandana',
    darshanHeaderTitle: 'Satguru Kabir Saheb Sacred Darshan',
    tilakAuthenticityDetail: 'According to traditional Kabir Panthi belief, Satguru Kabir Saheb is adorned with a sacred white vertical mark (Urdhva Pundra) from the forehead down the nose. You can upload an authentic portrait from your ashram or temple directly here.',
    guruGodCouplet: '"Guru and God both stand before me; to whom shall I bow first? All glory to my Satguru, who revealed God unto me."',
    stopRecitationBtn: 'Stop',
    listenBtn: 'Listen',
    blessingBtn: 'Blessing',
    todaySakhiVani: '|| Today’s Sacred Sakhi Vani ||',
    divineBhavarthLabel: '|| Divine Meaning ||',
    reflectionPlaceholder: 'Write your sacred reflections here...',
    cancelBtn: 'Cancel',
    addDiaryEntryBtn: 'Add personal reflection to diary',
    akhandPathFeatureTitle: 'Akhand Path & Auto-Scroll',
    akhandPathFeatureDesc: 'Use smooth pixel scrolling & speed control for hands-free recitation.',
    startBtn: 'Start',
    swadhyayBlessingTitle: 'Swadhyay Accomplishment Blessing',
    swadhyayBlessingMsg: 'You have completed the contemplation, reflection, and dedication of Satguru Kabir Saheb’s sacred Vani. Saheb Bandagi Saheb!',
    quizBlessingTitle: 'Quiz Success Blessing',
    quizBlessingMsg: 'Your progress in understanding truth, wisdom, and Satguru Mahima is commendable. May Satguru Kabir Saheb’s grace always be with you!',
    akhandPathBlessingTitle: 'Akhand Path Completion Blessing',
    akhandPathBlessingMsg: 'You have performed the continuous listening and recitation of Satguru Kabir Saheb’s sacred words. The path to the Eternal Realm is simplified through sincere devotion.',
    footerDescription: 'Dedicated to the sacred study and practice based on the immortal words of Satguru Kabir Saheb (Sakhi Sangrah, Kabir Sagar, Bijak).\n||Saheb Bandagi Saheb||',
    pwaTag: 'Saheb World PWA • Offline Swadhyay',
    themeLanguageSettings: 'Theme & Language Settings',
    moolPawanSakhiHeader: '|| Mool Pawan Sakhi Vani ||',
    bandichhorLabel: 'Bandichhor Satguru Kabir Saheb',
    designerTitle: 'Sakhi Message Card Designer',
    themeStyleLabel: 'Card Theme Style:',
    downloadLangLabel: 'Download Language:',
    aspectRatioLabel: 'Card Aspect Ratio:',
    squareRatioLabel: 'Square (1:1)',
    storyRatioLabel: 'Story (9:16)',
    cancelLabel: 'Cancel',
    downloadBtn: 'Download Now',
    lowLabel: 'Low',
    highLabel: 'High',
    onStatus: 'Active (ON)',
    offStatus: 'Quiet (OFF)',
    tripleChimeLabel: "✨ 'Satya-Naam' Sacred Chime",
    sacredBellLabel: '🔔 Sacred Bell',
    amritvelaLabel: '(Amritvela 05:00 AM)',
    sentStatus: '✓ Sent',
    pwaTitleLabel: 'Saheb World - Satyanaam Swadhyay PWA',
    pwaDescLabel: '100% Offline Enabled • Sacred practice based on Sakhi Sangrah, Kabir Sagar, and Bijak',
    notificationPermissionError: 'Please grant notification permission in your browser.',
    notificationNotSupportedError: 'Notifications are not supported in this browser.',
    speedSlow: 'Slow',
    speedNormal: 'Normal',
    speedFast: 'Fast',
    bhavarthLabel: 'Meaning:',
    // Saheb Jantri (Calendar)
    jantriTitle: 'Saheb Jantri',
    jantriSubtitle: 'Sacred Dates & Festivals',
    purnimaLabel: 'Purnima',
    amavasyaLabel: 'Amavasya',
    sangrandLabel: 'Sangrand',
    kabirJayantiLabel: 'Satguru Kabir Saheb Jayanti',
    kabirNirvanLabel: 'Satguru Kabir Saheb Nirvana Day',
    guruJayantiLabel: 'Guru Jayanti',
    magharUtsavLabel: 'Maghar Sacred Festival',
    satnamSalutation: '🌹||Satyanaam||🌹',
    sahebBangiSalutation: '|| Saheb Bandagi Saheb || 🙏',
    monthlyGridTitle: 'Annual Saheb Jantri 2026',
    // Mantra Tracker
    mantraTrackerTitle: 'Satyanaam Mantra Tracker',
    mantraTrackerSubtitle: 'Daily Simran & Mala Counts',
    dailyGoalLabel: 'Daily Goal (Malas)',
    totalCountsLabel: 'Total Counts (Jap)',
    currentMalaLabel: 'Current Mala',
    logMalaBtn: 'Log Mala',
    resetProgressBtn: 'Reset Progress',
    mantraHistoryTitle: 'Simran History',

    // Audio Library
    audioLibraryTitle: 'Amar Vani Audio Library',
    audioLibrarySubtitle: 'Sacred Words & Satsangs',
    playSatsangBtn: 'Play Satsang',
    granthAudioLabel: 'Grantha Recital',
    bhajanAudioLabel: 'Sacred Bhajans',
    playingNowLabel: 'Now Playing:',

    // Universe Map (Brahmand Darshan)
    tabUniverseMap: 'Universe Map (Creation & Realms)',
    universeMapTitle: 'Universe & Amarlok Darshan (Universe Map)',
    universeMapSubtitle: '🌟 Live Universe Map - Detailed Realm Descriptions',
    universeLevels: [
      {
        id: 1,
        title: 'Anami Lok (Akah Lok)',
        entity: 'Anami Purush (Highest form of Satpurush Kabir Saheb)',
        frequency: '963 Hz',
        description: 'The supreme, eternal, and indescribable abode where there is no form or line, only the unbroken divine light of supreme consciousness. All divine realms expand from here.',
        vani: '"Anami Purush ki ajab kahani. Jahan na suraj chand na paani. Koti bhanu sam ek-ek loma. Aisa Amar Dham Nishkama."',
      },
      {
        id: 2,
        title: 'Agam & Alakh Lok',
        entity: 'Agam Purush & Alakh Purush (Sacred expansion of Kabir Saheb)',
        frequency: '852 Hz',
        description: 'Two extremely sacred spiritual spheres located above Amarlok and below Anami Lok, where the subtle and sweet resonance of the Word (Shabd) echoes.',
        vani: '"Alakh Agam ki mahima bhari, jahan surat pahunche nirvikari. Satguru kripa se panth lakhave, hans Amar Pad sahaj samave."',
      },
      {
        id: 3,
        title: 'Amarlok / Satlok (Sachkhand)',
        entity: 'Satpurush Kabir Saheb (God)',
        frequency: '741 Hz',
        description: "The eternal home of Hans souls described in Kabir Sagar. Here lies the Mansarovar of nectar, the immortal Kalpavriksha, Hans souls picking pearls, and an unbroken rain of joys. No soul ever feels distressed here.",
        vani: '"Amar Lok ik desh hamara, jahan na kaal ka sanchara. Hans karahin amrit aahara, Sohang Shabd ki dhaar apara."',
      },
      {
        id: 4,
        title: 'Bhanwar Gupha (Celestial Border)',
        entity: 'Sohang Purush (Maha Chetan)',
        frequency: '639 Hz',
        description: "The vast celestial space between Amarlok and the 21 universes of Kaal. Entrance of Kaal is forbidden here, and the sacred 'Anhad' flute melody resonates throughout.",
        vani: '"Bhanwar Gupha mein murli baaje, Sohang Shabd tahan par gaaje. Hansan ki gati ati sukhdai, Satguru kripa se lakhi jai."',
      },
      {
        id: 5,
        title: 'Maha-Sunn (Celestial Great Void)',
        entity: 'Akshar Purush (Unmanifest Brahm)',
        frequency: '528 Hz',
        description: "A 5-billion-yojan wide great void separating Amarlok and the realms of Kaal. Here, the power of Kaal becomes zero. Only the light of the Satguru's Satyanaam can guide a soul across this void.",
        vani: '"Maha Sunn ka panth vikara, bin Satguru koi na paye para. Satyanaam ki nauka bhari, hans paar utre sukhkari."',
      },
      {
        id: 6,
        title: 'Trikuti (Brahm Lok / Omkar Dham)',
        entity: 'Kaal Brahm (Kshar Purush / Jyoti Niranjan)',
        frequency: '396 Hz',
        description: "The red sky where the Omkar sound resonates, and the sounds of Mridang and drums are heard. This is the primary realm of Kshar Brahm, controlling mind and Maya.",
        vani: '"Trikuti mahal mein baadal garje, laal gagan vich surat biraje. Omkar Shabd ki dhun bhari, Kaal Purush ki had vistari."',
      },
      {
        id: 7,
        title: 'Sahastradal Kamal (Aand Universe / Jyoti Lok)',
        entity: 'Subtle form of Jyoti Niranjan (Kaal)',
        frequency: '288 Hz',
        description: 'A thousand-petaled radiant lotus where a great light, like millions of lamps, burns. The Anhad sounds of the bell and conch echo here.',
        vani: '"Sahastra kawal dal jyoti prakashi, Niranjan baitha ghat aavasi. Ghanta shankh baje shehnai, sadhu surat tahan thahrai."',
      },
      {
        id: 8,
        title: '21 Universes & Three Realms',
        entity: 'Brahma (Rajogun), Vishnu (Satogun), Shiva (Tamogun)',
        frequency: '192 Hz',
        description: 'The physical and divine realms where the cycle of 8.4 million life forms exists. Heaven for enjoying merits, Earth for karma, and Netherworld for degradation. Every soul is subject to birth and death under Kaal and Karma.',
        vani: '"Teen lok sanshay mein beete, kaal bali sabhi ko jeete. Kabir Saheb kahe pukari, Satyanaam bhaj utro paari."',
      },
      {
        id: 9,
        title: 'Pind Darshan (Universe within the Body)',
        entity: 'Surat (Soul / Consciousness)',
        frequency: '144 Hz',
        description: '"What is in the universe is in the body." Satguru Kabir Saheb explained that everything in the outer realms exists within the human body in the form of chakras and gateways.',
        vani: '"Jo brahmande soi pinde, jo khoje so paave. Ghat hi mein Saheb ghat hi mein Amarlok, surat shabd thahrave."',
      },
    ],
    vaniLabel: 'Vani Proof:',
    entityLabel: 'Ruler / Form:',
    frequencyLabel: 'Sound Frequency:',
    elementDetailsTitle: 'Detailed Realm Descriptions',
    elementDetailsDesc: 'Subtle details of the creation of each realm, the joys found there, and its ruler according to Kabir Sagar.',
    creationSecretTitle: 'The Core Secret of Creation',
    creationSecretDesc: 'The real understanding of the origin of the universe and the trap of Kaal-Purush existing since eternity.',
    suratShabdYogaTitle: 'Surat-Shabd Yoga Practice',
    suratShabdYogaDesc: 'The ancient Vihangam path of traveling to Amarlok by catching the resonance of the Word within.',
    elementDetailsFull: 'According to Kabir Sagar, our universe is a complex mix of various elements and realms. The world of death (Earth) is made of five gross elements (Earth, Water, Fire, Air, Ether). Above this, heavens and other celestial realms are composed of subtle elements. However, "Amarlok" (Satlok) is beyond these perishable elements. Its core element is "Nur" (Supreme Divine Light) which is never destroyed. There is no old age, no sorrow, and no death there. Each realm has its own ruler and laws, which saints have detailed in their sacred hymns.',
    creationSecretFull: 'Creation originated from the Eternal Being (Anami Purush). First, the Anami Purush manifested Satpurush through His power. Satpurush then created other sons, one of whom was "Jyoti Niranjan" (Kaal Brahm). Due to Kaal Brahm\'s persistence and penance, he was granted 21 universes, but he deceived souls and trapped them in his web. Kabir Saheb Himself came to reveal this secret—how Kaal-Purush has entangled us in the cycle of Maya (8.4 million species) and what the true path to salvation is.',
    suratShabdYogaFull: 'Surat-Shabd Yoga is the ancient method also known as the "Vihangam Path" (Bird\'s Path). It involves connecting the "Surat" (the soul\'s focused attention) with the "Shabd" (the core Word or unstruck sound provided by the Guru). Just as a kite flies in the sky supported by a string, the soul catches the resonance of the Word to transcend the realms of Kaal and reach Amarlok. This practice is only possible under the guidance of a Complete Satguru, who provides the recognition of the divine sound and the method to grasp it.',
    universeMapQuote: '"Where there is no sun, moon, or water, the wondrous tale of the Anami Purush unfolds."',
    listenFrequencyBtn: 'Listen to Frequency',
    stopFrequencyBtn: 'Stop Sound',
    startJourneyBtn: 'Start Soul Journey (Surat Yatra)',
    stopJourneyBtn: 'Stop Journey',
    journeyDesc: 'Soul traveling from Pind (Body) to Anami Lok',
    accordingToKabirSagar: 'According to Kabir Sagar',
    tabHealthDiagnostic: 'App Health',
    healthDiagnosticTitle: 'System Diagnostic',
    connectionStatus: 'Connection Status',
    onlineLabel: 'Online (Active)',
    offlineLabel: 'Offline (No Connection)',
    appIntegrity: 'App Integrity',
    integrityHealthy: 'Healthy',
    audioEngineStatus: 'Audio Engine Status',
    audioActive: 'Active',
    audioSuspended: 'Suspended',
    sidebarTitle: 'Saheb World',
    sidebarFooter: 'Satguru Kabir Saheb Swadhyay',
    openSidebar: 'Open Menu',
    closeSidebar: 'Close Menu',
    healthDiagnosticSubtitle: 'Real-time system integrity and connectivity status of the Saheb World spiritual application.',
    appVersionLabel: 'App Version',
    appVersionValue: 'v2.4.0 (Satguru Kripa Edition)',
    localStorageLabel: 'Local Storage',
    localStorageUsed: 'used',
    lastCheckLabel: 'Last Check',
    localEnvTitle: 'Local Environment Insight',
    localEnvDesc: 'This application is running as a **Progressive Web App (PWA)** within your browser environment. All your spiritual notes, mantra counts, and reading progress are stored securely in your browser\'s local storage for offline access.',
    platformLabel: 'Platform',
    themeLabel: 'Theme',
    languageLabel: 'Language',
    refreshBtn: 'Refresh Diagnostics',
    tabDeepSearch: 'Deep Search',
    tabMeditationTimer: 'Meditation Timer',
    tabCommunityBoard: 'Community Board',
    searchPlaceholder: 'Search Sakhis or words...',
    searchBtn: 'Search',
    searchResults: 'Search Results',
    noResults: 'No results found.',
    meditationTimerTitle: 'Deep Sumiran Timer',
    meditationSilence: 'Silence',
    meditationReady: 'Ready',
    deepSumiran: 'Deep Sumiran',
    startMeditation: 'Start Meditation',
    stopMeditation: 'Stop Meditation',
    selectAmbientSound: 'Ambient Sound',
    natureSound: 'Nature (Wind)',
    fluteSound: 'Divine Flute',
    beenSound: 'Sacred Been',
    satyanaamDhunSound: 'Satyanaam Dhun',
    communityBoardTitle: 'Seekers Community Board',
    communityBoardDesc: 'Share your spiritual realizations with the global community',
    shareAnonymously: 'Share Anonymously',
    postEntry: 'Post Realization',
    signInToJoin: 'Sign in to join the community',
    signInDesc: 'Connect with your Google account to share your realizations anonymously.',
    continueWithGoogle: 'Continue with Google',
    communityLiveMsg: 'The Community Board is now live! Your posts are shared with the world community of seekers securely through Firestore.',
    deepSearchEngine: 'Deep Search Engine',
    deepSearchDesc: 'Search across Kabir Sagar, Sakhi Sangrah, and Bijak databases using any word, concept, or verse number.',
    exploreByGrantha: 'Explore by Grantha',
    exploreByGranthaDesc: 'Search specifically within Kabir Sagar or Bijak.',
    topicSearch: 'Topic Search',
    topicSearchDesc: "Search by topics like 'Guru', 'Maya', or 'Prem'.",
    syncSettingsDesc: 'Sign in to sync your notification preferences across devices.',
    saveSettingsBtn: 'Save',
    statusLabel: 'Status',
    goalAchieved: 'Goal Achieved',
    inProgress: 'In Progress',
    malasLabel: 'Malas',
    noSimranSessions: 'No simran sessions logged yet.',
    simranGoalReached: 'Goal Reached',
    simranGoalPending: 'In Progress',
    dainikChintan: 'Daily Reflection',
    vishaySandharb: 'Subject Context',
    shabadarthLabel: 'Word Meaning',
    nityaVaniTitle: 'Daily Sacred Vani',
    nityaVaniDesc: 'Enable notifications to receive a sacred Sakhi every morning.',
    enableNotifications: 'Enable Notifications',
    notificationTime: 'Notification Time',
    notificationPermissionDenied: 'Notification permission denied. Please enable it in browser settings.',
    tabKabiraKatha: 'Kabirji Katha',
    kathaTitle: 'Sri Kabirji Ki Katha (Verse & Interpretation)',
    kathaSubtitle: 'The divine life and history — line-by-line detailed interpretations with "Hide/Show" (Chupao) feature',
    toggleExplanation: 'Hide / Show Explanation & Meaning',
    hideText: 'Hidden (Chupao Active)',
    showText: 'View Explanation',
    openInNewTab: 'Open in Full Tab',
    settingsSavedSuccess: 'Saved successfully!',
    inAppReminderActive: 'In-App Sacred Sakhi Reminder is Active',
    pushNoticeIframe: 'System push notifications may be restricted in browser previews. Please open in a full window or install as PWA for native notifications.',
    kathaAkhandScrollMode: 'Akhand Path Auto-Scroll',
    kathaAkhandScrollActive: 'Akhand Path Flow Active',
    kathaAkhandScrollPause: 'Pause Scroll',
    kathaAkhandScrollResume: 'Resume Scroll',
    kathaAkhandScrollSpeed: 'Scroll Speed',
    kathaAkhandCompleted: 'Satyanaam! Sri Kabir Katha Akhand Path recitation concluded.',
    fontSerifLabel: 'Serif (Traditional)',
    fontSansLabel: 'Sans-Serif (Modern)',
    scrollToTop: 'Scroll to Top',
    scrollToBottom: 'Scroll to Bottom',
    spiritualEssenceLabel: 'Spiritual Essence / Secret:',
    shabdarthLabel: 'Word Meanings:',
    themeBanyanGhat: '🌳 Banyan Ghat',
    themeMagharDham: '🌄 Maghar Dham',
    themeRoyal: 'Royal',
    themeSaffron: 'Saffron',
    themeEmerald: 'Emerald',
    themeOled: 'OLED',
    themeDawn: '⛰️ Dawn',
    themeForest: '🌿 Forest',
    themeSunset: '🌅 Sunset',
    themeRiver: '🌊 River',
    themeAutumn: '🍁 Autumn',
    languageSelect: 'Select Language',
    selectChapterLabel: 'Select Chapter:',
    totalGranthsAvailable: 'Total 7 Sacred Granths Available',
    chaptersCountLabel: 'Chapters',
    swadhyayHoursLabel: 'Study Hours',
    mangalTypeLabel: 'Invocation',
    chaupaiTypeLabel: 'Chaupai',
    sorthaTypeLabel: 'Sortha',
    sakhiTypeLabel: 'Sakhi',
    dohaTypeLabel: 'Doha',
    shabadTypeLabel: 'Shabad / Verse',
    ramainiTypeLabel: 'Ramaini',
    prevChapterLabel: 'Previous Chapter',
    nextChapterLabel: 'Next Chapter',
    themeMool: 'Classic',
    themePothi: 'Pothi',
    themeBlack: 'Dark',
    themeNetra: 'Eye-Safe',
    fontLabel: 'Font:',
    targetLabel: 'Target:',
    bhavarthShabdarthToggleLabel: 'Exposition/Meanings:',
    lineGuideLabel: 'Line Guide',
    dhunMute: 'Mute',
    dhunTanpura: 'Tanpura',
    dhunFlute: 'Flute',
    dhunSatyanaam: 'Satyanaam Dhun',
    zenFocusLabel: 'Zen Focus',
    normalModeLabel: 'Normal Mode',
    autoScrollSpeedLabel: 'Speed:',
    pageFlipModeLabel: '📖 3D Pothi Reading Mode',
    continuousModeLabel: 'Continuous View',
    pageLabel: 'Page',
    readingGuideInfoTitle: 'Sacred Scripture Reading Features & Styles',
    masterLibraryTitle: 'Master Kabir Granth Library & Katha Repository',
    searchVersePlaceholder: 'Search verse or meaning...',
    autoCorrectTitle: 'Auto-Correct',
    autoCorrectDesc: 'Paste your handwritten or typed sacred text here. AI technology will purify, correct, and organize it beautifully.',
    autoCorrectPlaceholder: 'Paste your text or granth here (unlimited characters)...',
    autoCorrectBtn: 'Purify & Correct Text',
    autoCorrectProcessing: 'Purification in progress, please wait...',
    autoCorrectResultTitle: 'Purified Sacred Text',
    autoCorrectCopyBtn: 'Copy Purified Text',
    autoCorrectVaniBtn: 'Correct Vani (Doha/Sakhi)',
    autoCorrectVaniDesc: 'Optimized for spiritual verses, maintaining rhythm and sacred phonetic structure.',
    autoCorrectDiaryBtn: 'Auto-Correct Note',
  },
};

export function getVerseTypeLabel(type: string, id: number | string, lang: Language): string {
  const typeMap: Record<string, Record<Language, string>> = {
    vandana: { hi: 'वंदना', pb: 'ਵੰਦਨਾ', en: 'Salutation' },
    mangal: { hi: 'मंगलाचरण', pb: 'ਮੰਗਲਾਚਰਨ', en: 'Mangalacharan' },
    mangalacharan: { hi: 'मंगलाचरण', pb: 'ਮੰਗਲਾਚਰਨ', en: 'Mangalacharan' },
    sortha: { hi: 'सोरठा', pb: 'ਸੋਰਠਾ', en: 'Sortha' },
    chaupai: { hi: 'चौपाई', pb: 'ਚੌਪਈ', en: 'Chaupai' },
    sakhi: { hi: 'साखी', pb: 'ਸਾਖੀ', en: 'Sakhi' },
    doha: { hi: 'दोहा', pb: 'ਦੋਹਾ', en: 'Doha' },
    shabad: { hi: 'शब्द / पद', pb: 'ਸ਼ਬਦ / ਪਦ', en: 'Shabad / Verse' },
    pada: { hi: 'पद', pb: 'ਪਦ', en: 'Pada' },
    ramaini: { hi: 'रमैनी', pb: 'ਰਮੈਨੀ', en: 'Ramaini' },
    chhand: { hi: 'छंद', pb: 'ਛੰਦ', en: 'Chhand' },
    ulatbaasi: { hi: 'उलटबांसी', pb: 'ਉਲਟਬਾਂਸੀ', en: 'Ulatbaasi' },
    katha: { hi: 'कथा प्रसङ्ग', pb: 'ਕਥਾ ਪ੍ਰਸੰਗ', en: 'Story Narrative' },
    aarti: { hi: 'आरती पद', pb: 'ਆਰਤੀ ਪਦ', en: 'Aarti Verse' },
  };

  // Dedicated handling for sacred Mangalacharan opening invocations (e.g. gm2-d1 'Mud Mangal Aagaar', prabhat-m-page-8)
  const idStr = String(id || '');
  if (
    id === 'gm2-d1' || 
    idStr.includes('mangalacharan') || 
    idStr.includes('m-page-8') ||
    type === 'mangal' || 
    type === 'mangalacharan'
  ) {
    return lang === 'pb' ? 'ਮੰਗਲਾਚਰਨ' : lang === 'hi' ? 'मंगलाचरण' : 'Mangalacharan';
  }

  const translated = (typeMap[type]?.[lang] || typeMap[type]?.hi || type) as string;

  // For Kabir Chalisa specifically, or pure sacred salutations (वंदना / मंगल), display the pure sacred title without numbers
  if (type === 'vandana' || type === 'mangal' || type === 'mangalacharan' || (id && typeof id === 'string' && id.startsWith('kcv-'))) {
    return translated;
  }
  
  // Extract clean number from IDs (e.g., 'gm1-v1' -> '1', 'v12' -> '12', 'pv-v1' -> '1')
  let displayId: string | number | null = null;
  if (typeof id === 'string') {
    const numMatch = id.match(/\d+$/);
    if (numMatch) {
      displayId = numMatch[0];
    }
  } else if (typeof id === 'number') {
    displayId = id;
  }

  // If no number found, just return the translated type (useful for things like "Doha" without a number)
  if (displayId === null) {
    return translated;
  }

  if (lang === 'pb') {
    return `${translated} ${displayId}`;
  } else if (lang === 'en') {
    return `${translated} #${displayId}`;
  }
  return `${translated} ${displayId}`;
}

/**
 * Formats a localized shareable text for any Sakhi with exact sacred branding.
 */
export function formatSakhiShareText(
  sakhiText: string,
  bhavarth: string,
  contemplation: string,
  lang: Language,
  number?: number
): string {
  return buildStandardShareText({
    text: sakhiText,
    language: lang,
    sakhiNumber: number,
    meaning: bhavarth,
    lifeMessage: contemplation,
  });
}

export const GRANTHA_TRANSLATIONS: Record<string, Record<Language, string>> = {
  'Sakhi Sangrah': {
    hi: 'साखी संग्रह',
    pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ',
    en: 'Sakhi Sangrah',
  },
  'Kabir Sagar': {
    hi: 'कबीर सागर',
    pb: 'ਕਬੀਰ ਸਾਗਰ',
    en: 'Kabir Sagar',
  },
  'Bijak': {
    hi: 'बीजक',
    pb: 'ਬੀਜਕ',
    en: 'Bijak',
  },
  'Anurag Sagar': {
    hi: 'अनुराग सागर',
    pb: 'ਅਨੁਰਾਗ ਸਾਗਰ',
    en: 'Anurag Sagar',
  },
  'Padavali': {
    hi: 'पदावली',
    pb: 'ਪਦਾਵਲੀ',
    en: 'Padavali',
  },
};

export function getLocalizedGranthaName(grantha: string | undefined | null, lang: Language): string {
  if (!grantha) return '';
  const match = GRANTHA_TRANSLATIONS[grantha];
  if (match && match[lang]) {
    return match[lang];
  }
  return grantha;
}
