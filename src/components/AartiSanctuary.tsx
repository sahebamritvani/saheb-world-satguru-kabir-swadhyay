import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  Bell, 
  Sparkles, 
  Heart, 
  Edit3, 
  Save, 
  Copy, 
  Check, 
  RotateCcw, 
  Sun, 
  Moon, 
  Scroll, 
  PlusCircle, 
  Trash2,
  Volume2,
  VolumeX,
  Feather,
  Music,
  X,
  Mic,
  MicOff,
  ArrowLeft,
  Wind,
  BookOpen
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import {
  PRABHAT_AARTI_1_SECTION,
  PRABHAT_AARTI_2_SECTION,
  PRABHAT_AARTI_3_SECTION,
  PRABHAT_AARTI_4_SECTION
} from '../data/nitnem/prabhatAartis';

interface AartiSanctuaryProps {
  language: Language;
  onSelectLanguage?: (lang: Language) => void;
  onClose?: () => void;
  onOpenBlessing?: (title?: string, msg?: string) => void;
}

export type AartiSection = 'aarti1' | 'aarti2' | 'aarti3' | 'aarti4' | 'prabhat' | 'bhog';

export const AUTHENTIC_AARTI_DEFAULTS: Record<AartiSection, Record<Language, string>> = {
  aarti1: {
    hi: `।।सत्यनाम।।
आरती-१

जय जय सत्य कबीर, गुरु जय जय सत्य कबीर।
अजर अमर हो साहेब, अजर अमर हो साहेब।
चारों युग के पीर, गुरु जय जय सत्य कबीर।
जय जय सत्य कबीर, गुरु जय जय सत्य कबीर।

सत्यनाम सत सुकृत, सतरत हतकामी, विगत कलेश सतधामी त्रिभुवन पति स्वामी। टेक।

जयति जयति कब्बीरं, नाशक भवपीरं, धारयो मनुज शरीरं, शिशु वर सरतीरं।
गुरु जय जय सत्य कबीर....

कमल पत्र पर शोभित शोभाजित कैसे, नीलाचल पर राजित मुक्तिमणि जैसे।
गुरु जय जय सत्य कबीर….

परम मनोहर रूपम् प्रमुदित सुख राशि, अति अभिनव अविनाशी काशी पुरवासी ।
गुरु जय जय सत्य कबीर....

हंस उबारन कारण, प्रगटे तनधारी, पारख रूप बिहारी अविचल अविकारी ।
गुरु जय जय सत्य कबीर...

साहेब कबीर की आरती ,अगणित अघहारी।
धर्मदास बलिहारी, मुद मंगलकारी ।
गुरु जय जय सत्य कबीर...

साहेब कबीर की आरती जो कोई गावै ।
भक्ति पदारथ पावै मुक्ति पदारथ पावै ,भव में नही आवे ।
गुरु जय जय सत्य कबीर...

जय जय सत्य कबीर, गुरु जय जय सत्य कबीर।
अजर अमर हो साहेब ,अजर अमर हो साहेब ।
चारों युग के पीर,गुरु जय जय सत्य कबीर।
जय जय सत्य कबीर, गुरु जय जय सत्य कबीर।

।। साहेब बंदगी साहेब ।।`,
    pb: `।।ਸਤ੍ਯਨਾਮ।।
ਆਰਤੀ-੧

ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ, ਗੁਰੂ ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ।
ਅਜਰ ਅਮਰ ਹੋ ਸਾਹੇਬ, ਅਜਰ ਅਮਰ ਹੋ ਸਾਹੇਬ।
ਚਾਰੋਂ ਯੁਗ ਕੇ ਪੀਰ, ਗੁਰੂ ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ।
ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ, ਗੁਰੂ ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ।

ਸਤ੍ਯਨਾਮ ਸਤ ਸੁਕ੍ਰਿਤ, ਸਤਰਤ ਹਤਕਾਮੀ, ਵਿਗਤ ਕਲੇਸ਼ ਸਤਧਾਮੀ ਤ੍ਰਿਭੁਵਨ ਪਤਿ ਸ੍ਵਾਮੀ। ਟੇਕ।

ਜਯਤਿ ਜਯਤਿ ਕੱਬੀਰੰ, ਨਾਸ਼ਕ ਭਵਪੀਰੰ, ਧਾਰ੍ਯੋ ਮਨੁਜ ਸ਼ਰੀਰੰ, ਸ਼ਿਸ਼ੁ ਵਰ ਸਰਤੀਰੰ।
ਗੁਰੂ ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ....

ਕਮਲ ਪਤ੍ਰ ਪਰ ਸ਼ੋਭਿਤ ਸ਼ੋਭਾਜਿਤ ਕੈਸੇ, ਨੀਲਾਚਲ ਪਰ ਰਾਜਿਤ ਮੁਕ੍ਤਿਮਣਿ ਜੈਸੇ।
ਗੁਰੂ ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ….

ਪਰਮ ਮਨੋਹਰ ਰੂਪਮ੍ ਪ੍ਰਮੁਦਿਤ ਸੁਖ ਰਾਸ਼ਿ, ਅਤਿ ਅਭਿਨਵ ਅਵਿਨਾਸ਼ੀ ਕਾਸ਼ੀ ਪੁਰਵਾਸੀ।
ਗੁਰੂ ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ....

ਹੰਸ ਉਬਾਰਨ ਕਾਰਣ, ਪ੍ਰਗਟੇ ਤਨਧਾਰੀ, ਪਾਰਖ ਰੂਪ ਬਿਹਾਰੀ ਅਵਿਚਲ ਅਵਿਕਾਰੀ।
ਗੁਰੂ ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ...

ਸਾਹੇਬ ਕਬੀਰ ਕੀ ਆਰਤੀ, ਅਗਣਿਤ ਅਘਹਾਰੀ।
ਧਰਮਦਾਸ ਬਲਿਹਾਰੀ, ਮੁਦ ਮੰਗਲਕਾਰੀ।
ਗੁਰੂ ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ...

ਸਾਹੇਬ ਕਬੀਰ ਕੀ ਆਰਤੀ ਜੋ ਕੋਈ ਗਾਵੈ।
ਭਕ੍ਤਿ ਪਦਾਰਥ ਪਾਵੈ ਮੁਕ੍ਤਿ ਪਦਾਰਥ ਪਾਵੈ, ਭਵ ਮੇਂ ਨਹੀ ਆਵੈ।
ਗੁਰੂ ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ...

ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ, ਗੁਰੂ ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ।
ਅਜਰ ਅਮਰ ਹੋ ਸਾਹੇਬ, ਅਜਰ ਅਮਰ ਹੋ ਸਾਹੇਬ।
ਚਾਰੋਂ ਯੁਗ ਕੇ ਪੀਰ, ਗੁਰੂ ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ।
ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ, ਗੁਰੂ ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ।

।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।`,
    en: `।। Satyanaam ।।
Aarti - 1

Jai Jai Satya Kabir, Guru Jai Jai Satya Kabir.
Ajar Amar Ho Saheb, Ajar Amar Ho Saheb.
Charon Yug Ke Peer, Guru Jai Jai Satya Kabir.
Jai Jai Satya Kabir, Guru Jai Jai Satya Kabir.

Satyanaam Sat Sukrit, Satrat Hatkaami, Vigat Kalesh Satdhami Tribhuvan Pati Swami. (Refrain)

Jayati Jayati Kabbiram, Nashak Bhav-peeram, Dharyo Manuj Shariram, Shishu Var Sartiiram.
Guru Jai Jai Satya Kabir...

Kamal Patra Par Shobhit Shobhajit Kaise, Neelachal Par Rajit Muktimani Jaise.
Guru Jai Jai Satya Kabir...

Param Manohar Rupam Pramudit Sukh Rashi, Ati Abhinav Avinashi Kashi Purvasi.
Guru Jai Jai Satya Kabir...

Hansa Ubaaran Kaaran, Pragte Tandhari, Paarakh Roop Bihari Avichal Avikaari.
Guru Jai Jai Satya Kabir...

Saheb Kabir Ki Aarti, Aganit Agh-hari.
Dharmadas Balihari, Mud Mangalkaari.
Guru Jai Jai Satya Kabir...

Saheb Kabir Ki Aarti Jo Koyi Gaavai,
Bhakti Padarath Paavai Mukti Padarath Paavai, Bhav Mein Nahi Aavai.
Guru Jai Jai Satya Kabir...

Jai Jai Satya Kabir, Guru Jai Jai Satya Kabir.
Ajar Amar Ho Saheb, Ajar Amar Ho Saheb.
Charon Yug Ke Peer, Guru Jai Jai Satya Kabir.
Jai Jai Satya Kabir, Guru Jai Jai Satya Kabir.

।। Saheb Bandagi Saheb ।।`
  },
  aarti2: {
    hi: `।।सत्यनाम।।
आरती-२

आरती हो साहेब आरती हो ।
आरती गरीब निवाज, साहेब आरती हो ।
आरती दीन दयाल, साहेब आरती हो ।

ज्ञान आधार विवेक की बाती, सुरति जोत जहं जाग ।
साहेब आरती हो...

आरती करूँ सतगुरु साहेब की गुरु साहेब की , जहाँ सब सन्त समाज ।
साहेब आरती हो...

दरस परस मन बहुत आनंद भयो गुरू चरण शरण भयो, छुट्टी गयो यम को जाल ।
साहेब आरती हो...

साहेब कबीर संतन की कृपा से, भयो है परम परकाश ।
साहेब आरती हो...

सत्य कबीर की आरती जो कोई नर गावै ।
भक्ति पदारथ पावै मुक्ति पदारथ पावै ,भव में नही आवे ॥

आरती हो साहेब आरती हो ।
आरती गरीब निवाज, साहेब आरती हो ।
आरती दीन दयाल, साहेब आरती हो ।

।।साहेब बंदगी साहेब।।`,
    pb: `।।ਸਤ੍ਯਨਾਮ।।
ਆਰਤੀ-੨

ਆਰਤੀ ਹੋ ਸਾਹੇਬ ਆਰਤੀ ਹੋ।
ਆਰਤੀ ਗ਼ਰੀਬ ਨਿਵਾਜ਼, ਸਾਹੇਬ ਆਰਤੀ ਹੋ।
ਆਰਤੀ ਦੀਨ ਦਿਆਲ, ਸਾਹੇਬ ਆਰਤੀ ਹੋ।

ਗਿਆਨ ਆਧਾਰ ਬਿਬੇਕ ਕੀ ਬਾਤੀ, ਸੁਰਤਿ ਜੋਤਿ ਜਹਾਂ ਜਾਗ।
ਸਾਹੇਬ ਆਰਤੀ ਹੋ...

ਆਰਤੀ ਕਰੂੰ ਸਤਿਗੁਰੂ ਸਾਹੇਬ ਕੀ ਗੁਰੂ ਸਾਹੇਬ ਕੀ, ਜਹਾਂ ਸਬ ਸੰਤ ਸਮਾਜ।
ਸਾਹੇਬ ਆਰਤੀ ਹੋ...

ਦਰਸ ਪਰਸ ਮਨ ਬਹੁਤ ਆਨੰਦ ਭਯੋ ਗੁਰੂ ਚਰਣ ਸ਼ਰਣ ਭਯੋ, ਛੁੱਟੀ ਗਯੋ ਯਮ ਕੋ ਜਾਲ।
ਸਾਹੇਬ ਆਰਤੀ ਹੋ...

ਸਾਹੇਬ ਕਬੀਰ ਸੰਤਨ ਕੀ ਕ੍ਰਿਪਾ ਸੇ, ਭਯੋ ਹੈ ਪਰਮ ਪਰਕਾਸ਼।
ਸਾਹੇਬ ਆਰਤੀ ਹੋ...

ਸਤ੍ਯ ਕਬੀਰ ਕੀ ਆਰਤੀ ਜੋ ਕੋਈ ਨਰ ਗਾਵੈ।
ਭਕ੍ਤਿ ਪਦਾਰਥ ਪਾਵੈ ਮੁਕ੍ਤਿ ਪਦਾਰਥ ਪਾਵੈ, ਭਵ ਮੇਂ ਨਹੀ ਆਵੈ॥

ਆਰਤੀ ਹੋ ਸਾਹੇਬ ਆਰਤੀ ਹੋ।
ਆਰਤੀ ਗ਼ਰੀਬ ਨਿਵਾਜ਼, ਸਾਹੇਬ ਆਰਤੀ ਹੋ।
ਆਰਤੀ ਦੀਨ ਦਿਆਲ, ਸਾਹੇਬ ਆਰਤੀ ਹੋ।

।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।`,
    en: `।। Satyanaam ।।
Aarti - 2

Aarti Ho Saheb Aarti Ho.
Aarti Gareeb Niwaaj, Saheb Aarti Ho.
Aarti Deen Dayaal, Saheb Aarti Ho.

Gyan Aadhar Vivek Ki Baati, Surati Jyot Jahaan Jaag.
Saheb Aarti Ho...

Aarti Karoon Satguru Saheb Ki Guru Saheb Ki, Jahaan Sab Sant Samaaj.
Saheb Aarti Ho...

Daras Paras Man Bahut Anand Bhayo Guru Charan Sharan Bhayo, Chhutti Gayo Yam Ko Jaal.
Saheb Aarti Ho...

Saheb Kabir Santan Ki Kripa Se, Bhayo Hai Param Prakash.
Saheb Aarti Ho...

Satya Kabir Ki Aarti Jo Koyi Nar Gaavai,
Bhakti Padarath Paavai Mukti Padarath Paavai, Bhav Mein Nahi Aavai.

Aarti Ho Saheb Aarti Ho.
Aarti Gareeb Niwaaj, Saheb Aarti Ho.
Aarti Deen Dayaal, Saheb Aarti Ho.

।। Saheb Bandagi Saheb ।।`
  },
  aarti3: {
    hi: `।।सत्यनाम।।
आरती-३

जय जय श्री गुरुदेव ,जय जय श्री गुरुदेव ।।

पारख रूप कृपालम्, मुदमय त्रियकालम् ।
मानस साधु मरालं नाशक भव जालम् ॥
जय जय श्री गुरुदेव...

कुन्द इन्दु वर सुन्दर सन्तन हितकारी ।
शान्ताकार शरीरं, श्वेताम्बर धारी ॥
जय जय श्री गुरुदेव...

श्वेत मुकुट चक्रांकित मस्तक पर सोहे।
शुभ्र तिलक युत भृकुटि लखि मुनिमन मोहे ॥
जय जय श्री गुरुदेव...

हीरामणि मुक्तादिक भूषित उरुदेशम ।
पद्मासन् सिंहासन स्थित मंगलभेषम् ॥
जय जय श्री गुरुदेव...

तरुण अरुण कंजांघ्रि जन मन वशकारी ।
तम अज्ञान प्रहारी नखद्युति अति भारी ॥
जय जय श्री गुरुदेव...

सत्य कबीर की आरती जो कोई नर गावै ।
भक्ति पदारथ पावै मुक्ति पदारथ पावै , भव में नही आवे ॥
जय जय श्री गुरुदेव...

जय जय श्री गुरुदेव ,जय जय श्री गुरुदेव ।।
पारख रूप कृपालम्, मुदमय त्रियकालम् ।
मानस साधु मरालं नाशक भव जालम् ॥
जय जय श्री गुरुदेव…

।।साहेब बंदगी साहेब।।`,
    pb: `।।ਸਤ੍ਯਨਾਮ।।
ਆਰਤੀ-੩

ਜੈ ਜੈ ਸ਼੍ਰੀ ਗੁਰੂਦੇਵ, ਜੈ ਜੈ ਸ਼੍ਰੀ ਗੁਰੂਦੇਵ।।

ਪਾਰਖ ਰੂਪ ਕ੍ਰਿਪਾਲਮ੍, ਮੁਦਮਯ ਤ੍ਰਿਯਕਾਲਮ੍।
ਮਾਨਸ ਸਾਧੁ ਮਰਾਲੰ ਨਾਸ਼ਕ ਭਵ ਜਾਲਮ੍॥
ਜੈ ਜੈ ਸ਼੍ਰੀ ਗੁਰੂਦੇਵ...

ਕੁੰਦ ਇੰਦੁ ਵਰ ਸੁੰਦਰ ਸੰਤਨ ਹਿਤਕਾਰੀ।
ਸ਼ਾਂਤਾਕਾਰ ਸ਼ਰੀਰੰ, ਸ਼੍ਵੇਤਾਂਬਰ ਧਾਰੀ॥
ਜੈ ਜੈ ਸ਼੍ਰੀ ਗੁਰੂਦੇਵ...

ਸ਼੍ਵੇਤ ਮੁਕੁਟ ਚਕ੍ਰਾਂਕਿਤ ਮਸ੍ਤਕ ਪਰ ਸੋਹੇ।
ਸ਼ੁਭ੍ਰ ਤਿਲਕ ਯੁਤ ਭ੍ਰਿਕੁਟਿ ਲਖਿ ਮੁਨਿਮਨ ਮੋਹੇ॥
ਜੈ ਜੈ ਸ਼੍ਰੀ ਗੁਰੂਦੇਵ...

ਹੀਰਾਮਣਿ ਮੁਕ੍ਤਾਦਿਕ ਭੂਸ਼ਿਤ ਉਰੁਦੇਸ਼ਮ੍।
ਪਦ੍ਮਾਸਨ ਸਿੰਘਾਸਨ ਸ੍ਥਿਤ ਮੰਗਲਭੇਸ਼ਮ੍॥
ਜੈ ਜੈ ਸ਼੍ਰੀ ਗੁਰੂਦੇਵ...

ਤਰੁਣ ਅਰੁਣ ਕੰਜਾਂਘ੍ਰਿ ਜਨ ਮਨ ਵਸ਼ਕਾਰੀ।
ਤਮ ਅਗਿਆਨ ਪ੍ਰਹਾਰੀ ਨਖਦ੍ਯੁਤਿ ਅਤਿ ਭਾਰੀ॥
ਜੈ ਜੈ ਸ਼੍ਰੀ ਗੁਰੂਦੇਵ...

ਸਤ੍ਯ ਕਬੀਰ ਕੀ ਆਰਤੀ ਜੋ ਕੋਈ ਨਰ ਗਾਵੈ।
ਭਕ੍ਤਿ ਪਦਾਰਥ ਪਾਵੈ ਮੁਕ੍ਤਿ ਪਦਾਰਥ ਪਾਵੈ, ਭਵ ਮੇਂ ਨਹੀ ਆਵੈ॥
ਜੈ ਜੈ ਸ਼੍ਰੀ ਗੁਰੂਦੇਵ...

ਜੈ ਜੈ ਸ਼੍ਰੀ ਗੁਰੂਦੇਵ, ਜੈ ਜੈ ਸ਼੍ਰੀ ਗੁਰੂਦੇਵ।।
ਪਾਰਖ ਰੂਪ ਕ੍ਰਿਪਾਲਮ੍, ਮੁਦਮਯ ਤ੍ਰਿਯਕਾਲਮ੍।
ਮਾਨਸ ਸਾਧੁ ਮਰਾਲੰ ਨਾਸ਼ਕ ਭਵ ਜਾਲਮ੍॥
ਜੈ ਜੈ ਸ਼੍ਰੀ ਗੁਰੂਦੇਵ…

।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।`,
    en: `।। Satyanaam ।।
Aarti - 3

Jai Jai Shri Gurudev, Jai Jai Shri Gurudev.

Paarakh Roop Kripaalam, Mudmay Triyakaalam.
Maanas Saadhu Maraalam Naashak Bhav Jaalam.
Jai Jai Shri Gurudev...

Kund Indu Var Sundar Santan Hitkaari.
Shaantaakaar Shariram, Shwetaambar Dhaari.
Jai Jai Shri Gurudev...

Shwet Mukut Chakraankit Mastak Par Sohe.
Shubhra Tilak Yut Bhrikuti Lakhi Muniman Mohe.
Jai Jai Shri Gurudev...

Heeraamani Muktaadik Bhooshit Urudesham.
Padmaasan Singhasan Sthit Mangal-bhesham.
Jai Jai Shri Gurudev...

Tarun Arun Kanjanghri Jan Man Vashkaari.
Tam Agyaan Prahari Nakh-dyuti Ati Bhaari.
Jai Jai Shri Gurudev...

Satya Kabir Ki Aarti Jo Koyi Nar Gaavai,
Bhakti Padarath Paavai Mukti Padarath Paavai, Bhav Mein Nahi Aavai.
Jai Jai Shri Gurudev...

Jai Jai Shri Gurudev, Jai Jai Shri Gurudev.
Paarakh Roop Kripaalam, Mudmay Triyakaalam.
Maanas Saadhu Maraalam Naashak Bhav Jaalam.
Jai Jai Shri Gurudev...

।। Saheb Bandagi Saheb ।।`
  },
  aarti4: {
    hi: `।।सत्यनाम।।
आरती-४

आरति सत्यनाम की कीजै । 
जीवन जनम सुफल कर लीजै ॥

अग्र की थार अनुपम बाती । 
ज्योति प्रकाश करे दिन राती ॥
आरति सत्यनाम की कीजै..

मुरली ध्वनि अनूपम बाजे । 
शब्द अनाहद धनु तहँ गाजे ॥
आरति सत्यनाम की कीजै…

त्रिकुटी संगम झलके हीरा ।
चरण कमल चित राखु शरीरा ।।
आरति सत्यनाम की कीजै…

सतसुकृति आरति चित दीजे । 
तन मन धनहि निछावरि कीजै ॥
आरति सत्यनाम की कीजै…

सत्य कबीर की आरती जो कोई नर गावे।
भक्ति पदार्थ पावे , मुक्ति पदार्थ पावे भव में नहीं आवे।।

आरति सत्यनाम की कीजै । 
जीवन जनम सुफल कर लीजै ।।

।।साहेब बंदगी साहेब।।`,
    pb: `।।ਸਤ੍ਯਨਾਮ।।
ਆਰਤੀ-੪

ਆਰਤੀ ਸਤ੍ਯਨਾਮ ਕੀ ਕੀਜੈ।
ਜੀਵਨ ਜਨਮ ਸੁਫਲ ਕਰ ਲੀਜੈ॥

ਅਗ੍ਰ ਕੀ ਥਾਰ ਅਨੂਪਮ ਬਾਤੀ।
ਜ੍ਯੋਤਿ ਪ੍ਰਕਾਸ਼ ਕਰੇ ਦਿਨ ਰਾਤੀ॥
ਆਰਤੀ ਸਤ੍ਯਨਾਮ ਕੀ ਕੀਜੈ..

ਮੁਰਲੀ ਧ੍ਵਨਿ ਅਨੂਪਮ ਬਾਜੇ।
ਸ਼ਬ੍ਦ ਅਨਾਹਦ ਧਨੁ ਤਹਾਂ ਗਾਜੇ॥
ਆਰਤੀ ਸਤ੍ਯਨਾਮ ਕੀ ਕੀਜੈ…

ਤ੍ਰਿਕੁਟੀ ਸੰਗਮ ਝਲਕੇ ਹੀਰਾ।
ਚਰਣ ਕਮਲ ਚਿਤ ਰਾਖੁ ਸ਼ਰੀਰਾ।।
ਆਰਤੀ ਸਤ੍ਯਨਾਮ ਕੀ ਕੀਜੈ…

ਸਤਸੁਕ੍ਰਿਤਿ ਆਰਤੀ ਚਿਤ ਦੀਜੇ।
ਤਨ ਮਨ ਧਨਹਿ ਨਿਛਾਵਰਿ ਕੀਜੈ॥
ਆਰਤੀ ਸਤ੍ਯਨਾਮ ਕੀ ਕੀਜੈ…

ਸਤ੍ਯ ਕਬੀਰ ਕੀ ਆਰਤੀ ਜੋ ਕੋਈ ਨਰ ਗਾਵੈ।
ਭਕ੍ਤਿ ਪਦਾਰਥ ਪਾਵੈ, ਮੁਕ੍ਤਿ ਪਦਾਰਥ ਪਾਵੈ ਭਵ ਮੇਂ ਨਹੀ ਆਵੈ।।

ਆਰਤੀ ਸਤ੍ਯਨਾਮ ਕੀ ਕੀਜੈ।
ਜੀਵਨ ਜਨਮ ਸੁਫਲ ਕਰ ਲੀਜੈ।।

।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।`,
    en: `।। Satyanaam ।।
Aarti - 4

Aarti Satyanaam Ki Keejai.
Jeevan Janam Sufal Kar Leejai.

Agra Ki Thaar Anupam Baati.
Jyoti Prakash Kare Din Raati.
Aarti Satyanaam Ki Keejai...

Murli Dhwani Anupam Baaje.
Shabd Anaahad Dhanu Tahan Gaaje.
Aarti Satyanaam Ki Keejai...

Trikuti Sangam Jhalke Heera.
Charan Kamal Chit Raakhu Sharira.
Aarti Satyanaam Ki Keejai...

Satsukriti Aarti Chit Deeje.
Tan Man Dhan-hi Nichhaavari Keejai.
Aarti Satyanaam Ki Keejai...

Satya Kabir Ki Aarti Jo Koyi Nar Gaave,
Bhakti Padarath Paave, Mukti Padarath Paave Bhav Mein Nahi Aave.

Aarti Satyanaam Ki Keejai.
Jeevan Janam Sufal Kar Leejai.

।। Saheb Bandagi Saheb ।।`
  },
  prabhat: {
    hi: `।।सत्यनाम।।
प्रभात मंगल गान
सतगुरु कबीराय नमः

उठ जाग मुसाफिर भोर भई, अब रैन कहाँ जो सोवत है।
जो सोवत है सो खोवत है, जो जागत है सो पावत है॥

टुक नींद से अंखियां खोल जरा, अपने प्रभु के गुण गाए ले।
सतगुरु के चरणन शीश नवा, जनम पदारथ पाए ले॥

।।साहेब बंदगी साहेब।।`,
    pb: `।।ਸਤ੍ਯਨਾਮ।।
ਪ੍ਰਭਾਤ ਮੰਗਲ ਗਾਨ
ਸਤਿਗੁਰੂ ਕਬੀਰਾਯ ਨਮਃ

ਉਠ ਜਾਗ ਮੁਸਾਫ਼ਿਰ ਭੋਰ ਭਈ, ਅਬ ਰੈਨ ਕਹਾਂ ਜੋ ਸੋਵਤ ਹੈ।
ਜੋ ਸੋਵਤ ਹੈ ਸੋ ਖੋਵਤ ਹੈ, ਜੋ ਜਾਗਤ ਹੈ ਸੋ ਪਾਵਤ ਹੈ॥

ਟੁਕ ਨੀਂਦ ਸੇ ਅੱਖੀਆਂ ਖੋਲ੍ਹ ਜ਼ਰਾ, ਅਪਣੇ ਪ੍ਰਭੂ ਕੇ ਗੁਣ ਗਾਏ ਲੇ।
ਸਤਿਗੁਰੂ ਕੇ ਚਰਨਨ ਸੀਸ ਨਿਵਾ, ਜਨਮ ਪਦਾਰਥ ਪਾਏ ਲੇ॥

।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।`,
    en: `।। Satyanaam ।।
Morning Mangal Gaan
Satguru Kabiraya Namah

Wake up, seeker, the sacred dawn has arrived; why slumber away in darkness?
One who sleeps loses the golden hour; one who awakens discovers the supreme treasure.

Open your eyes from the sleep of delusion, sing the glory of the Supreme Lord.
Bow at the lotus feet of Satguru Kabir and fulfill the highest purpose of this human birth.

।। Saheb Bandagi Saheb ।।`
  },
  bhog: {
    hi: `।।सत्यनाम।।
भोग आरती एवं बंदगी पाठ
सतगुरु कबीराय नमः

आरती सतगुरु कीजै, भोग लगाइए पावन।
शीतल निर्मल भोग बनायो, प्रेम सुधा रस सावन॥

तन मन धन सब अर्पण कीन्हो, चरण शरण चित लायो।
साहेब कबीर दया के सागर, जीवन सफल करायो॥

।।साहेब बंदगी साहेब।।`,
    pb: `।।ਸਤ੍ਯਨਾਮ।।
ਭੋਗ ਆਰਤੀ ਤੇ ਬੰਦਗੀ ਪਾਠ
ਸਤਿਗੁਰੂ ਕਬੀਰਾਯ ਨਮਃ

ਆਰਤੀ ਸਤਿਗੁਰੂ ਕੀਜੈ, ਭੋਗ ਲਗਾਈਏ ਪਾਵਨ।
ਸ਼ੀਤਲ ਨਿਰਮਲ ਭੋਗ ਬਨਾਯੋ, ਪ੍ਰੇਮ ਸੁਧਾ ਰਸ ਸਾਵਨ॥

ਤਨ ਮਨ ਧਨ ਸਬ ਅਰਪਣ ਕੀਨ੍ਹੋ, ਚਰਣ ਸ਼ਰਣ ਚਿਤ ਲਾਯੋ।
ਸਾਹੇਬ ਕਬੀਰ ਦਯਾ ਕੇ ਸਾਗਰ, ਜੀਵਨ ਸਫਲ ਕਰਾਯੋ॥

।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।`,
    en: `।। Satyanaam ।।
Bhog Aarti & Bandagi Path
Satguru Kabiraya Namah

Offer pure devotion and sacred sanctified Bhog at the lotus feet of Satguru.
Prepared with pristine love and divine nectar of nectarine surrender.

Offering body, mind, and soul in surrender to Satguru Kabir, the ocean of eternal grace.
He bestows divine compassion and crowns this earthly life with fulfillment.

।। Saheb Bandagi Saheb ।।`
  }
};

