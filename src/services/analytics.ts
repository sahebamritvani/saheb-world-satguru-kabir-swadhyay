/**
 * Lightweight Analytics Service for Saheb World
 * Tracks key user actions while respecting privacy.
 * Uses a simple event-based system that can be connected to any backend or provider.
 */

type AnalyticsEvent = 
  | 'view_sakhi'
  | 'start_swadhyay'
  | 'attempt_quiz'
  | 'switch_language'
  | 'change_theme'
  | 'read_nitnem'
  | 'read_sggs'
  | 'share_app'
  | 'save_to_diary'
  | 'open_feature';

interface AnalyticsData {
  event: AnalyticsEvent;
  properties?: Record<string, any>;
  timestamp: number;
}

class AnalyticsService {
  private static instance: AnalyticsService;
  private isEnabled: boolean = true;

  private constructor() {
    // In a real app, you might initialize a provider like Google Analytics or Mixpanel here
  }

  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  public setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
  }

  public track(event: AnalyticsEvent, properties?: Record<string, any>) {
    if (!this.isEnabled) return;

    const data: AnalyticsData = {
      event,
      properties,
      timestamp: Date.now(),
    };

    // Log to console in dev mode
    if (import.meta.env.DEV) {
      console.log(`[Analytics] ${event}`, properties);
    }

    // Example of sending to a simulated endpoint or localStorage for session tracking
    try {
      const sessionData = localStorage.getItem('sahebworld_session_analytics');
      const events = sessionData ? JSON.parse(sessionData) : [];
      events.push(data);
      // Keep only last 50 events to avoid bloating localStorage
      if (events.length > 50) events.shift();
      localStorage.setItem('sahebworld_session_analytics', JSON.stringify(events));
    } catch (e) {
      // Silently ignore storage errors
    }
  }

  public logEvent(event: { name: string; params?: Record<string, any> }) {
    this.track(event.name as AnalyticsEvent, event.params);
  }
}

export const analytics = AnalyticsService.getInstance();
