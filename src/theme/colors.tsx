export const primary: Record<string, string> = {
    navy50: '#F2F4F6',
    navy100: '#E6E9EE',
    navy200: '#bfc9d4',
    navy300: '#99a9bb',
    navy400: '#4D6887',
    navy500: '#002754',
    navy600: '#00234c',
    navy700: '#001d3f',
    navy800: '#001732',
    navy900: '#001329',
    teal50: '#F2FCFB',
    teal100: '#E6F9F8',
    teal200: '#C0EFED',
    teal300: '#9AE5E2',
    teal400: '#4FD2CC',
    teal500: '#03BFB6',
    teal600: '#03ACA4',
    teal700: '#028F89',
    teal800: '#02736D',
    teal900: '#015E59',
    success: '#022853',
    red: '#FF647C',
  };
  
  export const secondary: Record<string, string> = {
    red: '#FF5A72',
    orange: '#FFA349',
    yellow: '#FDE05D',
    lime: '#32CF69',
    purple: '#8B8CFF',
    cyan: '#47FFE6',
    pink: '#FDD1E9',
    seagrass: '#007873',
  };
  
  export const gray: Record<string, string> = {
    gray50: '#F8FAFC',
    gray100: '#F1F5F9',
    gray200: '#E2E8F0',
    gray300: '#CBD5E1',
    gray400: '#94A3B8',
    gray500: '#64748B',
    gray600: '#475569',
    gray700: '#334155',
    gray800: '#1E293B',
    gray900: '#0F172A',
  };
  
  export const status: Record<string, string> = {
    success: secondary.lime,
    warning: secondary.warning,
    error: secondary.red,
  };
  
  export const system: Record<string, string> = {
    background: 'white',
  };
  
  export default {
    ...primary,
    ...secondary,
    ...gray,
    ...status,
    ...system,
  };
  