export const AARTI_BHAVARTH_MAP: Record<AartiSection, Array<{ lines: { hi: string[]; pb?: string[]; en?: string[] }; bhavarth: { hi: string; pb?: string; en?: string } }>> = {
  aarti1: PRABHAT_AARTI_1_SECTION.verses.map(v => ({ lines: v.lines, bhavarth: v.bhavarth || { hi: '' } })),
  aarti2: PRABHAT_AARTI_2_SECTION.verses.map(v => ({ lines: v.lines, bhavarth: v.bhavarth || { hi: '' } })),
  aarti3: PRABHAT_AARTI_3_SECTION.verses.map(v => ({ lines: v.lines, bhavarth: v.bhavarth || { hi: '' } })),
  aarti4: PRABHAT_AARTI_4_SECTION.verses.map(v => ({ lines: v.lines, bhavarth: v.bhavarth || { hi: '' } })),
  prabhat: [
    {
      lines: {
        hi: [
          "उठ जाग मुसाफिर भोर भई, अब रैन कहाँ जो सोवत है।",
          "जो सोवत है सो खोवत है, जो जागत है सो पावत है॥"
        ],
        pb: [
          "ਉਠ ਜਾਗ ਮੁਸਾਫ਼ਿਰ ਭੋਰ ਭਈ, ਅਬ ਰੈਨ ਕਹਾਂ ਜੋ ਸੋਵਤ ਹੈ।",
          "ਜੋ ਸੋਵਤ ਹੈ ਸੋ ਖੋਵਤ ਹੈ, ਜੋ ਜਾਗਤ ਹੈ ਸੋ ਪਾਵਤ ਹੈ॥"
        ],
        en: [
          "Wake up, seeker, the sacred dawn has arrived; why slumber away in darkness?",
          "One who sleeps loses the golden hour; one who awakens discovers the supreme treasure."
        ]
      },
      bhavarth: {
        hi: "हे जीवात्मा! अज्ञान की रात्रि बीत चुकी है और ज्ञान व चेतना की पावन भोर हो गई है। अब मोह-निद्रा त्यागकर जागो। जो प्रमाद में सोता रहता है वह अमूल्य अवसर खो देता है, और जो ज्ञान में जागता है वह परमात्मा का परम अनुग्रह प्राप्त करता है।",
        pb: "ਹੇ ਜੀਵ! ਅਗਿਆਨ ਦੀ ਰਾਤ ਬੀਤ ਚੁੱਕੀ ਹੈ ਤੇ ਚੇਤਨਾ ਦੀ ਸਵੇਰ ਹੋਈ ਹੈ। ਹੁਣ ਜਾਗੋ; ਜੋ ਸੌਂਦਾ ਹੈ ਉਹ ਗੁਆਉਂਦਾ ਹੈ, ਜੋ ਜਾਗਦਾ ਹੈ ਉਹ ਨਾਮ-ਧਨ ਪਾਉਂਦਾ ਹੈ।",
        en: "O soul, the night of spiritual ignorance has passed and the divine dawn has broken. Awake from delusion; one who slumbers loses the golden chance, while the awakened soul attains the supreme grace."
      }
    },
    {
      lines: {
        hi: [
          "टुक नींद से अंखियां खोल जरा, अपने प्रभु के गुण गाए ले।",
          "सतगुरु के चरणन शीश नवा, जनम पदारथ पाए ले॥"
        ],
        pb: [
          "ਟੁਕ ਨੀਂਦ ਸੇ ਅੱਖੀਆਂ ਖੋਲ੍ਹ ਜ਼ਰਾ, ਅਪਣੇ ਪ੍ਰਭੂ ਕੇ ਗੁਣ ਗਾਏ ਲੇ।",
          "ਸਤਿਗੁਰੂ ਕੇ ਚਰਨਨ ਸੀਸ ਨਿਵਾ, ਜਨਮ ਪਦਾਰਥ ਪਾਏ ਲੇ॥"
        ],
        en: [
          "Open your eyes from the sleep of delusion, sing the glory of the Supreme Lord.",
          "Bow at the lotus feet of Satguru Kabir and fulfill the highest purpose of this human birth."
        ]
      },
      bhavarth: {
        hi: "अज्ञान और आलस्य के वशीभूत होकर व्यर्थ समय न गंवाओ; अपनी आँखें खोलो और परमपिता साहेब के पावन गुण गाओ। सतगुरु के पावन चरणों में शीश नवाकर इस अमूल्य मानव जीवन को सफल व सार्थक बनाओ।",
        pb: "ਅੱਖਾਂ ਖੋਲ੍ਹ ਕੇ ਪ੍ਰਭੂ ਦੇ ਗੁਣ ਗਾਓ ਅਤੇ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਸੀਸ ਨਿਵਾ ਕੇ ਮਨੁੱਖਾ ਜਨਮ ਸਫਲ ਬਣਾਓ।",
        en: "Do not waste precious moments in illusion. Open your eyes, sing the praises of the Lord, and bow at the Satguru's lotus feet to fulfill the sacred destiny of this human life."
      }
    }
  ],
  bhog: [
    {
      lines: {
        hi: [
          "आरती सतगुरु कीजै, भोग लगाइए पावन।",
          "शीतल निर्मल भोग बनायो, प्रेम सुधा रस सावन॥"
        ],
        pb: [
          "ਆਰਤੀ ਸਤਿਗੁਰੂ ਕੀਜੈ, ਭੋਗ ਲਗਾਈਏ ਪਾਵਨ।",
          "ਸ਼ੀਤਲ ਨਿਰਮਲ ਭੋਗ ਬਨਾਯੋ, ਪ੍ਰੇਮ ਸੁਧਾ ਰਸ ਸਾਵਨ॥"
        ],
        en: [
          "Offer pure devotion and sacred sanctified Bhog at the lotus feet of Satguru.",
          "Prepared with pristine love and divine nectar of nectarine surrender."
        ]
      },
      bhavarth: {
        hi: "सतगुरु के पावन चरणों में पूर्ण निष्ठा से आरती कर पवित्र भोग समर्पित करें। यह भोग शुद्ध भाव, निर्मल चित्त और प्रेम रूपी अमृत-रस से परिपूर्ण होकर तैयार किया गया है।",
        pb: "ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਪਵਿੱਤਰ ਭੋਗ ਅਰਪਣ ਕਰੋ, ਜੋ ਪ੍ਰੇਮ-ਅੰਮ੍ਰਿਤ ਨਾਲ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ।",
        en: "Perform the sacred Aarti of the Satguru and offer this pure consecrated Bhog, prepared with spotless devotion and the nectar of divine love."
      }
    },
    {
      lines: {
        hi: [
          "तन मन धन सब अर्पण कीन्हो, चरण शरण चित लायो।",
          "साहेब कबीर दया के सागर, जीवन सफल करायो॥"
        ],
        pb: [
          "ਤਨ ਮਨ ਧਨ ਸਬ ਅਰਪਣ ਕੀਨ੍ਹੋ, ਚਰਣ ਸ਼ਰਣ ਚਿਤ ਲਾਯੋ।",
          "ਸਾਹੇਬ ਕਬੀਰ ਦਯਾ ਕੇ ਸਾਗਰ, ਜੀਵਨ ਸਫਲ ਕਰਾਯੋ॥"
        ],
        en: [
          "Offering body, mind, and soul in surrender to Satguru Kabir, the ocean of eternal grace.",
          "He bestows divine compassion and crowns this earthly life with fulfillment."
        ]
      },
      bhavarth: {
        hi: "अपना तन, मन और धन सब कुछ गुरु चरणों में समर्पित कर चित्त को उनकी शरण में लगा दिया है। दया के अगाध सागर साहेब कबीर कृपा कर इस जीवन को चौरासी के बंधन से मुक्त कर सफल बना देते हैं।",
        pb: "ਤਨ-ਮਨ-ਧਨ ਅਰਪਣ ਕਰਕੇ ਗੁਰੂ-ਸ਼ਰਨ ਲਈ ਹੈ। ਦਇਆ ਦੇ ਸਾਗਰ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਜੀਵਨ ਸਫਲ ਕਰ ਦਿੱਤਾ ਹੈ।",
        en: "Surrendering body, mind, and wealth at the Master's feet, the mind finds eternal refuge. Kabir Saheb, the infinite ocean of mercy, frees the soul from rebirth and blesses life with ultimate liberation."
      }
    }
  ]
};

