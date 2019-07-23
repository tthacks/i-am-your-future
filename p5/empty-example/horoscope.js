function getHoroscopeSign(birthday, overrideErrors) {
	var { month, day } = birthday;
	if (!overrideErrors) {
		overrideErrors = false;
	}
	if (overrideErrors) {
		if (birthdayIsntValid(month, day)) {
			return null;
		} else {
			return handleMonths[month](day);
		}
	} else {
		if (birthdayIsntValid(month, day)) {
			throw new Error("Month should be numbers 1-12 and days should be numbers between 1-31");
		} else {
			return handleMonths[month](day);
		}
	}
}

// how many days in each month
const monthDayRange = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};

// object lookup w/ functions to process different Horoscope Signs inside each month
const handleMonths = {
  1: function (day) {
    if (day <= 19) { return 'Capricorn' } else { return 'Aquarius'}
  },
  2: function (day) {
    if (day <= 18) { return 'Aquarius' } else { return 'Pisces'}
  },
  3: function (day) {
    if (day <= 20) { return 'Pisces' } else { return 'Aries'}
  },
  4: function (day) {
    if (day <= 19) { return 'Aries' } else { return 'Taurus'}
  },
  5: function (day) {
    if (day <= 20) { return 'Taurus' } else { return 'Gemini'}
  },
  6: function (day) {
    if (day <= 20) { return 'Gemini' } else { return 'Cancer'}
  },
  7: function (day) {
    if (day <= 22) { return 'Cancer' } else { return 'Leo'}
  },
  8: function (day) {
    if (day <= 22) { return 'Leo' } else { return 'Virgo'}
  },
  9: function (day) {
    if (day <= 22) { return 'Virgo' } else { return 'Libra'}
  },
  10: function (day) {
    if (day <= 22) { return 'Libra' } else { return 'Scorpio'}
  },
  11: function (day) {
    if (day <= 21) { return 'Scorpio' } else { return 'Sagittarius'}
  },
  12: function (day) {
    if (day <= 21) { return 'Sagittarius' } else { return 'Capricorn'}
  }
};

function birthdayIsntValid(m, d) {
	if (typeof m != 'number' || typeof d != 'number' || m < 1 || m > 12 || d < 1 || d > monthDayRange[m]) {
		return true;
	} else {
		return false;
  }
}

function getSignEmoji(sign) {
  switch (sign) {
    case 'Aries': return "♈️"
    case 'Taurus': return "♉️"
    case 'Gemini': return "♊️"
    case 'Cancer': return "♋️"
    case 'Leo': return "♌️"
    case 'Virgo': return "♍️"
    case 'Libra': return "♎️"
    case 'Scorpio': return "♏️"
    case 'Sagittarius': return "♐️"
    case 'Capricorn': return "♑️"
    case 'Aquarius': return "♒️"
    case 'Pisces': return "♓️"
    default: return "❌"
  }
}