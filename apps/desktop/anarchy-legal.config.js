import gameConfig from '../../apps/web/anarchy-legal.config.js';
import { GameDisplayName, SupportedPlatforms, GameSystemRequirements } from '../../packages/shared/src/Legal/LegalConstants.js';

//Commercial configuration for legal docs
export default {
  ...gameConfig,
  GENERIC: {
    ...gameConfig.GENERIC,
    messages: {
      ...gameConfig.GENERIC.messages,

      //The brand name of the product (registered trademark)
      PRODUCT_DISPLAY_NAME: GameDisplayName,

      SUPPORTED_PLATFORMS: SupportedPlatforms.Desktop,
      MIN_SYSTEM_REQUIREMENTS: GameSystemRequirements.Desktop.Minimum,
      REC_SYSTEM_REQUIREMENTS: GameSystemRequirements.Desktop.Recommended,
      CONFORMITY_SERIES: '1.x.x (pre-market, no placement)', //A range of versions (major version) that matches of package.json, which were published commercially
      BASELINE_VERSION: 'TBD until market release', //First CE-market release version
      BASELINE_EFFECTIVE_DATE: 'TBD until market release' //The date of the first CE-market release
    }
  }
};
