import { DatadogProvider } from '@datadog/openfeature-browser';
import { OpenFeature } from '@openfeature/web-sdk';

// Next few lines are what is meant by "initializing the SDK"
const env = 'production'

// Define the provider
const provider = new DatadogProvider({
    // Generated in the Datadog app, identifies which RUM app this belongs to
    // In this case, RUM app for personal website
    applicationId: '<REDACTED>', 
    // Generated in the Datadog app, authenticates request to Datadog organization (org 2)
    clientToken: '<REDACTED>', 
    enableExposureLogging: true, // Can impact RUM costs if enabled
    site: 'datadoghq.com',
    // Nothing to do with Datadog env, this is env of the personal-website instance
    env: env,
    // IDK what this is
    service: 'test',
    version: '1.0.0',
 });

// Set evaluation context with custom attributes.
// Reference these attributes in your targeting rules to control who sees each variant.
const evaluationContext = {
    targetingKey: '<SUBJECT KEY>',
    userId: '123',
    userName: 'Romoli Bakshi'
};

// Initialize the provider and wait until it's ready
await OpenFeature.setProviderAndWait(provider, evaluationContext);

// Update the name based on feature flag value
const updateName = async () => {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve));
    }
    
    const client = OpenFeature.getClient();
    const value = client.getBooleanValue('test-romoli2', false);
    console.log('Environment:', env);
    console.log('Feature flag value:', value);
    const nameElement = document.querySelector('.name');
    
    if (nameElement) {
        nameElement.textContent = value ? 'ROMOLI BAKSHI' : 'romoli bakshi';
    }
};

updateName();