export const AartiSanctuary: React.FC<AartiSanctuaryProps> = ({
  language,
  onSelectLanguage,
  onClose,
  onOpenBlessing
}) => {
  const { theme } = useAppTheme();
  const [activeSection, setActiveSection] = useState<AartiSection>('aarti1');
  const [isDiyaBurning, setIsDiyaBurning] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('large');
  const [viewWithBhavarth, setViewWithBhavarth] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isVocalRecitation, setIsVocalRecitation] = useState<boolean>(true);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);
  const isCancelledRef = useRef<boolean>(false);

  // Stored texts by section and language
  const [aartiTexts, setAartiTexts] = useState<Record<AartiSection, Record<Language, string>>>(AUTHENTIC_AARTI_DEFAULTS);

  // Load saved aarti texts from localStorage per language
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getStored = (sec: AartiSection, lng: Language) => {
        const key = `saheb_custom_aarti_${sec}_${lng}`;
        const val = localStorage.getItem(key);
        if (val !== null && val.trim() !== '') return val;
        return AUTHENTIC_AARTI_DEFAULTS[sec][lng] || '';
      };

      const sections: AartiSection[] = ['aarti1', 'aarti2', 'aarti3', 'aarti4', 'prabhat', 'bhog'];
      const loaded: Record<AartiSection, Record<Language, string>> = {} as any;
      sections.forEach(sec => {
        loaded[sec] = {
          hi: getStored(sec, 'hi'),
          pb: getStored(sec, 'pb'),
          en: getStored(sec, 'en')
        };
      });

      setAartiTexts(loaded);
    }
    return () => {
      stopDevotionalAudio();
    };
  }, []);

  const currentText = aartiTexts[activeSection]?.[language] || AUTHENTIC_AARTI_DEFAULTS[activeSection][language];

  // Web Audio API pure temple bell chime
  const playSacredBell = () => {
    sacredHaptics.mediumTap();
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      
      const freqs = [587.33, 880, 1174.66, 1760]; // D5 major sacred chime harmonics
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const decay = 2.8 + idx * 0.4;
        gain.gain.setValueAtTime(0.2 / (idx + 1), ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + decay);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + decay);
      });
    } catch {
      // Fallback silent
    }
  };

  // Sacred Shankh (Conch) Sound generator
  const playSacredShankh = () => {
    sacredHaptics.mediumTap();
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(285, now + 1.2);
      osc.frequency.exponentialRampToValueAtTime(220, now + 3.0);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 3.3);
    } catch {}
  };

  // Start Voice Recitation of the Aarti Text
  const startSpeechRecitation = (textToSpeak: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      isCancelledRef.current = false;

      // Clean text from symbols
      const cleanText = textToSpeak
        .replace(/।।/g, '')
        .replace(/[॥\*\#\_]/g, '')
        .replace(/ टेक।/g, '')
        .trim();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = language === 'hi' ? 'hi-IN' : language === 'pb' ? 'pa-IN' : 'en-US';
      utterance.rate = 0.85; // Meditative gentle devotional pace
      utterance.pitch = 0.95;

      utterance.onend = () => {
        if (!isCancelledRef.current) {
          stopDevotionalAudio();
        }
      };

      utterance.onerror = () => {
        // Fallback gracefully
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      // Speech synthesis fallback
    }
  };

  // Harmonious Tanpura & Devotional Gayan Player
  const startDevotionalAudio = () => {
    isCancelledRef.current = false;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) {
        setIsPlayingAudio(true);
        if (isVocalRecitation) startSpeechRecitation(currentText);
        return;
      }
      
      let ctx = audioCtxRef.current;
      if (!ctx || ctx.state === 'closed') {
        ctx = new AudioCtx();
        audioCtxRef.current = ctx;
      }
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.8);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Sa (146.83 Hz), Pa (220 Hz), Sa' (293.66 Hz), Harmonium Re/Ga subtle overtones
      const baseFreqs = [146.83, 220.00, 293.66, 440.00, 587.33];
      const newOscs: OscillatorNode[] = [];

      baseFreqs.forEach((freq, idx) => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq + (idx * 0.3), ctx.currentTime);

        // Gentle subtle vibrato/detune for organic meditative feel
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.18 + idx * 0.05, ctx.currentTime);
        lfoGain.gain.setValueAtTime(2.0, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.12 / (idx + 1), ctx.currentTime);
        
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        newOscs.push(osc);
      });

      oscillatorsRef.current = newOscs;
      setIsPlayingAudio(true);

      // Trigger Vocal Recitation if enabled
      if (isVocalRecitation) {
        startSpeechRecitation(currentText);
      }

      // Also trigger a sweet opening temple bell
      playSacredBell();

      if (onOpenBlessing) {
        onOpenBlessing(
          language === 'pb' ? 'ਪਵਿੱਤਰ ਆਰਤੀ ਗਾਨ ਆਰੰਭ' : language === 'en' ? 'Sacred Aarti Recitation Started' : 'पावन आरती गान एवं ध्यान संगीत आरंभ',
          language === 'pb' ? 'ਸਤਿਗੁਰੂ ਜੀ ਦੇ ਧਿਆਨ ਵਿੱਚ ਆਰਤੀ ਗਾਨ ਅਤੇ ਪਾਵਨ ਧੁਨ ਦਾ ਆਨੰਦ ਲਓ।' : language === 'en' ? 'Enjoy sacred Aarti hymns and holy dhun in contemplation of Satguru Kabir Saheb.' : 'सतगुरु के पावन ध्यान में आरती गान, वाणी पाठ एवं सुरम्य धुन का श्रवण करें।'
        );
      }
    } catch {
      setIsPlayingAudio(true);
      if (isVocalRecitation) startSpeechRecitation(currentText);
    }
  };

  const stopDevotionalAudio = () => {
    isCancelledRef.current = true;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    try {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.6);
        setTimeout(() => {
          oscillatorsRef.current.forEach(osc => {
            try { osc.stop(); } catch {}
          });
          oscillatorsRef.current = [];
          if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
            audioCtxRef.current.close();
          }
          audioCtxRef.current = null;
          setIsPlayingAudio(false);
        }, 600);
      } else {
        oscillatorsRef.current.forEach(osc => {
          try { osc.stop(); } catch {}
        });
        oscillatorsRef.current = [];
        setIsPlayingAudio(false);
      }
    } catch {
      setIsPlayingAudio(false);
    }
  };

  const toggleDevotionalAudio = () => {
    sacredHaptics.lightTap();
    if (isPlayingAudio) {
      stopDevotionalAudio();
    } else {
      startDevotionalAudio();
    }
  };

  // If active section or language changes while audio is playing, restart recitation
  useEffect(() => {
    if (isPlayingAudio && isVocalRecitation) {
      startSpeechRecitation(currentText);
    }
  }, [activeSection, language]);

  const handleStartEdit = () => {
    sacredHaptics.lightTap();
    setEditText(aartiTexts[activeSection]?.[language] || AUTHENTIC_AARTI_DEFAULTS[activeSection][language]);
    setIsEditing(true);
  };

  // Sync editText whenever language or section changes during edit mode
  useEffect(() => {
    if (isEditing) {
      setEditText(aartiTexts[activeSection]?.[language] || AUTHENTIC_AARTI_DEFAULTS[activeSection][language]);
    }
  }, [language, activeSection]);

  const handleSaveEdit = () => {
    sacredHaptics.successVibration();
    const updated = {
      ...aartiTexts,
      [activeSection]: {
        ...aartiTexts[activeSection],
        [language]: editText.trim()
      }
    };
    setAartiTexts(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`saheb_custom_aarti_${activeSection}_${language}`, editText.trim());
    }
    setIsEditing(false);
    if (onOpenBlessing) {
      onOpenBlessing(
        language === 'pb' ? 'ਪਵਿੱਤਰ ਆਰਤੀ ਸੁਰੱਖਿਅਤ ਹੋ ਗਈ' : language === 'en' ? 'Sacred Aarti Saved' : 'पावन आरती सुरक्षित हुई',
        language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਆਪ ਜੀ ਦੀ ਭੇਟਾ ਪ੍ਰਵਾਨ ਹੋਵੇ।' : language === 'en' ? 'May your devotion be accepted at the lotus feet of Satguru Kabir Saheb.' : 'सतगुरु कबीर साहेब के चरणों में आपकी यह पावन अर्चना स्वीकार हो।'
      );
    }
  };

  const handleResetToDefault = () => {
    sacredHaptics.mediumTap();
    const originalText = AUTHENTIC_AARTI_DEFAULTS[activeSection][language];
    const updated = {
      ...aartiTexts,
      [activeSection]: {
        ...aartiTexts[activeSection],
        [language]: originalText
      }
    };
    setAartiTexts(updated);
    if (isEditing) {
      setEditText(originalText);
    }
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`saheb_custom_aarti_${activeSection}_${language}`);
    }
    if (onOpenBlessing) {
      onOpenBlessing(
        language === 'pb' ? 'ਮੂਲ ਪਾਠ ਮੁੜ ਸਥਾਪਿਤ' : language === 'en' ? 'Authentic Text Restored' : 'मूल पावन पाठ पुनर्स्थापित',
        language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਪ੍ਰਮਾਣਿਕ ਆਰਤੀ ਬਹਾਲ ਹੋ ਗਈ ਹੈ।' : language === 'en' ? 'Authentic Aarti verses of Satguru Kabir Saheb have been restored.' : 'सतगुरु कबीर साहेब की प्रामाणिक आरती बहाल कर दी गई है।'
      );
    }
  };

  const handleCopy = () => {
    const text = aartiTexts[activeSection]?.[language] || AUTHENTIC_AARTI_DEFAULTS[activeSection][language];
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    sacredHaptics.lightTap();
  };

  const handleCloseSanctuary = () => {
    sacredHaptics.lightTap();
    stopDevotionalAudio();
    if (onClose) {
      onClose();
    }
  };

  const sectionTitles: Record<AartiSection, Record<Language, string>> = {
    aarti1: {
      pb: 'ਆਰਤੀ-੧ (ਜੈ ਜੈ ਸਤ੍ਯ ਕਬੀਰ)',
      hi: 'आरती-१ (जय जय सत्य कबीर)',
      en: 'Aarti - 1 (Jai Jai Satya Kabir)'
    },
    aarti2: {
      pb: 'ਆਰਤੀ-੨ (ਆਰਤੀ ਗ਼ਰੀਬ ਨਿਵਾਜ਼)',
      hi: 'आरती-२ (आरती गरीब निवाज)',
      en: 'Aarti - 2 (Aarti Gareeb Niwaj)'
    },
    aarti3: {
      pb: 'ਆਰਤੀ-੩ (ਜੈ ਜੈ ਸ਼੍ਰੀ ਗੁਰੂਦੇਵ)',
      hi: 'आरती-३ (जय जय श्री गुरुदेव)',
      en: 'Aarti - 3 (Jai Jai Shri Gurudev)'
    },
    aarti4: {
      pb: 'ਆਰਤੀ-੪ (ਆਰਤੀ ਸਤ੍ਯਨਾਮ ਕੀ)',
      hi: 'आरती-४ (आरति सत्यनाम की)',
      en: 'Aarti - 4 (Aarti Satyanaam Ki)'
    },
    prabhat: {
      pb: 'ਪ੍ਰਭਾਤ ਮੰਗਲ ਗਾਨ',
      hi: 'प्रभात मंगल गान',
      en: 'Morning Mangal Gaan'
    },
    bhog: {
      pb: 'ਭੋਗ ਆਰਤੀ ਤੇ ਬੰਦਗੀ ਪਾਠ',
      hi: 'भोग आरती एवं बंदगी पाठ',
      en: 'Bhog Aarti & Bandagi'
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 space-y-6">
      {/* Top Banner with Header Info */}
      <div 
        className="p-5 sm:p-7 rounded-3xl border shadow-md relative overflow-hidden"
        style={{ 
          backgroundColor: theme.stepActiveBg, 
          borderColor: theme.accentGold 
        }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 
              style={{ color: theme.sacredMaroon }}
              className="text-2xl sm:text-3xl font-black font-serif tracking-tight"
            >
              {language === 'pb' 
                ? 'ਅਲੌਕਿਕ ਸੰਧਿਆ ਆਰਤੀ ਤੇ ਪ੍ਰਭਾਤ ਮੰਗਲ ਗਾਨ' 
                : language === 'en' 
                ? 'Alaukik Sandhya Aarti & Sacred Prayers' 
                : 'अलौकिक संध्या आरती एवं प्रभात मंगल गान'}
            </h1>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 max-w-xl font-medium">
              {language === 'pb'
                ? 'ਸਤਿਗੁਰੂ ਦੇ ਸਨਮੁਖ ਅਲੌਕਿਕ ਪਾਵਨ ਜੋਤਿ ਪ੍ਰਜਵਲਿਤ ਕਰਕੇ ਨਿਤਨੇਮ ਆਰਤੀਆਂ ਤੇ ਪ੍ਰਭਾਤ ਮੰਗਲ ਗਾਨ ਦਾ ਪਾਠ ਤੇ ਸ਼੍ਰਵਣ ਕਰੋ।'
                : language === 'en'
                ? 'Light the divine flame and immerse in the 4 daily sacred Aartis, morning hymns, and devotional recitation.'
                : 'सतगुरु के सम्मुख पावन अलौकिक अखंड ज्योति प्रज्वलित कर नित्य चारों पावन आरतियों एवं प्रभात मंगल गान का पाठ व श्रवण करें।'}
            </p>
          </div>

          {/* Virtual Controls: Bell, Shankh & Audio Gayan Player */}
          <div className="flex items-center flex-wrap gap-2 shrink-0">
            {/* Play/Stop Aarti Audio Gayan */}
            <button
              onClick={toggleDevotionalAudio}
              style={{ 
                backgroundColor: isPlayingAudio ? theme.buttonPrimaryBg : theme.cardBg, 
                color: isPlayingAudio ? theme.buttonPrimaryText : theme.sacredMaroon,
                borderColor: theme.accentGold
              }}
              className="px-3.5 py-2.5 rounded-2xl font-bold font-serif text-xs shadow-md hover:scale-105 active:scale-95 transition flex items-center gap-2 border cursor-pointer"
              title={isPlayingAudio ? 'ਆਰਤੀ ਗਾਨ ਬੰਦ ਕਰੋ (Stop Gayan Audio)' : 'ਆਰਤੀ ਗਾਨ/ਧੁਨ ਸੁਣੋ (Play Gayan Audio)'}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-4 h-4 text-amber-300 animate-pulse" />
                  <span>{language === 'pb' ? 'ਗਾਨ ਚੱਲ ਰਿਹਾ ਹੈ' : language === 'en' ? 'Gayan Playing' : 'आरती गान चालू'}</span>
                </>
              ) : (
                <>
                  <Music className="w-4 h-4 text-amber-600" />
                  <span>{language === 'pb' ? 'ਆਰਤੀ ਗਾਨ ਆਡੀਓ' : language === 'en' ? 'Play Aarti Audio' : 'आरती गान ऑडियो'}</span>
                </>
              )}
            </button>

            {/* Vocal Voice Recitation Toggle */}
            <button
              onClick={() => {
                sacredHaptics.lightTap();
                const nextState = !isVocalRecitation;
                setIsVocalRecitation(nextState);
                if (isPlayingAudio) {
                  if (nextState) {
                    startSpeechRecitation(currentText);
                  } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                    window.speechSynthesis.cancel();
                  }
                }
              }}
              className={`p-2.5 rounded-2xl border text-xs font-serif font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm ${
                isVocalRecitation 
                  ? 'bg-amber-100 text-amber-900 border-amber-400 dark:bg-stone-800 dark:text-amber-300' 
                  : 'bg-stone-100 text-stone-500 border-stone-300'
              }`}
              title={isVocalRecitation ? 'ਵਾਚਨ ਆਵਾਜ਼ ਚਾਲੂ ਹੈ (Vocal Recitation ON)' : 'ਸਿਰਫ਼ ਧੁਨ (Music Only)'}
            >
              {isVocalRecitation ? <Mic className="w-4 h-4 text-amber-700 dark:text-amber-400" /> : <MicOff className="w-4 h-4 text-stone-400" />}
              <span className="hidden sm:inline">{isVocalRecitation ? (language === 'pb' ? 'ਵਾਣੀ ਵਾਚਨ' : language === 'en' ? 'Vocal' : 'वाणी वाचन') : (language === 'pb' ? 'ਸਿਰਫ਼ ਧੁਨ' : language === 'en' ? 'Music only' : 'केवल धुन')}</span>
            </button>

            {/* Temple Bell */}
            <button
              onClick={playSacredBell}
              style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
              className="px-3 py-2.5 rounded-2xl font-bold font-serif text-xs shadow-md hover:scale-105 active:scale-95 transition flex items-center gap-1.5 cursor-pointer"
              title="Ring Temple Bell"
            >
              <Bell className="w-4 h-4 animate-bounce" />
              <span>{language === 'pb' ? 'ਘੰਟੀ' : language === 'en' ? 'Bell' : 'घंटी'}</span>
            </button>

            {/* Sacred Shankh */}
            <button
              onClick={playSacredShankh}
              className="px-3 py-2.5 rounded-2xl border border-amber-400 bg-amber-100 dark:bg-stone-800 text-amber-950 dark:text-amber-300 font-bold font-serif text-xs shadow-md hover:scale-105 active:scale-95 transition flex items-center gap-1.5 cursor-pointer"
              title="Sacred Conch Sound"
            >
              <Wind className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>{language === 'pb' ? 'ਸ਼ੰਖ' : language === 'en' ? 'Conch' : 'शंख'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section Selector Tabs (6 Sacred Tabs: Aarti 1, 2, 3, 4, Prabhat, Bhog) */}
      <div
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 p-1.5 rounded-2xl border backdrop-blur-md"
      >
        {(['aarti1', 'aarti2', 'aarti3', 'aarti4', 'prabhat', 'bhog'] as AartiSection[]).map((sectionKey) => {
          const isSelected = activeSection === sectionKey;
          return (
            <button
              key={sectionKey}
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveSection(sectionKey);
                setIsEditing(false);
              }}
              style={
                isSelected
                  ? { backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }
                  : { color: theme.textPrimary }
              }
              className={`py-2.5 px-2 rounded-xl text-xs sm:text-xs font-bold font-serif transition-all flex items-center justify-center text-center gap-1.5 cursor-pointer ${
                isSelected ? 'shadow-xs' : 'hover:bg-amber-500/10'
              }`}
            >
              {sectionKey.startsWith('aarti') && <Flame className="w-3.5 h-3.5 shrink-0" />}
              {sectionKey === 'prabhat' && <Sun className="w-3.5 h-3.5 shrink-0" />}
              {sectionKey === 'bhog' && <Scroll className="w-3.5 h-3.5 shrink-0" />}
              <span className="truncate">{sectionTitles[sectionKey][language]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Altar Card */}
      <div 
        className="p-6 sm:p-10 rounded-3xl border backdrop-blur-md shadow-lg space-y-6 relative overflow-hidden"
        style={{ 
          backgroundColor: theme.cardBg, 
          borderColor: theme.accentGold 
        }}
      >
        {/* Sacred Flame / Diya Visualizer */}
        <div className="flex items-center justify-center pb-2">
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => {
                sacredHaptics.lightTap();
                setIsDiyaBurning(!isDiyaBurning);
              }}
              className="relative cursor-pointer transition-transform hover:scale-110 active:scale-95"
              title={isDiyaBurning ? 'ਜੋਤਿ ਪ੍ਰਜਵਲਿਤ ਹੈ (Flame burning)' : 'ਜੋਤਿ ਜਗਾਓ (Ignite Flame)'}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 border-amber-400 ${
                isDiyaBurning ? 'bg-amber-500/20 shadow-[0_0_25px_rgba(245,158,11,0.5)]' : 'bg-stone-200 dark:bg-stone-800'
              }`}>
                <Flame className={`w-8 h-8 ${
                  isDiyaBurning ? 'text-amber-500 fill-amber-400 animate-pulse' : 'text-stone-400'
                }`} />
              </div>
            </button>
            <span className="text-[11px] font-serif font-bold text-amber-900 dark:text-amber-400">
              {isDiyaBurning 
                ? (language === 'hi' ? '।। अखंड पावन ज्योति प्रज्वलित ।।' : language === 'pb' ? '।। ਅਖੰਡ ਪਾਵਨ ਜੋਤਿ ਪ੍ਰਜਵਲਿਤ ।।' : '।। Sacred Eternal Flame Lit ।।')
                : (language === 'hi' ? 'ज्योति पर टैप कर प्रज्वलित करें' : language === 'pb' ? 'ਜੋਤਿ ਤੇ ਟੈਪ ਕਰ ਪ੍ਰਜਵਲਿਤ ਕਰੋ' : 'Tap to light the flame')}
            </span>
          </div>
        </div>

        {/* Top Header & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3 border-amber-200/50">
          <div className="space-y-1">
            <h2 
              style={{ color: theme.sacredMaroon }}
              className="text-lg sm:text-xl font-black font-serif tracking-wide"
            >
              {sectionTitles[activeSection][language]}
            </h2>
            <div className="space-y-0.5 font-serif">
              <p className="text-sm sm:text-base font-black text-amber-900 dark:text-amber-300">
                {language === 'hi' ? 'सतगुरु कबीराय नमः' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰਾਯ ਨਮਃ' : 'Satguru Kabiraya Namah'}
              </p>
              <p className="text-xs font-bold" style={{ color: theme.sacredMaroon }}>
                {language === 'hi' ? '।।साहेब बंदगी साहेब।।🙏' : language === 'pb' ? '।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।🙏' : '।। Saheb Bandagi Saheb ।।🙏'}
              </p>
            </div>
          </div>

          {/* Action Tools & In-Sanctuary Language Switcher */}
          <div className="flex items-center flex-wrap gap-1.5 self-end sm:self-center">
            {/* Quick Language Switcher */}
            <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-xl p-0.5 border border-amber-400/30 mr-1">
              {(['hi', 'pb', 'en'] as Language[]).map((lng) => (
                <button
                  key={lng}
                  onClick={() => {
                    sacredHaptics.lightTap();
                    if (onSelectLanguage) {
                      onSelectLanguage(lng);
                    } else {
                      window.dispatchEvent(new CustomEvent('sahebworld_lang_change', { detail: lng }));
                    }
                  }}
                  style={{
                    backgroundColor: language === lng ? theme.buttonPrimaryBg : 'transparent',
                    color: language === lng ? theme.buttonPrimaryText : theme.textSecondary,
                  }}
                  className="px-2 py-0.5 rounded-lg text-xs font-bold transition cursor-pointer"
                  title={lng === 'hi' ? 'हिंदी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'English'}
                >
                  {lng === 'hi' ? 'हिंदी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'EN'}
                </button>
              ))}
            </div>

            {/* Couplet Bhavarth Mode Toggle Button */}
            {!isEditing && (
              <button
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setViewWithBhavarth(!viewWithBhavarth);
                }}
                style={
                  viewWithBhavarth
                    ? { backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText, borderColor: theme.accentGold }
                    : undefined
                }
                className={`px-2.5 py-1 rounded-xl border text-xs font-serif font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  viewWithBhavarth
                    ? 'shadow-xs'
                    : 'border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-zinc-800'
                }`}
                title={viewWithBhavarth ? 'केवल मूल पाठ देखें' : 'दोहे व चौपाई का भावार्थ देखें'}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>
                  {viewWithBhavarth
                    ? (language === 'pb' ? 'ਭਾਵਾਰਥ: ਖੁੱਲ੍ਹਾ' : language === 'en' ? 'Meaning: ON' : 'भावार्थ: चालू')
                    : (language === 'pb' ? 'ਮੂਲ ਪਾਠ' : language === 'en' ? 'Text Only' : 'केवल पाठ')}
                </span>
              </button>
            )}

            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : fontSize === 'large' ? 'xlarge' : 'normal')}
              className="px-2 py-1 rounded-xl border border-stone-300 dark:border-stone-700 text-xs font-bold text-stone-700 dark:text-stone-300 hover:bg-amber-50 cursor-pointer"
              title="Change Font Size"
            >
              {fontSize === 'normal' ? 'A' : fontSize === 'large' ? 'A+' : 'A++'}
            </button>

            {currentText && !isEditing && (
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-600 hover:bg-amber-50 cursor-pointer"
                title="Copy Aarti"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            )}

            {/* Reset to Authentic Text Button */}
            {!isEditing && (
              <button
                onClick={handleResetToDefault}
                className="p-1.5 rounded-xl border border-amber-300 text-amber-800 hover:bg-amber-100/60 cursor-pointer"
                title={language === 'pb' ? 'ਮੂਲ ਪਾਠ ਮੁੜ ਸਥਾਪਿਤ ਕਰੋ' : language === 'en' ? 'Reset to Authentic Text' : 'मूल पाठ रीसेट करें'}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={isEditing ? handleSaveEdit : handleStartEdit}
              style={{ 
                backgroundColor: isEditing ? theme.buttonPrimaryBg : theme.stepActiveBg,
                color: isEditing ? theme.buttonPrimaryText : theme.sacredMaroon
              }}
              className="px-3 py-1.5 rounded-xl border border-amber-300 text-xs font-bold font-serif transition flex items-center gap-1.5 cursor-pointer"
            >
              {isEditing ? <Save className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
              <span>
                {isEditing 
                  ? (language === 'pb' ? 'ਸੁਰੱਖਿਅਤ ਕਰੋ' : language === 'en' ? 'Save Aarti' : 'सुरक्षित करें')
                  : (language === 'pb' ? 'ਸੰਪਾਦਿਤ ਕਰੋ' : language === 'en' ? 'Edit Aarti' : 'संपादित करें')}
              </span>
            </button>
          </div>
        </div>

        {/* Content Area: Either Editor, Rendered Custom Aarti, or Empty Space Placeholder */}
        {isEditing ? (
          /* Editor Mode */
          <div className="space-y-3">
            <label className="text-xs font-bold text-amber-900 dark:text-amber-300 block">
              {language === 'pb' 
                ? 'ਇੱਥੇ ਆਪਣੀ ਪਵਿੱਤਰ ਆਰਤੀ ਦੇ ਬੋਲ ਲਿਖੋ ਜਾਂ ਪੇਸਟ ਕਰੋ:' 
                : language === 'en'
                ? 'Write or paste your sacred Aarti text here:'
                : 'यहां अपनी पावन आरती के बोल लिखें अथवा पेस्ट करें:'}
            </label>
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              placeholder={
                language === 'pb'
                  ? 'ਆਰਤੀ ਕੀਜੈ ਸਤਿਗੁਰੂ ਦੇਵਾ...\n(ਇੱਥੇ ਆਪਣੇ ਪਾਵਨ ਆਰਤੀ ਦੇ ਬੋਲ ਦਰਜ ਕਰੋ)'
                  : language === 'en'
                  ? 'Jai Jai Satya Kabir...\n(Type or paste your Aarti text here)'
                  : 'आरती कीजै सतगुरु देवा...\n(यहां अपने पावन आरती के बोल दर्ज करें)'
              }
              rows={14}
              className="w-full p-4 rounded-2xl border border-amber-300 bg-amber-50/50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-serif leading-relaxed text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={handleResetToDefault}
                className="px-3 py-2 rounded-xl border border-amber-300 text-xs font-bold text-amber-800 hover:bg-amber-100 cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{language === 'pb' ? 'ਮੂਲ ਪਾਠ' : language === 'en' ? 'Default' : 'मूल पाठ'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-xl border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-100 cursor-pointer"
                >
                  {language === 'pb' ? 'ਰੱਦ ਕਰੋ' : language === 'en' ? 'Cancel' : 'रद्द करें'}
                </button>
                <button
                  onClick={handleSaveEdit}
                  style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                  className="px-5 py-2 rounded-xl text-xs font-bold font-serif hover:scale-105 transition cursor-pointer"
                >
                  {language === 'pb' ? 'ਆਰਤੀ ਸੁਰੱਖਿਅਤ ਕਰੋ' : language === 'en' ? 'Save Aarti' : 'आरती सुरक्षित करें'}
                </button>
              </div>
            </div>
          </div>
        ) : currentText ? (
          viewWithBhavarth && AARTI_BHAVARTH_MAP[activeSection] ? (
            /* Rendered Couplet-by-Couplet with Bhavarth View */
            <div className="space-y-5">
              {/* Top Sacred Invocation */}
              <div className="text-center py-1.5">
                <span className="inline-block px-5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/25 to-amber-500/20 text-amber-950 dark:text-amber-200 border border-amber-400/50 text-sm sm:text-base font-black font-serif shadow-xs tracking-wide whitespace-nowrap">
                  {SACRED_BRANDING.header[language] || SACRED_BRANDING.header.hi}
                </span>
              </div>

              {/* Couplets with Bhavarth after every 2 lines */}
              {AARTI_BHAVARTH_MAP[activeSection].map((verse, idx) => {
                const lines = (verse.lines as any)[language] && (verse.lines as any)[language].length > 0 
                  ? (verse.lines as any)[language] 
                  : verse.lines.hi;
                return (
                  <div 
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-stone-900/70 border border-amber-200/70 dark:border-amber-900/40 shadow-xs space-y-3"
                  >
                    <div className={`text-center font-serif font-black tracking-wide leading-relaxed text-stone-950 dark:text-stone-100 ${
                      fontSize === 'normal' ? 'text-base sm:text-lg' : fontSize === 'large' ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
                    }`}>
                      {lines.map((l: string, lIdx: number) => (
                        <p key={lIdx} className="my-1">{l}</p>
                      ))}
                    </div>

                    {/* Dedicated Bhavarth Section after every 2 lines */}
                    <div className="p-3.5 rounded-xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-400/40 text-xs sm:text-sm font-serif leading-relaxed text-left">
                      <div className="flex items-center justify-between mb-1.5 text-amber-900 dark:text-amber-300 font-bold text-xs">
                        <span className="flex items-center gap-1">
                          <span>✨</span>
                          <span>{language === 'pb' ? '।। ਭਾਵਾਰਥ ।।' : language === 'en' ? '|| Sacred Meaning ||' : '।। भावार्थ ।।'}</span>
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20">
                          {language === 'pb' ? `ਪਦ ${idx + 1}` : language === 'en' ? `Couplet ${idx + 1}` : `चरण ${idx + 1}`}
                        </span>
                      </div>
                      <p className="text-stone-800 dark:text-amber-100">
                        {(verse.bhavarth as any)[language] || verse.bhavarth.hi}
                      </p>
                      {verse.bhavarth.en && language !== 'en' && (
                        <p className="mt-2 pt-1.5 border-t border-amber-400/20 text-xs text-stone-600 dark:text-amber-200/70 italic">
                          <span className="font-bold not-italic block text-[10px] uppercase font-mono">English Meaning:</span>
                          {verse.bhavarth.en}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Concluding Salutation */}
              <div className="text-center pt-4 border-t border-amber-300/40">
                <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-orange-500/20 to-amber-500/15 text-amber-950 dark:text-amber-100 border border-amber-400/50 text-xs sm:text-sm font-black font-serif shadow-xs tracking-wider">
                  {language === 'pb' ? '🙏 ।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।। 🙏' : language === 'en' ? '🙏 || Saheb Bandagi Saheb || 🙏' : '🙏 ।।साहेब बंदगी साहेब।। 🙏'}
                </span>
              </div>
            </div>
          ) : (
            /* Rendered Saved Custom or Continuous Aarti */
            <div className="space-y-6 text-center">
              <div className={`font-serif whitespace-pre-line leading-loose tracking-wide text-stone-900 dark:text-stone-100 font-medium ${
                fontSize === 'normal' ? 'text-base sm:text-lg' : fontSize === 'large' ? 'text-lg sm:text-xl font-bold' : 'text-xl sm:text-2xl font-bold'
              }`}>
                {currentText}
              </div>

              <div className="pt-4 border-t border-amber-200/50 text-xs text-stone-500 font-serif">
                {language === 'hi' ? '।।साहेब बंदगी साहेब।।' : language === 'pb' ? '।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।' : '।।Saheb Bandagi Saheb।।'}
              </div>
            </div>
          )
        ) : (
          /* Empty Space Fallback */
          <div className="p-8 sm:p-12 rounded-3xl border-2 border-dashed border-amber-300 dark:border-stone-700 bg-amber-50/50 dark:bg-stone-900/30 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center bg-amber-100 dark:bg-stone-800 border border-amber-300 text-amber-700">
              <Scroll className="w-7 h-7" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 
                style={{ color: theme.sacredMaroon }}
                className="text-base sm:text-lg font-bold font-serif"
              >
                {language === 'hi'
                  ? 'आपकी पावन आरती के लिए यह स्थान समर्पित है'
                  : language === 'pb'
                  ? 'ਆਪ ਜੀ ਦੀ ਪਵਿੱਤਰ ਆਰਤੀ ਲਈ ਇਹ ਅਸਥਾਨ ਸਮਰਪਿਤ ਹੈ'
                  : 'Dedicated Sacred Space for Your Aarti'}
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-medium">
                {language === 'hi'
                  ? 'सत साहेब जी! नीचे दिए गए बटन पर टैप कर आप अपनी आरती के पावन बोल यहां दर्ज या पेस्ट कर सकते हैं।'
                  : language === 'pb'
                  ? 'ਸਤਿ ਸਾਹੇਬ ਜੀ! ਹੇਠਾਂ ਦਿੱਤੇ ਬਟਨ ਤੇ ਕਲਿੱਕ ਕਰਕੇ ਆਪ ਜੀ ਆਪਣੀ ਮਨਪਸੰਦ ਆਰਤੀ ਦੇ ਪਾਵਨ ਬੋਲ ਇੱਥੇ ਦਰਜ ਜਾਂ ਪੇਸਟ ਕਰ ਸਕਦੇ ਹੋ।'
                  : 'Sat Saheb Ji! Tap below to type or paste your sacred Aarti text anytime.'}
              </p>
            </div>

            <button
              onClick={handleStartEdit}
              style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
              className="px-5 py-2.5 rounded-2xl text-xs font-bold font-serif shadow-md hover:scale-105 active:scale-95 transition flex items-center gap-2 mx-auto cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>
                {language === 'pb' ? 'ਆਰਤੀ ਦੇ ਬੋਲ ਦਰਜ ਕਰੋ' : language === 'en' ? 'Add Aarti Text' : 'आरती के बोल दर्ज करें'}
              </span>
            </button>
          </div>
        )}

        {/* Flower Offering & Close Footer */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          {onOpenBlessing && (
            <button
              onClick={() => {
                sacredHaptics.successVibration();
                onOpenBlessing(
                  language === 'pb' ? 'ਆਰਤੀ ਅਰਚਨਾ ਸੰਪੰਨ' : language === 'en' ? 'Aarti Complete' : 'आरती अर्चना संपन्न',
                  language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਆਪ ਜੀ ਦੀ ਆਰਤੀ ਪ੍ਰਵਾਨ ਹੋਵੇ।' : language === 'en' ? 'May your holy Aarti prayer be accepted at the lotus feet of Satguru Kabir Saheb.' : 'सतगुरु कबीर साहेब के चरणों में आपकी यह पावन आरती वंदना स्वीकार हो।'
                );
              }}
              style={{ backgroundColor: theme.stepActiveBg, color: theme.sacredMaroon }}
              className="px-5 py-2.5 rounded-2xl border border-amber-300 font-bold text-xs hover:scale-105 transition flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
              <span>{language === 'pb' ? 'ਆਰਤੀ ਅਰਪਣ ਤੇ ਪੁਸ਼ਪ ਵਰਖਾ' : language === 'en' ? 'Offer Aarti & Flower Shower' : 'आरती समर्पण एवं पुष्प वर्षा'}</span>
            </button>
          )}

          {onClose && (
            <button
              onClick={handleCloseSanctuary}
              className="px-4 py-2.5 rounded-2xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-bold text-xs hover:bg-stone-100 transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <X className="w-4 h-4 text-stone-500" />
              <span>{language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बन्द करें'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
