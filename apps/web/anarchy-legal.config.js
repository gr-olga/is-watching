import commercialBase from '../../configs/AnarchyLegal/anarchy-legal.base.commercial.config.js';
import { GameDisplayName, SoftwareFamilyName, SupportedPlatforms, GameSystemRequirements } from '../../packages/shared/src/Legal/GameLegalConstants.js';

//Commercial configuration for legal docs
export default {
  ...commercialBase,
  GENERIC: {
    ...commercialBase.GENERIC,
    messages: {
      ...commercialBase.GENERIC.messages,
      //The brand name of the product (registered trademark)
      PRODUCT_DISPLAY_NAME: GameDisplayName,
      IS_GAME: true,

      SUPPORTED_PLATFORMS: SupportedPlatforms.Web,
      MIN_SYSTEM_REQUIREMENTS: GameSystemRequirements.Web.Minimum,
      REC_SYSTEM_REQUIREMENTS: GameSystemRequirements.Web.Recommended,
      PRODUCT_MODEL_CODE: SoftwareFamilyName,
      CONFORMITY_SERIES: '1.x.x (pre-market, no placement)', //A range of versions (major version) that matches of package.json, which were published commercially
      BASELINE_VERSION: 'TBD until market release', //First CE-market release version
      BASELINE_EFFECTIVE_DATE: 'TBD until market release', //The date of the first CE-market release
      INITIAL_RELEASE_DATE: 'TBD until market release' //The date of the first release (at lest in EU)
    }
  }
};
