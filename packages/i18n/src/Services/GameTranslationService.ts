import type { TTranslationService } from '@Anarchy/i18n';
import { TranslationService } from '@Anarchy/i18n';
import { InitialLocale, GameFallbackLocale } from '@I18N/Constants';
import { locales } from '@I18N/i18n';

export const gameTranslationService: TTranslationService = TranslationService(InitialLocale, GameFallbackLocale, locales);
