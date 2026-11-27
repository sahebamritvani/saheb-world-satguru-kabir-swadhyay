import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeMode } from '../types';
import banyanGhatWallpaper from '../assets/images/clean_banyan_ghat_nature_1794927914606.jpg';
import magharDhamWallpaper from '../assets/images/clean_maghar_dham_nature_1794927914335.jpg';
import sahebEmblemWallpaper from '../assets/images/saheb_world_emblem_wallpaper_1794954938340.jpg';
import lightFloralWallpaper from '../assets/images/light_floral_geometric_wallpaper_1794955840163.jpg';
import lightLotusWallpaper from '../assets/images/light_lotus_blossom_wallpaper_1794956964295.jpg';

const magharAuthenticWallpaper = '/assets/aistudio/clean_maghar_dham_nature_1794955298410_2cef22f0.jpg';

export type FontStyleId = 'granth' | 'saral' | 'pothi' | 'kalam' | 'spasht' | 'rajasi' | 'bhakti';

export interface FontStyleOption {
  id: FontStyleId;
  family: 'serif' | 'sans';
  icon: string;
  previewClass: string;
  label: { hi: string; pb: string; en: string };
  sub: { hi: string; pb: string; en: string };
  stack: string;
  sample: { hi: string; pb: string; en: string };
}

export const FONT_STYLE_OPTIONS: FontStyleOption[] = [
  {
    id: 'granth',
    family: 'serif',
    icon: '📜',
    previewClass: 'font-opt-granth',
    label: { hi: 'पारंपरिक ग्रंथ (Serif)', pb: 'ਪਾਰੰਪਰਿਕ ਗ੍ਰੰਥ (Serif)', en: 'Granth Classic (Serif)' },
    sub: { hi: 'नोटो सेरिफ़ देवनागरी / गुरुमुखी', pb: 'ਨੋਟੋ ਸੇਰਿਫ਼ ਗੁਰਮੁਖੀ', en: 'Traditional Sacred Serif' },
    stack: '"Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, Cambria, serif',
    sample: { hi: 'सत्यनाम साहेब बंदगी', pb: 'ਸਤਯਨਾਮ ਸਾਹੇਬ ਬੰਦਗੀ', en: 'Satyanaam Saheb' },
  },
  {
    id: 'saral',
    family: 'sans',
    icon: '🔤',
    previewClass: 'font-opt-saral',
    label: { hi: 'सुगम सरल (Clean Sans)', pb: 'ਸੁਗਮ ਸਰਲ (Sans)', en: 'Saral Modern (Sans)' },
    sub: { hi: 'मुक्ता एवं नोटो सैन्स आधुनिक लिपि', pb: 'ਮੁਕਤਾ ਤੇ ਨੋਟੋ ਸਾਂਸ', en: 'Modern Clean Sans' },
    stack: '"Mukta", "Noto Sans Devanagari", "Noto Sans Gurmukhi", ui-sans-serif, system-ui, sans-serif',
    sample: { hi: 'सत्यनाम साहेब बंदगी', pb: 'ਸਤਯਨਾਮ ਸਾਹੇਬ ਬੰਦਗੀ', en: 'Satyanaam Saheb' },
  },
  {
    id: 'pothi',
    family: 'serif',
    icon: '📖',
    previewClass: 'font-opt-pothi',
    label: { hi: 'प्राचीन पोथी (Tiro)', pb: 'ਪ੍ਰਾਚੀਨ ਪੋਥੀ (Tiro)', en: 'Ancient Pothi (Tiro)' },
    sub: { hi: 'टायरो देवनागरी शास्त्रीय मुद्रण', pb: 'ਟਾਇਰੋ ਕਲਾਸਿਕ ਛਪਾਈ', en: 'Classical Pothi Typeset' },
    stack: '"Tiro Devanagari Hindi", "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif',
    sample: { hi: 'सत्यनाम साहेब बंदगी', pb: 'ਸਤਯਨਾਮ ਸਾਹੇਬ ਬੰਦਗੀ', en: 'Satyanaam Saheb' },
  },
  {
    id: 'kalam',
    family: 'sans',
    icon: '✒️',
    previewClass: 'font-opt-kalam',
    label: { hi: 'हस्तलिखित कलम (Kalam)', pb: 'ਹਸਤਲਿਖਤ ਕਲਮ (Kalam)', en: 'Handwritten Kalam' },
    sub: { hi: 'कलम / लंगर हस्तलेख शैली', pb: 'ਲੰਗਰ / ਕਲਮ ਹਸਤਲੇਖ', en: 'Handwritten Bhakti Script' },
    stack: '"Kalam", "Langar", "Noto Sans Devanagari", "Noto Sans Gurmukhi", cursive, sans-serif',
    sample: { hi: 'सत्यनाम साहेब बंदगी', pb: 'ਸਤਯਨਾਮ ਸਾਹੇਬ ਬੰਦਗੀ', en: 'Satyanaam Saheb' },
  },
  {
    id: 'spasht',
    family: 'sans',
    icon: '👁️',
    previewClass: 'font-opt-spasht',
    label: { hi: 'अति-स्पष्ट पठन (Hind)', pb: 'ਅਤਿ-ਸਪੱਸ਼ਟ (Baloo)', en: 'Ultra-Clear Read (Hind)' },
    sub: { hi: 'वरिष्ठ पाठकों हेतु स्पष्ट अक्षर', pb: 'ਵੱਡੇ ਤੇ ਸਪੱਸ਼ਟ ਅੱਖਰ', en: 'High-Legibility Wide Font' },
    stack: '"Hind", "Baloo Paaji 2", "Noto Sans Devanagari", "Noto Sans Gurmukhi", sans-serif',
    sample: { hi: 'सत्यनाम साहेब बंदगी', pb: 'ਸਤਯਨਾਮ ਸਾਹੇਬ ਬੰਦਗੀ', en: 'Satyanaam Saheb' },
  },
  {
    id: 'rajasi',
    family: 'serif',
    icon: '👑',
    previewClass: 'font-opt-rajasi',
    label: { hi: 'राजसी साखी (Yatra)', pb: 'ਰਾਜਸੀ ਸਾਖੀ (Yatra)', en: 'Royal Heritage (Yatra)' },
    sub: { hi: 'यात्रा वन / रोज़ा भव्य शिल्प', pb: 'ਸ਼ਾਨਦਾਰ ਵਿਰਾਸਤੀ ਅੱਖਰ', en: 'Expressive Heritage Display' },
    stack: '"Yatra One", "Rozha One", "Noto Serif Devanagari", "Noto Serif Gurmukhi", serif',
    sample: { hi: 'सत्यनाम साहेब बंदगी', pb: 'ਸਤਯਨਾਮ ਸਾਹੇਬ ਬੰਦਗੀ', en: 'Satyanaam Saheb' },
  },
  {
    id: 'bhakti',
    family: 'serif',
    icon: '🪷',
    previewClass: 'font-opt-bhakti',
    label: { hi: 'भक्ति ललित (Amita)', pb: 'ਭਗਤੀ ਲਲਿਤ (Amita)', en: 'Devotional Lyrical (Amita)' },
    sub: { hi: 'अमिता / मारटेल सुलेख लिपि', pb: 'ਅਮਿਤਾ ਸੁੰਦਰ ਸੁਲੇਖ', en: 'Warm Calligraphic Script' },
    stack: '"Amita", "Martel", "Noto Serif Devanagari", "Noto Serif Gurmukhi", serif',
    sample: { hi: 'सत्यनाम साहेब बंदगी', pb: 'ਸਤਯਨਾਮ ਸਾਹੇਬ ਬੰਦਗੀ', en: 'Satyanaam Saheb' },
  },
];

