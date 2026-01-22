import showcasesConfig from '../../apps/web/anarchy-legal.config.js';
import { ShowcasesDisplayName, ShowcasesSupportedPlatforms, ShowcasesSystemRequirements } from '../../packages/showcases-shared/src/Legal/ShowcasesLegalConstants.js';

//Commercial configuration for legal docs
export default {
  ...showcasesConfig,
  GENERIC: {
    ...showcasesConfig.GENERIC,
    messages: {
      ...showcasesConfig.GENERIC.messages,

      //The brand name of the product (registered trademark)
      PRODUCT_DISPLAY_NAME: ShowcasesDisplayName,

      SUPPORTED_PLATFORMS: ShowcasesSupportedPlatforms.Desktop,
      MIN_SYSTEM_REQUIREMENTS: ShowcasesSystemRequirements.Desktop.Minimum,
      REC_SYSTEM_REQUIREMENTS: ShowcasesSystemRequirements.Desktop.Recommended,
      CONFORMITY_SERIES: '1.x.x (pre-market, no placement)', //A range of versions (major version) that matches of package.json, which were published commercially
      BASELINE_VERSION: 'TBD until market release', //First CE-market release version
      BASELINE_EFFECTIVE_DATE: 'TBD until market release' //The date of the first CE-market release
    }
  }
};
