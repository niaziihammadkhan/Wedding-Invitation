/**
 * Calendar helpers for Google Calendar and iCal (.ics) exports
 */
import { WEDDING_CONFIG } from '../config/weddingConfig';

export interface WeddingEventInfo {
  id: string;
  title: string;
  description: string;
  location: string;
  startIso: string;
  endIso: string;
  dateLabel: string;
  timeLabel: string;
}

export const WEDDING_EVENTS: WeddingEventInfo[] = WEDDING_CONFIG.events.map(event => ({
  id: event.id,
  title: event.calendar.title,
  description: event.calendar.description,
  location: event.calendar.location,
  startIso: event.calendar.startIso,
  endIso: event.calendar.endIso,
  dateLabel: event.date,
  timeLabel: event.subactivities.map(s => `${s.name} · ${s.time}`).join(' | ') + ` ${event.timezone}`
}));

export function createGoogleCalendarUrl(event: WeddingEventInfo): string {
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const params = new URLSearchParams({
    text: event.title,
    dates: `${event.startIso}/${event.endIso}`,
    details: event.description,
    location: event.location,
  });
  return `${base}&${params.toString()}`;
}

export function downloadIcsFile(event: WeddingEventInfo) {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Luxury Wedding Invitation Template//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.id}-wedding-template@royalinvitation`,
    `DTSTAMP:${event.startIso}`,
    `DTSTART:${event.startIso}`,
    `DTEND:${event.endIso}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${event.id}-invitation.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