export const getFontStyleOption = (styleId?: string | null): FontStyleOption => {
  return FONT_STYLE_OPTIONS.find((opt) => opt.id === styleId) || FONT_STYLE_OPTIONS[0];
};

export interface GlobalNaturePreset {
  id:
    | 'royal_bhojpatra'
    | 'maghar_dham'
    | 'kabir_chaura_kashi'
    | 'lahartara_pond'
    | 'bandhavgarh_forest'
    | 'jagannath_puri_math'
    | 'damakheda_darshan'
    | 'banyan_ghat'
    | 'saheb_icon_emblem'
    | 'maghar_authentic'
    | 'light_floral_geometric'
    | 'light_lotus'
    | 'dawn_mountain'
    | 'emerald_forest'
    | 'sunset_sky'
    | 'sacred_river'
    | 'golden_autumn'
    | string;
  name: { hi: string; pb: string; en: string };
  sub: { hi: string; pb: string; en: string };
  accent: string;
  previewBg: string;
}

export const GLOBAL_NATURE_PRESETS: GlobalNaturePreset[] = [
  {
    id: 'royal_bhojpatra',
    name: { hi: 'शाही भोजपत्र क्रीम', pb: 'ਸ਼ਾਹੀ ਭੋਜਪੱਤਰ ਕਰੀਮ', en: 'Royal Bhojpatra Cream' },
    sub: { hi: 'स्वर्ण एवं प्राचीन भोजपत्र', pb: 'ਸੁਨਹਿਰੀ ਤੇ ਪ੍ਰਾਚੀਨ ਭੋਜਪੱਤਰ', en: 'Royal Cream & Gold' },
    accent: '#D97706',
    previewBg: 'linear-gradient(135deg, #FFFDF7 0%, #FDF6E2 50%, #F5E8C7 100%)',
  },
  {
    id: 'maghar_dham',
    name: { hi: 'मगहर पावन समाधि स्थल', pb: 'ਮਗਹਰ ਪਾਵਨ ਸਮਾਧੀ ਅਸਥਾਨ', en: 'Maghar Nirvana Dham' },
    sub: { hi: 'सतगुरु निर्वाण महातीर्थ', pb: 'ਸਤਿਗੁਰੂ ਨਿਰਵਾਣ ਮਹਾਂਤੀਰਥ', en: 'Historic Nirvana Shrine' },
    accent: '#F59E0B',
    previewBg: `url("${magharAuthenticWallpaper}")`,
  },
  {
    id: 'kabir_chaura_kashi',
    name: { hi: 'कबीर चौरा धाम, काशी', pb: 'ਕਬੀਰ ਚੌਰਾ ਧਾਮ, ਕਾਸ਼ੀ', en: 'Kabir Chaura Math, Kashi' },
    sub: { hi: 'ऐतिहासिक मूल साधना पीठ', pb: 'ਇਤਿਹਾਸਕ ਮੂਲ ਸਾਧਨਾ ਪੀਠ', en: 'Historic Kashi Sanctum' },
    accent: '#FBBF24',
    previewBg: 'linear-gradient(135deg, #1C1008 0%, #3B200C 45%, #6B3012 80%, #9A3412 100%)',
  },
  {
    id: 'lahartara_pond',
    name: { hi: 'लहरतारा पावन सरोवर', pb: 'ਲਹਿਰਤਾਰਾ ਪਾਵਨ ਸਰੋਵਰ', en: 'Lahartara Sacred Lotus Pond' },
    sub: { hi: 'सतगुरु प्राकट्य नीर व श्वेत कमल', pb: 'ਸਤਿਗੁਰੂ ਪ੍ਰਗਟਾਸ ਤਾਲ ਤੇ ਕਮਲ', en: 'Sacred Lotus Water Sanctum' },
    accent: '#38BDF8',
    previewBg: `url("${lightLotusWallpaper}")`,
  },
  {
    id: 'bandhavgarh_forest',
    name: { hi: 'बांधवगढ़ पावन स्थल', pb: 'ਬਾਂਧਵਗੜ੍ਹ ਪਾਵਨ ਅਸਥਾਨ', en: 'Bandhavgarh Sacred Hill & Forest' },
    sub: { hi: 'धनी धर्मदास साधना वन', pb: 'ਧਨੀ ਧਰਮਦਾਸ ਸਾਧਨਾ ਵਣ', en: 'Sacred Sal Forest & Hill' },
    accent: '#34D399',
    previewBg: 'linear-gradient(135deg, #051A10 0%, #0E3622 45%, #185235 80%, #2D6A4F 100%)',
  },
  {
    id: 'jagannath_puri_math',
    name: { hi: 'जगन्नाथ पुरी कबीर मठ', pb: 'ਜਗਨਨਾਥ ਪੁਰੀ ਕਬੀਰ ਮਠ', en: 'Jagannath Puri Kabir Math' },
    sub: { hi: 'समुद्र तट पावन बड़ आश्रम', pb: 'ਸਮੁੰਦਰ ਤੱਟ ਪਾਵਨ ਮਠ', en: 'Oceanic Coastal Kabir Math' },
    accent: '#FACC15',
    previewBg: 'linear-gradient(135deg, #091728 0%, #153252 45%, #254F77 80%, #4682A9 100%)',
  },
  {
    id: 'damakheda_darshan',
    name: { hi: 'दामाखेड़ा दर्शन स्थल', pb: 'ਦਾਮਾਖੇੜਾ ਦਰਸ਼ਨ ਅਸਥਾਨ', en: 'Damakheda Paavan Darshan' },
    sub: { hi: 'वंश बयालीस मूल कबीर धर्मनगर', pb: 'ਵੰਸ਼ ਬਿਆਲੀਸ ਮੂਲ ਗੱਦੀ ਦਰਸ਼ਨ', en: 'Damakheda Sacred Seat' },
    accent: '#FB923C',
    previewBg: 'linear-gradient(135deg, #220804 0%, #451508 45%, #7C2810 80%, #B43E12 100%)',
  },
  {
    id: 'banyan_ghat',
    name: { hi: 'पावन बरगद घाट', pb: 'ਪਾਵਨ ਬਰਗਦ ਘਾਟ', en: 'Sacred Banyan Ghat' },
    sub: { hi: 'सूर्योदय व बरगद तट', pb: 'ਸੂਰਜ ਚੜ੍ਹਨ ਤੇ ਬਰਗਦ ਤੱਟ', en: 'Golden dawn & banyan bank' },
    accent: '#FACC15',
    previewBg: `url("${banyanGhatWallpaper}")`,
  },
  {
    id: 'light_floral_geometric',
    name: { hi: 'पुष्पीय ज्यामितीय (Light)', pb: 'ਫੁੱਲ ਤੇ ਜਿਆਮਿਤੀ ਰੋਸ਼ਨੀ', en: 'Light Floral & Geometric' },
    sub: { hi: 'गुलाब फूल 🌹 व ज्यामितीय चक्र', pb: 'ਗੁਲਾਬ ਫੁੱਲ 🌹 ਅਤੇ ਜਿਆਮਿਤੀ ਆਕ੍ਰਿਤੀ', en: 'Roses 🌹 & sacred geometry' },
    accent: '#E11D48',
    previewBg: `url("${lightFloralWallpaper}")`,
  },
  {
    id: 'saheb_icon_emblem',
    name: { hi: 'साहेब वर्ल्ड प्रतीक', pb: 'ਸਾਹੇਬ ਵਰਲਡ ਪ੍ਰਤੀਕ', en: 'Saheb World Emblem' },
    sub: { hi: 'गोल्डन चक्र व कमल', pb: 'ਸੁਨਹਿਰੀ ਚੱਕਰ ਤੇ ਕਮਲ', en: 'Golden chakra & lotus' },
    accent: '#FBBF24',
    previewBg: `url("${sahebEmblemWallpaper}")`,
  },
  {
    id: 'dawn_mountain',
    name: { hi: 'स्वर्णिम अरुणोदय', pb: 'ਸੁਨਹਿਰੀ ਅਰੁਣੋਦਯ', en: 'Dawn Mountain' },
    sub: { hi: 'अरुणोदय पर्वत शिखर', pb: 'ਪਰਬਤ ਸਿਖਰ ਸਵੇਰ', en: 'Warm sunrise peaks' },
    accent: '#FAD074',
    previewBg: 'linear-gradient(135deg, #1A0F03 0%, #4A280B 50%, #9E5B1A 100%)',
  },
  {
    id: 'emerald_forest',
    name: { hi: 'शांत हरित वन', pb: 'ਸ਼ਾਂਤ ਹਰਿਆਵਲ ਵਣ', en: 'Emerald Forest' },
    sub: { hi: 'शांत वन व प्रकाश किरणें', pb: 'ਸ਼ਾਂਤ ਵਣ ਤੇ ਦਿਵਯ ਰੋਸ਼ਨੀ', en: 'Peaceful forest grove' },
    accent: '#6EE7B7',
    previewBg: 'linear-gradient(135deg, #04120C 0%, #0B2D1F 50%, #2B7051 100%)',
  },
  {
    id: 'sunset_sky',
    name: { hi: 'संध्या कमल गगन', pb: 'ਸੰਧਿਆ ਕਮਲ ਗਗਨ', en: 'Sunset Lotus Sky' },
    sub: { hi: 'संध्या गगन व सरसी आभा', pb: 'ਸੰਧਿਆ ਅਕਾਸ਼ ਤੇ ਸ਼ਾਂਤੀ', en: 'Evening twilight glow' },
    accent: '#FFD166',
    previewBg: 'linear-gradient(135deg, #1E0517 0%, #4A0E2E 50%, #8C1F38 100%, #F4A261 100%)',
  },
  {
    id: 'sacred_river',
    name: { hi: 'पावन सरिता तट', pb: 'ਪਾਵਨ ਸਰਿਤਾ ਤੱਟ', en: 'Sacred River' },
    sub: { hi: 'नील सरिता व प्रज्वलित दीप', pb: 'ਨੀਲੀ ਨਦੀ ਤੇ ਸ਼ਾਂਤ ਲਹਿਰਾਂ', en: 'Calm flowing sacred river' },
    accent: '#67E8F9',
    previewBg: 'linear-gradient(135deg, #02101C 0%, #0B2D46 50%, #228BE6 100%)',
  },
  {
    id: 'golden_autumn',
    name: { hi: 'स्वर्ण वट पल्लव', pb: 'ਸੁਨਹਿਰੀ ਪੱਤਝੜ', en: 'Golden Autumn' },
    sub: { hi: 'स्वर्ण आभा व अनहद शांति', pb: 'ਸੁਨਹਿਰੀ ਆਭਾ ਤੇ ਸ਼ਾਂਤੀ', en: 'Warm golden canopy' },
    accent: '#FFE082',
    previewBg: 'linear-gradient(135deg, #190E02 0%, #422406 50%, #B87319 100%)',
  },
];

