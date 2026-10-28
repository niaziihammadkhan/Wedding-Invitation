/**
 * Wedding Invitation Template Configuration
 * Easily customize couple names, hosts, venue, schedule, and RSVP details.
 */

export const WEDDING_CONFIG = {
  // Couple Information
  groom: {
    fullName: 'Aayan Tariq',
    initial: 'A', // Displays on the left gatefold door seal
  },
  bride: {
    fullName: 'Zara Malik',
    initial: 'Z', // Displays on the right gatefold door seal
  },

  // Hosts
  hosts: {
    formalTitle: 'Mr. & Mrs. Tariq Mahmood',
    greetingNote: 'Request the pleasure of your company at the wedding ceremony of their beloved Son',
  },

  // Venue & Highlight Date
  venue: {
    name: 'The Royal Orchid Marquee',
    city: 'Islamabad',
    address: 'Club Road, Islamabad',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Royal+Orchid+Marquee+Club+Road+Islamabad',
    heroCardDate: '22nd November', // Highlighted date on the interior card
    note: 'Join us in the scenic serenity of the capital for an unforgettable celebration under the chandeliers.',
  },

  // Countdown Target
  countdownTargetIso: '2026-11-20T20:00:00+05:00',
  countdownSubtitle: 'Inshallah starting Friday, 20 November 2026 with Rasm Hina',

  // Events Schedule
  events: [
    {
      id: 'mehndi',
      badge: 'Pre-Wedding Festivity',
      name: 'Mehndi',
      date: 'Friday, 20 November 2026',
      subactivities: [
        { name: 'Rasm Hina', time: '8:00 PM' }
      ],
      timezone: 'Pakistan Standard Time (PKT)',
      featured: false,
      calendar: {
        title: 'Mehndi — Aayan Tariq & Zara Malik',
        description: 'Pre-Wedding Festivity & Rasm Hina. Hosted by Mr. & Mrs. Tariq Mahmood.',
        location: 'The Royal Orchid Marquee, Club Road, Islamabad',
        startIso: '20261120T150000Z', // 8:00 PM PKT (UTC+5)
        endIso: '20261120T180000Z',   // 11:00 PM PKT
      }
    },
    {
      id: 'barat',
      badge: 'The Main Ceremony',
      name: 'Barat',
      date: 'Saturday, 21 November 2026',
      subactivities: [
        { name: 'Sehra Bandi', time: '5:00 PM' },
        { name: 'Departure of Barat', time: '7:00 PM' }
      ],
      timezone: 'Pakistan Standard Time (PKT)',
      featured: true,
      calendar: {
        title: 'Barat — Aayan Tariq & Zara Malik',
        description: 'Main Wedding Ceremony: Sehra Bandi at 5:00 PM, Departure of Barat at 7:00 PM. Hosted by Mr. & Mrs. Tariq Mahmood.',
        location: 'The Royal Orchid Marquee, Club Road, Islamabad',
        startIso: '20261121T120000Z', // 5:00 PM PKT
        endIso: '20261121T163000Z',   // 9:30 PM PKT
      }
    },
    {
      id: 'walima',
      badge: 'The Reception',
      name: 'Walima',
      date: 'Sunday, 22 November 2026',
      subactivities: [
        { name: 'Dinner', time: '8:00 PM – 9:30 PM' }
      ],
      timezone: 'Pakistan Standard Time (PKT)',
      featured: false,
      calendar: {
        title: 'Walima — Aayan Tariq & Zara Malik',
        description: 'Wedding Reception Dinner. Hosted by Mr. & Mrs. Tariq Mahmood.',
        location: 'The Royal Orchid Marquee, Club Road, Islamabad',
        startIso: '20261122T150000Z', // 8:00 PM PKT
        endIso: '20261122T170000Z',   // 10:00 PM PKT
      }
    }
  ],

  // RSVP Contacts
  rsvp: {
    coordinators: [
      {
        initial: 'H',
        name: 'Hamza Tariq',
        phoneDisplay: '0300-1234567',
        phoneTel: '+923001234567',
        whatsappLink: 'https://wa.me/923001234567?text=Assalam-o-Alaikum%2C%20RSVP%20regarding%20Aayan%20and%20Zara%27s%20Wedding%20Celebration',
      },
      {
        initial: 'B',
        name: 'Bilal Ahmed',
        phoneDisplay: '0321-7654321',
        phoneTel: '+923217654321',
        whatsappLink: 'https://wa.me/923217654321?text=Assalam-o-Alaikum%2C%20RSVP%20regarding%20Aayan%20and%20Zara%27s%20Wedding%20Celebration',
      },
      {
        initial: 'A',
        name: 'Haji Abdul Rehman',
        honorific: 'With Family',
        role: 'Family Host & Elder',
      }
    ]
  },

  // Formal Closing
  closing: {
    arabicDua: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
    englishTranslation: '“May Allah bless you, shower His blessings upon you, and unite you both in goodness.”',
    footerLocation: 'The Royal Orchid Marquee, Islamabad • November 2026',
  }
};
