/**
 * WonderMath - 100 Conjectures Unified Catalog Index
 * Aggregates all 6 mathematical domains:
 * 1. Number Theory & Prime Landscapes (1-30)
 * 2. Geometry, Topology & Tilings (31-50)
 * 3. Graph Theory & Combinatorics (51-68)
 * 4. Algebra, Analysis & Dynamical Systems (69-84)
 * 5. Theoretical Computer Science, Logic & Complexity (85-94)
 * 6. Mathematical Physics, Relativity & Millennium Frontier (95-100)
 */

import { DOMAIN_NUMBER_THEORY } from './domain_number_theory.js';
import { DOMAIN_GEOMETRY_TOPOLOGY } from './domain_geometry_topology.js';
import { DOMAIN_GRAPH_COMBINATORICS } from './domain_graph_combinatorics.js';
import { DOMAIN_ALGEBRA_ANALYSIS } from './domain_algebra_analysis.js';
import { DOMAIN_COMPUTER_SCIENCE } from './domain_computer_science.js';
import { DOMAIN_PHYSICS_MILLENNIUM } from './domain_physics_millennium.js';

export {
  DOMAIN_NUMBER_THEORY,
  DOMAIN_GEOMETRY_TOPOLOGY,
  DOMAIN_GRAPH_COMBINATORICS,
  DOMAIN_ALGEBRA_ANALYSIS,
  DOMAIN_COMPUTER_SCIENCE,
  DOMAIN_PHYSICS_MILLENNIUM
};

export const ALL_CONJECTURES_RAW = [
  ...DOMAIN_NUMBER_THEORY,
  ...DOMAIN_GEOMETRY_TOPOLOGY,
  ...DOMAIN_GRAPH_COMBINATORICS,
  ...DOMAIN_ALGEBRA_ANALYSIS,
  ...DOMAIN_COMPUTER_SCIENCE,
  ...DOMAIN_PHYSICS_MILLENNIUM
];