export interface SpiritualTheme {
  mode: ThemeMode;
  bg: string;
  bgSecondary: string;
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accentGold: string;
  accentGoldLight: string;
  sacredMaroon: string;
  buttonPrimaryBg: string;
  buttonPrimaryText: string;
  stepActiveBg: string;
  fontDisplay: string;
  fontBody: string;
  borderOrnament: string;
  isNatureWallpaper?: boolean;
}

export const themes: Record<ThemeMode, SpiritualTheme> = {
  bhojpatra: {
    mode: 'bhojpatra',
    bg: '#F7F1E3', // Authentic Warm Parchment
    bgSecondary: '#F4ECD8',
    cardBg: '#FFFDF9',
    cardBorder: 'rgba(217, 193, 158, 0.5)',
    cardShadow: '0 4px 20px -2px rgba(90, 60, 20, 0.1)',
    textPrimary: '#1A1A1A', // Deep Sepia/Charcoal Black
    textSecondary: '#5D4037',
    textMuted: '#6B5038',
    accentGold: '#B45309', // High-Contrast Spiritual Saffron
    accentGoldLight: '#FBE8C8',
    sacredMaroon: '#8B0000', // Deep Maroon
    buttonPrimaryBg: '#8B0000',
    buttonPrimaryText: '#FFFFFF',
    stepActiveBg: '#F5E4C4',
    fontDisplay: "'Rozha One', 'Cinzel', serif",
    fontBody: "'Mukta', 'Noto Serif Devanagari', sans-serif",
    borderOrnament: 'rgba(217, 193, 158, 0.5)',
  },
  amrit_neel: {
    mode: 'amrit_neel',
    bg: '#121212', // Jet Black
    bgSecondary: '#1A1A1A', // Deep Charcoal
    cardBg: '#1A1A1A',
    cardBorder: 'rgba(255, 255, 255, 0.14)',
    cardShadow: '0 6px 30px -4px rgba(0, 0, 0, 0.9)',
    textPrimary: '#F5F5F5', // Creamy White
    textSecondary: '#D4D4D8', // Crisp Light Gray
    textMuted: '#A1A1AA',
    accentGold: '#FFD700', // Bright Gold
    accentGoldLight: '#262626',
    sacredMaroon: '#FFD700',
    buttonPrimaryBg: '#FFD700',
    buttonPrimaryText: '#121212',
    stepActiveBg: '#333333',
    fontDisplay: "'Rozha One', 'Cinzel', serif",
    fontBody: "'Mukta', 'Noto Serif Devanagari', sans-serif",
    borderOrnament: 'rgba(255, 255, 255, 0.18)',
  },
  mystic_dark: {
    mode: 'mystic_dark',
    bg: '#121212',
    bgSecondary: '#1A1A1A',
    cardBg: '#1A1A1A',
    cardBorder: 'rgba(255, 255, 255, 0.14)',
    cardShadow: '0 6px 30px -4px rgba(0, 0, 0, 0.9)',
    textPrimary: '#F5F5F5',
    textSecondary: '#D4D4D8',
    textMuted: '#A1A1AA',
    accentGold: '#FFD700',
    accentGoldLight: '#262626',
    sacredMaroon: '#FFD700',
    buttonPrimaryBg: '#FFD700',
    buttonPrimaryText: '#121212',
    stepActiveBg: '#333333',
    fontDisplay: "'Rozha One', 'Cinzel', serif",
    fontBody: "'Mukta', 'Noto Serif Devanagari', sans-serif",
    borderOrnament: 'rgba(255, 255, 255, 0.18)',
  },
  high_readability_light: {
    mode: 'high_readability_light',
    bg: '#F8F9FA',
    bgSecondary: '#E9ECEF',
    cardBg: '#FFFFFF',
    cardBorder: 'rgba(0, 0, 0, 0.18)',
    cardShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textPrimary: '#000000',
    textSecondary: '#343A40',
    textMuted: '#495057',
    accentGold: '#8C2818',
    accentGoldLight: '#F8D7DA',
    sacredMaroon: '#8C2818',
    buttonPrimaryBg: '#1A1A1A',
    buttonPrimaryText: '#FFFFFF',
    stepActiveBg: '#E9ECEF',
    fontDisplay: "'Rozha One', 'Cinzel', serif",
    fontBody: "system-ui, -apple-system, sans-serif",
    borderOrnament: 'rgba(0, 0, 0, 0.14)',
  },
  flow_state: {
    mode: 'flow_state',
    bg: '#080E1E',
    bgSecondary: '#0F172A',
    cardBg: '#131E36',
    cardBorder: 'rgba(251, 191, 36, 0.34)',
    cardShadow: '0 8px 32px -4px rgba(8, 14, 30, 0.9)',
    textPrimary: '#FFFFFF', // White text
    textSecondary: '#FDE047', // Crisp High-Contrast Gold
    textMuted: '#CBD5E1',
    accentGold: '#FBBF24',
    accentGoldLight: '#1E293B',
    sacredMaroon: '#FFD700',
    buttonPrimaryBg: '#F59E0B',
    buttonPrimaryText: '#080E1E',
    stepActiveBg: '#1C2B4E',
    fontDisplay: "'Rozha One', 'Cinzel', serif",
    fontBody: "'Mukta', 'Noto Serif Devanagari', sans-serif",
    borderOrnament: 'rgba(251, 191, 36, 0.35)',
  },
};

