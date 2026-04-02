// Datadog RUM Configuration
window.DD_RUM && window.DD_RUM.init({
  clientToken: import.meta.env.VITE_DD_RUM_CLIENT_TOKEN,
  applicationId: import.meta.env.VITE_DD_RUM_APPLICATION_ID,
  site: 'us5.datadoghq.com',
  service: 'romoli-personal-website',
  env: 'staging',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  defaultPrivacyLevel: 'mask-user-input',
});

// Additional RUM context
window.DD_RUM && window.DD_RUM.setGlobalContextProperty('app_stage', 'developing locally');

window.DD_RUM && window.DD_RUM.setUser({
    id: '1',
    name: 'Romoli Bakshi',
    email: import.meta.env.VITE_USER_EMAIL,
});
