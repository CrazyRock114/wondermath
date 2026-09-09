/**
 * WonderMath Conjectures Database (100 Iconic Conjectures & Theorems)
 * Rich multi-tier K-12 curriculum, interactive configs, historical progression,
 * and Lean 4 formal code with full 8-language localization support.
 * Modularized across 6 mathematical domains in js/data/conjectures/.
 */

import {
  ALL_CONJECTURES_RAW,
  DOMAIN_NUMBER_THEORY,
  DOMAIN_GEOMETRY_TOPOLOGY,
  DOMAIN_GRAPH_COMBINATORICS,
  DOMAIN_ALGEBRA_ANALYSIS,
  DOMAIN_COMPUTER_SCIENCE,
  DOMAIN_PHYSICS_MILLENNIUM
} from "./conjectures/index_catalog.js";

export {
  DOMAIN_NUMBER_THEORY,
  DOMAIN_GEOMETRY_TOPOLOGY,
  DOMAIN_GRAPH_COMBINATORICS,
  DOMAIN_ALGEBRA_ANALYSIS,
  DOMAIN_COMPUTER_SCIENCE,
  DOMAIN_PHYSICS_MILLENNIUM
};

export const RAW_CONJECTURES = ALL_CONJECTURES_RAW;

/**
 * Helper to get conjectures with localized content for the active language,
 * falling back to English if a language isn't fully translated.
 */
export function getLocalizedConjectures(lang = "en") {
  return RAW_CONJECTURES.map(item => {
    const loc = (item.locales && item.locales[lang]) || (item.locales && item.locales.en) || {};
    const enLoc = (item.locales && item.locales.en) || {};

    return {
      id: item.id,
      icon: item.icon,
      difficulty: item.difficulty,
      domain: item.domain || "number-theory",
      category: item.category || "number-theory",
      isMillennium: !!item.isMillennium,
      isAIFrontier: !!item.isAIFrontier,
      simId: item.simId,
      leanCode: item.leanCode,
      name: loc.name || enLoc.name || item.id,
      subtitle: loc.subtitle || enLoc.subtitle || "",
      field: loc.field || enLoc.field || "",
      statusBadge: loc.statusBadge || enLoc.statusBadge || "",
      grades: loc.grades || enLoc.grades || {},
      history: loc.history || enLoc.history || []
    };
  });
}

/**
 * Helper to retrieve a single conjecture by ID with active language localization.
 */
export function getConjectureById(id, lang = "en") {
  const all = getLocalizedConjectures(lang);
  return all.find(c => c.id === id) || null;
}

export const CONJECTURES = getLocalizedConjectures("en");