const GlobalSpiritualStyles = createGlobalStyle<{ theme: SpiritualTheme; $hasWallpaper?: boolean }>`
  :root {
    --bg-primary: ${({ theme }) => theme.bg};
    --card-bg: ${({ theme }) => theme.cardBg};
    --card-border: ${({ theme }) => theme.cardBorder};
    --text-primary: ${({ theme }) => theme.textPrimary};
    --text-secondary: ${({ theme }) => theme.textSecondary};
    --accent-gold: ${({ theme }) => theme.accentGold};
    --sacred-maroon: ${({ theme }) => theme.sacredMaroon};
    --step-active-bg: ${({ theme }) => theme.stepActiveBg};
  }

  *, *::before, *::after {
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  html {
    background-color: ${({ theme, $hasWallpaper }) => ($hasWallpaper ? 'transparent' : theme.bg)};
    /* Global Font Scaling - Affects everything using rem */
    &.font-size-small { font-size: 14px; }
    &.font-size-normal { font-size: 16px; }
    &.font-size-medium { font-size: 17px; }
    &.font-size-large { font-size: 18px; }
    &.font-size-xlarge { font-size: 20px; }
    &.font-size-xl { font-size: 22px; }
    &.font-size-elderly { font-size: 24px; }
  }

  body {
    background-color: ${({ theme, $hasWallpaper }) => ($hasWallpaper ? 'transparent' : theme.bg)} !important;
    color: ${({ theme }) => theme.textPrimary};
    font-family: ${({ theme }) => theme.fontBody};
    transition: background-color 0.35s ease, color 0.35s ease;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    
    /* Specific Reader Scaling */
    &.font-size-small { --reader-font-size: 14px; }
    &.font-size-normal { --reader-font-size: 16px; }
    &.font-size-medium { --reader-font-size: 18px; }
    &.font-size-large { --reader-font-size: 22px; }
    &.font-size-xlarge { --reader-font-size: 28px; }
    &.font-size-xl { --reader-font-size: 32px; }
    &.font-size-elderly { 
      --reader-font-size: 28px;
      font-weight: 700;
      line-height: 1.5;
    }
  }

  /* Smooth scrollbars */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bgSecondary};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.borderOrnament};
    border-radius: 9999px;
  }
`;

export const StyledAppContainer = styled.div<{ theme: SpiritualTheme; $wallpaper?: any; $transparentBg?: boolean }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, $transparentBg }) => ($transparentBg ? 'transparent' : theme.bg)};
  color: ${({ theme }) => theme.textPrimary};
  transition: background-color 0.35s ease-in-out, color 0.35s ease-in-out;
  position: relative;
  z-index: 1;
  overflow-x: clip;

  ${({ $wallpaper, $transparentBg }) => $wallpaper && !$transparentBg && `
    background-image: ${$wallpaper.backgroundImage};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: ${$wallpaper.overlay};
      z-index: 0;
      pointer-events: none;
    }

    & > * {
      position: relative;
      z-index: 1;
    }
  `}
