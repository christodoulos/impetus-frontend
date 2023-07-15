import { MenuItem } from '../models/menu.model';

// menu items
export const MENU: MenuItem[] = [
  { key: 'about', label: 'About', link: '/about', icon: 'uil-home-alt' },
  {
    key: 'legal',
    label: 'Legal',
    isTitle: false,
    collapsed: true,
    icon: 'ri-file-text-line',
    children: [
      {
        key: 'privacy_policy',
        label: 'Privacy Policy',
        link: '/legal/privacy-policy',
      },
      {
        key: 'terms_of_service',
        label: 'Terms of Service',
        link: '/legal/terms-of-service',
      },
    ],
  },
  // Inovations Inventory
  { key: 'inovations_inventory', label: 'Inovations Inventory', isTitle: true },
  {
    key: 'athens_plant_nursery',
    label: 'Athens Plant Nursery',
    link: '/inovations-inventory/athens-plant-nursery',
    icon: 'ri-plant-line',
  },
  {
    key: 'farmAIr_(plant_stress)',
    label: 'FarmAIr (Plant Stress)',
    link: '/inovations-inventory/farmair-plant-stress',
    icon: 'ri-leaf-line',
  },
  // Regional Services
  { key: 'regional_services', label: 'Regional Services', isTitle: true },
  {
    key: 'meteorological_heatmaps',
    label: 'Meteorological Heatmaps',
    link: '/regional-services/meteorological-heatmaps',
    icon: 'uil-layer-group',
  },
];