`;

export const SacredHeaderContainer = styled.header<{ theme: SpiritualTheme; $translucent?: boolean }>`
  background-color: ${({ theme, $translucent }) =>
    $translucent
      ? theme.mode === 'flow_state'
        ? 'rgba(15, 23, 42, 0.80)'
        : theme.mode === 'amrit_neel' || theme.mode === 'mystic_dark'
        ? 'rgba(18, 16, 14, 0.78)'
        : theme.mode === 'high_readability_light'
        ? 'rgba(255, 255, 255, 0.86)'
        : 'rgba(255, 250, 240, 0.84)'
      : theme.cardBg};
  backdrop-filter: ${({ $translucent }) => ($translucent ? 'blur(14px)' : 'none')};
  -webkit-backdrop-filter: ${({ $translucent }) => ($translucent ? 'blur(14px)' : 'none')};
  border-bottom: 1.5px solid ${({ theme }) => theme.cardBorder};
  box-shadow: ${({ theme }) => theme.cardShadow};
  position: relative;
  z-index: 30;
  transition: all 0.3s ease;
`;

export const SacredFooterContainer = styled.footer<{ theme: SpiritualTheme }>`
  background-color: ${({ theme }) => theme.cardBg};
  backdrop-filter: ${({ theme }) => (theme.isNatureWallpaper ? 'blur(14px)' : 'none')};
  -webkit-backdrop-filter: ${({ theme }) => (theme.isNatureWallpaper ? 'blur(14px)' : 'none')};
  border-top: 1.5px solid ${({ theme }) => theme.cardBorder};
  transition: all 0.3s ease;
  margin-top: auto;
`;

export const StyledCard = styled.div<{ theme: SpiritualTheme; $highlight?: boolean }>`
  background-color: ${({ theme }) => theme.cardBg};
  backdrop-filter: ${({ theme }) => (theme.isNatureWallpaper ? 'blur(12px)' : 'none')};
  -webkit-backdrop-filter: ${({ theme }) => (theme.isNatureWallpaper ? 'blur(12px)' : 'none')};
  border: 1px solid ${({ theme, $highlight }) => ($highlight ? theme.accentGold : theme.cardBorder)};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  padding: 1.25rem;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  
  @media (min-width: 640px) {
    padding: 1.75rem;
  }
`;

interface ThemeContextType {
  theme: SpiritualTheme;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  fontSize: 'small' | 'normal' | 'medium' | 'large' | 'xlarge' | 'xl' | 'elderly';
  setFontSize: (size: 'small' | 'normal' | 'medium' | 'large' | 'xlarge' | 'xl' | 'elderly') => void;
  lineHeight: 'small' | 'medium' | 'large';
  setLineHeight: (height: 'small' | 'medium' | 'large') => void;
  widthMode: 'narrow' | 'medium' | 'wide';
  setWidthMode: (mode: 'narrow' | 'medium' | 'wide') => void;
  fontFamily: 'serif' | 'sans';
  setFontFamily: (font: 'serif' | 'sans') => void;
  fontStyle: FontStyleId;
  setFontStyle: (style: FontStyleId) => void;
  isSahajMode: boolean;
  setIsSahajMode: (enabled: boolean) => void;
  isAutoNightMode: boolean;
  setIsAutoNightMode: (enabled: boolean) => void;
  isMuted: boolean;
  setIsMuted: (enabled: boolean) => void;
  speechRate: number;
  setSpeechRate: (rate: number) => void;
  readingFramework: 'scroll' | 'parallel' | 'flip';
  setReadingFramework: (framework: 'scroll' | 'parallel' | 'flip') => void;
  autoScrollActive: boolean;
  setAutoScrollActive: (active: boolean) => void;
  autoScrollSpeed: number;
  setAutoScrollSpeed: (speed: number) => void;
  zenModeActive: boolean;
  setZenModeActive: (active: boolean) => void;
  larivaarModeActive: boolean;
  setLarivaarModeActive: (active: boolean) => void;
  visraamModeActive: boolean;
  setVisraamModeActive: (active: boolean) => void;
  globalWallpaper: string | null;
  setGlobalWallpaper: (wallpaperId: string | null) => void;
  getWallpaperCss: (wallpaperId: string | null) => any;
}

import { analytics } from '../services/analytics';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const isNightTimeSolar = (date = new Date()): boolean => {
  const hours = date.getHours() + date.getMinutes() / 60;
  // Local solar twilight & sunset: ~18:30 (6:30 PM) to ~06:00 (6:00 AM)
  return hours >= 18.5 || hours < 6.0;
};

export const SpiritualThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSahajMode, setIsSahajModeState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_sahaj_mode') === 'true';
    }
    return false;
  });

  const [isAutoNightMode, setIsAutoNightModeState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_auto_night_mode') === 'true';
    }
    return false;
  });

  const [isMuted, setIsMutedState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_is_muted') === 'true';
    }
    return false;
  });

  const [speechRate, setSpeechRateState] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_speech_rate');
      return saved ? parseFloat(saved) : 1.0;
    }
    return 1.0;
  });

  const [readingFramework, setReadingFrameworkState] = useState<'scroll' | 'parallel' | 'flip'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('sahebworld_reading_framework') as any) || 'scroll';
    }
    return 'scroll';
  });

  const [autoScrollActive, setAutoScrollActiveState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_autoscroll_active') === 'true';
    }
    return false;
  });

  const [autoScrollSpeed, setAutoScrollSpeedState] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_autoscroll_speed');
      return saved ? parseFloat(saved) : 1.0;
    }
    return 1.0;
  });

  const [zenModeActive, setZenModeActiveState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_zen_mode_active') === 'true';
    }
    return false;
  });

  const [larivaarModeActive, setLarivaarModeActiveState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_larivaar_mode_active') === 'true';
    }
    return false;
  });

  const [visraamModeActive, setVisraamModeActiveState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_visraam_mode_active') === 'true';
    }
    return false;
  });
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_theme_mode');
      if (saved && ['bhojpatra', 'amrit_neel', 'mystic_dark', 'flow_state', 'high_readability_light'].includes(saved)) {
        return saved as ThemeMode;
      }
    }
    return 'bhojpatra';
  });

  const [globalWallpaper, setGlobalWallpaperState] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sahebworld_global_wallpaper');
    }
    return null;
  });

  const [fontSize, setFontSizeState] = useState<'small' | 'normal' | 'medium' | 'large' | 'xlarge' | 'xl' | 'elderly'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_fontsize');
      if (saved && ['small', 'normal', 'medium', 'large', 'xlarge', 'xl', 'elderly'].includes(saved)) {
        return saved as any;
      }
    }
    return 'normal';
  });

  const [lineHeight, setLineHeightState] = useState<'small' | 'medium' | 'large'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_lineheight');
      if (saved && ['small', 'medium', 'large'].includes(saved)) {
        return saved as 'small' | 'medium' | 'large';
      }
    }
    return 'medium';
  });

  const [widthMode, setWidthModeState] = useState<'narrow' | 'medium' | 'wide'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahebworld_widthmode');
      if (saved && ['narrow', 'medium', 'wide'].includes(saved)) {
        return saved as 'narrow' | 'medium' | 'wide';
      }
    }
    return 'wide';
  });

  const [fontStyle, setFontStyleState] = useState<FontStyleId>(() => {
    if (typeof window !== 'undefined') {
      const savedStyle = localStorage.getItem('sahebworld_font_style') as FontStyleId | null;
      if (savedStyle && FONT_STYLE_OPTIONS.some((o) => o.id === savedStyle)) {
        return savedStyle;
      }
      const legacyFamily = localStorage.getItem('sahebworld_fontfamily');
      if (legacyFamily === 'sans') return 'saral';
    }
    return 'granth';
  });

  const [fontFamily, setFontFamilyState] = useState<'serif' | 'sans'>(() => {
    if (typeof window !== 'undefined') {
      const savedStyle = localStorage.getItem('sahebworld_font_style') as FontStyleId | null;
      if (savedStyle && FONT_STYLE_OPTIONS.some((o) => o.id === savedStyle)) {
        return getFontStyleOption(savedStyle).family;
      }
      const saved = localStorage.getItem('sahebworld_fontfamily');
      if (saved && ['serif', 'sans'].includes(saved)) {
        return saved as 'serif' | 'sans';
      }
    }
    return 'serif';
  });

  const setThemeMode = (mode: ThemeMode) => {
    const oldMode = themeMode;
    setThemeModeState(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_theme_mode', mode);
      // Telemetry
      if (oldMode !== mode) {
        analytics.logEvent({
          name: 'theme_change',
          params: { from: oldMode, to: mode }
        });
      }
    }
  };

  const setFontSize = (size: 'small' | 'normal' | 'medium' | 'large' | 'xlarge' | 'xl' | 'elderly') => {
    setFontSizeState(size);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_fontsize', size);
    }
  };

  const setLineHeight = (height: 'small' | 'medium' | 'large') => {
    setLineHeightState(height);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_lineheight', height);
    }
  };

  const setWidthMode = (mode: 'narrow' | 'medium' | 'wide') => {
    setWidthModeState(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_widthmode', mode);
    }
  };

  const setFontStyle = (style: FontStyleId) => {
    const opt = getFontStyleOption(style);
    setFontStyleState(opt.id);
    setFontFamilyState(opt.family);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_font_style', opt.id);
      localStorage.setItem('sahebworld_fontfamily', opt.family);
      window.dispatchEvent(new CustomEvent('sahebworld_fontstyle_changed', { detail: opt.id }));
      window.dispatchEvent(new CustomEvent('sahebworld_fontfamily_changed', { detail: opt.family }));
    }
  };

  const setFontFamily = (font: 'serif' | 'sans') => {
    setFontFamilyState(font);
    const currentOpt = getFontStyleOption(fontStyle);
    const nextStyle: FontStyleId = currentOpt.family === font ? currentOpt.id : (font === 'sans' ? 'saral' : 'granth');
    setFontStyleState(nextStyle);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_fontfamily', font);
      localStorage.setItem('sahebworld_font_style', nextStyle);
      window.dispatchEvent(new CustomEvent('sahebworld_fontfamily_changed', { detail: font }));
      window.dispatchEvent(new CustomEvent('sahebworld_fontstyle_changed', { detail: nextStyle }));
    }
  };

  const setIsSahajMode = (enabled: boolean) => {
    setIsSahajModeState(enabled);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_sahaj_mode', String(enabled));
    }
  };

  const setGlobalWallpaper = (wallpaperId: string | null) => {
    setGlobalWallpaperState(wallpaperId);
    if (typeof window !== 'undefined') {
      if (wallpaperId) {
        localStorage.setItem('sahebworld_global_wallpaper', wallpaperId);
      } else {
        localStorage.removeItem('sahebworld_global_wallpaper');
      }
      window.dispatchEvent(new CustomEvent('sahebworld_wallpaper_changed', { detail: wallpaperId }));
    }
  };

  const setIsAutoNightMode = (enabled: boolean) => {
    setIsAutoNightModeState(enabled);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_auto_night_mode', String(enabled));
    }
    if (enabled) {
      const isNight = isNightTimeSolar();
      setThemeMode(isNight ? 'mystic_dark' : 'bhojpatra');
    }
  };

  const setSpeechRate = (rate: number) => {
    setSpeechRateState(rate);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_speech_rate', String(rate));
      window.dispatchEvent(new CustomEvent('sahebworld_tts_settings_changed', { detail: { rate } }));
    }
  };

  const setReadingFramework = (framework: 'scroll' | 'parallel' | 'flip') => {
    setReadingFrameworkState(framework);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_reading_framework', framework);
    }
  };

  const setAutoScrollActive = (active: boolean) => {
    setAutoScrollActiveState(active);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_autoscroll_active', String(active));
    }
  };

  const setAutoScrollSpeed = (speed: number) => {
    setAutoScrollSpeedState(speed);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_autoscroll_speed', String(speed));
    }
  };

  const setZenModeActive = (active: boolean) => {
    setZenModeActiveState(active);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_zen_mode_active', String(active));
      window.dispatchEvent(new CustomEvent('sahebworld_zen_mode_active', { detail: active }));
    }
  };

  const setLarivaarModeActive = (active: boolean) => {
    setLarivaarModeActiveState(active);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_larivaar_mode_active', String(active));
      window.dispatchEvent(new CustomEvent('sahebworld_larivaar_mode_active', { detail: active }));
    }
  };

  const setVisraamModeActive = (active: boolean) => {
    setVisraamModeActiveState(active);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_visraam_mode_active', String(active));
      window.dispatchEvent(new CustomEvent('sahebworld_visraam_mode_active', { detail: active }));
    }
  };

  const getWallpaperCss = (wallpaperId: string | null) => {
    if (!wallpaperId) return null;

    const overlays = {
      dark: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))',
      medium: 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55))',
      light: 'linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))',
    };

    const wallpapers: Record<string, { backgroundImage: string; overlay: string }> = {
      royal_bhojpatra: {
        backgroundImage: 'linear-gradient(135deg, #FAF3E0 0%, #F5E6C4 50%, #EBD5A0 100%)',
        overlay: 'linear-gradient(rgba(253, 248, 238, 0.40), rgba(253, 248, 238, 0.60))',
      },
      maghar_dham: {
        backgroundImage: `url("${magharAuthenticWallpaper}")`,
        overlay: overlays.medium,
      },
      kabir_chaura_kashi: {
        backgroundImage: 'linear-gradient(135deg, #1C1008 0%, #3B200C 45%, #6B3012 80%, #9A3412 100%)',
        overlay: overlays.medium,
      },
      lahartara_pond: {
        backgroundImage: `url("${lightLotusWallpaper}")`,
        overlay: overlays.light,
      },
      bandhavgarh_forest: {
        backgroundImage: 'linear-gradient(135deg, #051A10 0%, #0E3622 45%, #185235 80%, #2D6A4F 100%)',
        overlay: overlays.medium,
      },
      jagannath_puri_math: {
        backgroundImage: 'linear-gradient(135deg, #091728 0%, #153252 45%, #254F77 80%, #4682A9 100%)',
        overlay: overlays.medium,
      },
      damakheda_darshan: {
        backgroundImage: 'linear-gradient(135deg, #220804 0%, #451508 45%, #7C2810 80%, #B43E12 100%)',
        overlay: overlays.medium,
      },
      banyan_ghat: {
        backgroundImage: `url("${banyanGhatWallpaper}")`,
        overlay: overlays.medium,
      },
      maghar_authentic: {
        backgroundImage: `url("${magharAuthenticWallpaper}")`,
        overlay: overlays.medium,
      },
      light_floral_geometric: {
        backgroundImage: `url("${lightFloralWallpaper}")`,
        overlay: overlays.light,
      },
      light_lotus: {
        backgroundImage: `url("${lightLotusWallpaper}")`,
        overlay: overlays.light,
      },
      saheb_icon_emblem: {
        backgroundImage: `url("${sahebEmblemWallpaper}")`,
        overlay: overlays.medium,
      },
      dawn_mountain: {
        backgroundImage: 'linear-gradient(135deg, #1A0F03 0%, #4A280B 50%, #9E5B1A 100%)',
        overlay: overlays.light,
      },
      emerald_forest: {
        backgroundImage: 'linear-gradient(135deg, #04120C 0%, #0B2D1F 50%, #2B7051 100%)',
        overlay: overlays.medium,
      },
      sunset_sky: {
        backgroundImage: 'linear-gradient(135deg, #1E0517 0%, #4A0E2E 50%, #8C1F38 100%, #F4A261 100%)',
        overlay: overlays.medium,
      },
      sacred_river: {
        backgroundImage: 'linear-gradient(135deg, #02101C 0%, #0B2D46 50%, #228BE6 100%)',
        overlay: overlays.medium,
      },
      golden_autumn: {
        backgroundImage: 'linear-gradient(135deg, #190E02 0%, #422406 50%, #B87319 100%)',
        overlay: overlays.medium,
      },
    };

    return wallpapers[wallpaperId] || null;
  };

  const setIsMuted = (enabled: boolean) => {
    setIsMutedState(enabled);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahebworld_is_muted', String(enabled));
      window.dispatchEvent(new CustomEvent('sahebworld_mute_changed', { detail: enabled }));
    }
  };

  // Sun-Aware Auto-Night Mode background checker
  useEffect(() => {
    if (!isAutoNightMode) return;

    const checkSolarTheme = () => {
      const isNight = isNightTimeSolar();
      const targetMode: ThemeMode = isNight ? 'amrit_neel' : 'bhojpatra';
      if (themeMode !== targetMode) {
        setThemeMode(targetMode);
      }
    };

    checkSolarTheme();
    const interval = setInterval(checkSolarTheme, 60000); // Verify every 60s
    return () => clearInterval(interval);
  }, [isAutoNightMode, themeMode]);

  const activeWallpaperCss = useMemo(() => getWallpaperCss(globalWallpaper), [globalWallpaper]);
  const isDarkMode = themeMode === 'amrit_neel' || themeMode === 'mystic_dark' || themeMode === 'flow_state';

  const activeTheme = useMemo<SpiritualTheme>(() => {
    const base = themes[themeMode] || themes.bhojpatra;
    if (!activeWallpaperCss) return base;

    if (themeMode === 'high_readability_light') {
      return {
        ...base,
        cardBg: 'rgba(255, 255, 255, 0.84)',
        bgSecondary: 'rgba(241, 245, 249, 0.76)',
        stepActiveBg: 'rgba(229, 233, 238, 0.82)',
        accentGoldLight: 'rgba(248, 215, 218, 0.82)',
        cardBorder: 'rgba(15, 23, 42, 0.22)',
        borderOrnament: 'rgba(15, 23, 42, 0.18)',
        textPrimary: '#000000',
        textSecondary: '#1E293B',
        textMuted: '#334155',
        isNatureWallpaper: true,
      };
    }

    if (themeMode === 'flow_state') {
      return {
        ...base,
        cardBg: 'rgba(15, 23, 42, 0.78)',
        bgSecondary: 'rgba(20, 32, 60, 0.70)',
        stepActiveBg: 'rgba(28, 43, 78, 0.80)',
        accentGoldLight: 'rgba(30, 41, 59, 0.80)',
        cardBorder: 'rgba(251, 191, 36, 0.36)',
        borderOrnament: 'rgba(251, 191, 36, 0.34)',
        textPrimary: '#FFFFFF',
        textSecondary: '#FDE047',
        textMuted: '#CBD5E1',
        isNatureWallpaper: true,
      };
    }

    if (themeMode === 'amrit_neel' || themeMode === 'mystic_dark') {
      return {
        ...base,
        cardBg: 'rgba(18, 18, 22, 0.76)',
        bgSecondary: 'rgba(28, 28, 34, 0.68)',
        stepActiveBg: 'rgba(42, 34, 24, 0.78)',
        accentGoldLight: 'rgba(48, 38, 24, 0.80)',
        cardBorder: 'rgba(251, 191, 36, 0.26)',
        borderOrnament: 'rgba(251, 191, 36, 0.28)',
        textPrimary: '#F8FAFC',
        textSecondary: '#E2E8F0',
        textMuted: '#CBD5E1',
        isNatureWallpaper: true,
      };
    }

    // bhojpatra default light frosted parchment glass
    return {
      ...base,
      cardBg: 'rgba(255, 253, 249, 0.80)',
      bgSecondary: 'rgba(244, 236, 216, 0.72)',
      stepActiveBg: 'rgba(245, 228, 196, 0.78)',
      accentGoldLight: 'rgba(251, 232, 200, 0.82)',
      cardBorder: 'rgba(180, 128, 65, 0.42)',
      borderOrnament: 'rgba(180, 128, 65, 0.36)',
      textPrimary: '#1A1410',
      textSecondary: '#432E23',
      textMuted: '#5C4332',
      sacredMaroon: '#7F0000',
      accentGold: '#9A3412',
      isNatureWallpaper: true,
    };
  }, [themeMode, activeWallpaperCss]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = themeMode === 'amrit_neel' || themeMode === 'mystic_dark' || themeMode === 'flow_state';
      const root = document.documentElement;
      
      if (isDark) {
        root.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        root.classList.remove('dark');
        document.body.classList.remove('dark');
      }

      root.setAttribute('data-theme', themeMode);
      root.setAttribute('data-has-wallpaper', activeWallpaperCss ? 'true' : 'false');

      // Strictly enforce CSS custom properties on :root for instant reactivity
      root.style.setProperty('--bg-primary', activeTheme.bg);
      root.style.setProperty('--bg-secondary', activeTheme.bgSecondary);
      root.style.setProperty('--card-bg', activeTheme.cardBg);
      root.style.setProperty('--card-border', activeTheme.cardBorder);
      root.style.setProperty('--text-primary', activeTheme.textPrimary);
      root.style.setProperty('--text-secondary', activeTheme.textSecondary);
      root.style.setProperty('--text-muted', activeTheme.textMuted);
      root.style.setProperty('--accent-gold', activeTheme.accentGold);
      root.style.setProperty('--sacred-maroon', activeTheme.sacredMaroon);
      root.style.setProperty('--step-active-bg', activeTheme.stepActiveBg);

      // Font size class update
      const fontSizeClasses = ['font-size-small', 'font-size-normal', 'font-size-medium', 'font-size-large', 'font-size-xlarge', 'font-size-xl', 'font-size-elderly'];
      fontSizeClasses.forEach(c => {
        root.classList.remove(c);
        document.body.classList.remove(c);
      });
      root.classList.add(`font-size-${fontSize}`);
      document.body.classList.add(`font-size-${fontSize}`);

      // Font family & style class update (7 Font Styles)
      const activeFontOpt = getFontStyleOption(fontStyle);
      root.classList.remove('font-granth', 'font-saral');
      document.body.classList.remove('font-granth', 'font-saral');
      FONT_STYLE_OPTIONS.forEach((opt) => {
        root.classList.remove(`font-style-${opt.id}`);
        document.body.classList.remove(`font-style-${opt.id}`);
      });
      const fontClass = fontFamily === 'sans' ? 'font-saral' : 'font-granth';
      root.classList.add(fontClass, `font-style-${activeFontOpt.id}`);
      document.body.classList.add(fontClass, `font-style-${activeFontOpt.id}`);
      root.style.setProperty('--saheb-reading-font', activeFontOpt.stack);
      root.setAttribute('data-font-family', fontFamily);
      root.setAttribute('data-font-style', activeFontOpt.id);

      window.dispatchEvent(new CustomEvent('sahebworld_theme_changed', { detail: themeMode }));
    }
  }, [themeMode, activeTheme, fontSize, fontFamily, fontStyle, activeWallpaperCss]);

  // Cross-component theme sync listener
  useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail !== themeMode) {
        setThemeModeState(customEvent.detail);
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'sahebworld_theme_mode' && e.newValue && e.newValue !== themeMode) {
        setThemeModeState(e.newValue as ThemeMode);
      }
    };

    window.addEventListener('sahebworld_set_theme_mode', handleThemeChange as EventListener);
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('sahebworld_set_theme_mode', handleThemeChange as EventListener);
      window.removeEventListener('storage', handleStorage);
    };
  }, [themeMode]);

  // Cross-component font family & style sync listener
  useEffect(() => {
    const handleFontChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && (customEvent.detail === 'serif' || customEvent.detail === 'sans') && customEvent.detail !== fontFamily) {
        setFontFamilyState(customEvent.detail);
      }
    };

    const handleFontStyleChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && FONT_STYLE_OPTIONS.some((o) => o.id === customEvent.detail) && customEvent.detail !== fontStyle) {
        const opt = getFontStyleOption(customEvent.detail);
        setFontStyleState(opt.id);
        setFontFamilyState(opt.family);
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'sahebworld_fontfamily' && e.newValue && (e.newValue === 'serif' || e.newValue === 'sans') && e.newValue !== fontFamily) {
        setFontFamilyState(e.newValue as 'serif' | 'sans');
      }
      if (e.key === 'sahebworld_font_style' && e.newValue && FONT_STYLE_OPTIONS.some((o) => o.id === e.newValue) && e.newValue !== fontStyle) {
        const opt = getFontStyleOption(e.newValue);
        setFontStyleState(opt.id);
        setFontFamilyState(opt.family);
      }
    };

    window.addEventListener('sahebworld_fontfamily_changed', handleFontChange as EventListener);
    window.addEventListener('sahebworld_fontstyle_changed', handleFontStyleChange as EventListener);
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('sahebworld_fontfamily_changed', handleFontChange as EventListener);
      window.removeEventListener('sahebworld_fontstyle_changed', handleFontStyleChange as EventListener);
      window.removeEventListener('storage', handleStorage);
    };
  }, [fontFamily, fontStyle]);

  const toggleDarkMode = () => {
    const nextMode: ThemeMode = (themeMode === 'amrit_neel' || themeMode === 'mystic_dark') ? 'bhojpatra' : 'amrit_neel';
    setThemeMode(nextMode);
  };

  const contextValue = useMemo(() => ({
    theme: activeTheme, 
    themeMode,
    setThemeMode,
    isDarkMode,
    toggleDarkMode,
    fontSize, 
    setFontSize, 
    lineHeight, 
    setLineHeight, 
    widthMode, 
    setWidthMode,
    fontFamily,
    setFontFamily,
    fontStyle,
    setFontStyle,
    isSahajMode,
    setIsSahajMode,
    isAutoNightMode,
    setIsAutoNightMode,
    isMuted,
    setIsMuted,
    speechRate,
    setSpeechRate,
    readingFramework,
    setReadingFramework,
    autoScrollActive,
    setAutoScrollActive,
    autoScrollSpeed,
    setAutoScrollSpeed,
    zenModeActive,
    setZenModeActive,
    larivaarModeActive,
    setLarivaarModeActive,
    visraamModeActive,
    setVisraamModeActive,
    globalWallpaper,
    setGlobalWallpaper,
    getWallpaperCss
  }), [
    activeTheme,
    themeMode,
    isDarkMode,
    fontSize,
    lineHeight,
    widthMode,
    fontFamily,
    fontStyle,
    isSahajMode,
    isAutoNightMode,
    isMuted,
    speechRate,
    readingFramework,
    autoScrollActive,
    autoScrollSpeed,
    zenModeActive,
    larivaarModeActive,
    visraamModeActive,
    globalWallpaper
  ]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={activeTheme}>
        <GlobalSpiritualStyles theme={activeTheme} $hasWallpaper={!!activeWallpaperCss} />
        {activeWallpaperCss && (
          <div
            id="sahebworld-global-nature-backdrop"
            aria-hidden="true"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 0,
              pointerEvents: 'none',
              backgroundImage: activeWallpaperCss.backgroundImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: activeWallpaperCss.overlay,
              }}
            />
            {/* Low-opacity (0.12) Satguru Kabir Saheb Background Watermark so it never collides with top 🌹 ।। सत्यनाम ।। 🌹 header */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.12,
                pointerEvents: 'none',
                overflow: 'hidden',
              }}
            >
              <img
                src="/Saheb_World_icon.jpg"
                alt=""
                style={{
                  width: '380px',
                  height: '380px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  filter: 'contrast(120%)',
                }}
              />
            </div>
          </div>
        )}
        <StyledAppContainer theme={activeTheme} $transparentBg={!!activeWallpaperCss}>
          {children}
        </StyledAppContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useAppTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useAppTheme must be used within a SpiritualThemeProvider');
  }
  return ctx;
}

// Export ThemeManager hook alias for universal compatibility
export const useThemeManager = useAppTheme;

