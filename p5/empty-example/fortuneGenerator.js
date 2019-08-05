const ar_strength = ["courageous", "determined", "confident", "enthusiastic", "optimistic", "honest", "passionate"];
const ar_weakness = ["impatient", "moody", "short-tempered", "impulsive", "aggressive"];

const ta_strength = ["reliable", "patient", "practical", "devoted", "responsible", "stable"];
const ta_weakness = ["stubborn", "possessive", "uncompromising"];

const ge_strength = ["gentle", "affectionate", "curious", "adaptable", "good at learning quickly and exchanging ideas"];
const ge_weakness = ["nervous", "inconsistent", "indecisive"];

const can_strength = ["tenacious", "imaginative", "loyal", "emotional", "sympathetic", "persuasive"];
const can_weakness = ["moody", "suspicious", "manipulative", "insecure", "pessimistic"];

const le_strength = ["creative", "passionate", "generous", "warm-hearted", "cheerful"];
const le_weakness = ["arrogant", "stubborn", "lazy", "inflexible", "self-centered"];

const vi_strength = ["loyal", "analytical", "kind", "hardworking", "practical"];
const vi_weakness = ["shy", "worry", "critical", "business-like"];

const li_strength = ["cooperative", "diplomatic", "gracious", "social", "fair"];
const li_weakness = ["indecisive", "non-confrontational", "carrying a grudge", "self-pity"];

const sc_strength = ["resourceful", "brave", "passionate", "stubborn"];
const sc_weakness = ["distrusting", "jealous", "secretive", "violent"];

const sa_strength = ["generous", "idealistic", "funny"];
const sa_weakness = ["impatient", "defiant", "over-promising"];

const cap_strength = ["responsible", "disciplined", "self-governed", "polite"];
const cap_weakness = ["know-it-all", "unforgiving", "condescending", "pessimistic"];

const aq_strength = ["progressive", "original", "independent", "humanitarian"];
const aq_weakness = ["tempermental", "uncompromising", "aloof"];

const pi_strength = ["compassionate", "artistic", "intuitive", "gentle", "wise", "musical"];
const pi_weakness = ["fearful", "overly trusting", "sad"];

const questions = ["career", "love", "life"];
const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const strengths = [ar_strength, ta_strength, ge_strength, can_strength, le_strength, vi_strength, li_strength, sc_strength, sa_strength, cap_strength, aq_strength, pi_strength];
const weaknesses = [ar_weakness, ta_weakness, ge_weakness, can_weakness, le_weakness, vi_weakness, li_weakness, sc_weakness, sa_weakness, cap_weakness, aq_weakness, pi_weakness];

const career_advice = ["ask for feedback on your performance", "seek out a new project", "help out a teammate", "do something to help someone else", "take time to get some work done", "look for new opportunities"];
const love_advice = ["express feelings", "schedule some time alone together", "take some time for yourself", "talk about what's been bothering you", "tell them how you feel", "focus on how they feel"];
const life_advice = ["prioritize your commitments", "take some time for yourself", "tidy up your living space", "do something unexpected", "do something that scares you", "reach out to someone you haven't heard from in a while", "take a break", "take on a new challenge"];
const advice = [career_advice, love_advice, life_advice];

function getFortune(signRequest, questionRequest) {
    let signIndex = signs.indexOf(signRequest);
    let questionIndex = questions.indexOf(questionRequest);
    let strength1 = strengths[signIndex][(int)(Math.random() * strengths[signIndex].length)];
    let weakness1 = weaknesses[signIndex][(int)(Math.random() * weaknesses[signIndex].length)];
    let weakness2 = weaknesses[signIndex][(int)(Math.random() * weaknesses[signIndex].length)];
    let noun;
    if (questionIndex === 1) {
        noun = "your partner";
    }
    else {
        noun = "people";
    }

    advice1 = advice[questionIndex][(int)(Math.random() * advice[questionIndex].length)];

    part1 = (int)(Math.random() * 2);
    part2 = (int)(Math.random() * 2);
    specialFortune = (int)(Math.random() * 30);
    let ans = "";

    if (specialFortune === 0) { //use this for special, unrelated fortunes - mostly as a gag, also to mix it up
        specialIndex = (int)(Math.random() * 3);
        if (specialIndex === 0) {
            ans = ans + "The spirits can tell that you don't really believe in fortunes, and want you to try harder next time.";
        }
        else if (specialIndex === 0) {
            ans = ans + "The stars realize that someone left a curse on you, and quickly remove it! You're welcome.";
        }
        else {
            ans = ans + "Keeee heh ha mo-atata... Keeee ha ha mo-atatata... Eee na ro sheho-to bati... YEEEEEeeeee!\n ...Aha. Yes. It has come into view... The great happiness from the stars is attempting to visit you... will you welcome it?";
        }
    }
    else {
        if (part1 === 0) {
            ans = ans + "As a " + sign + " you are " + strength1 + ".\n\n This usually comes in handy for " + questionRequest + ",\n but you may face some roadblocks because you are also " + weakness1 + ".";
        }
        else if (part1 === 1) {
            ans = ans + "You have been relying too heavily on your ability to be " + strength1 + ".\n\n If you're not careful, you could have some trouble in " + questionRequest + ".\n Try not to be too " + weakness1 + ".";
        } 
        else { 
        ans = ans + "Your tendency to be " + weakness1 + "may be controlling your" + questionRequest + ".\n\n Don't forget: you are also" + strength1 + "and you should take advantage of that!";
        }
        ans += "\n\n";

        if (part2 === 0) {
            ans = ans + "Don't let " + noun + " take advantage of your " + weakness2 + " nature.\n It may be wise to " + advice1 + ".";
        }
        else if (part2 === 1) {
            ans = ans + "If you " + advice1 + ", you may start to find balance in your " + questionRequest + " again.";
        }
        else {
            ans = ans + noun + " may try to " + advice1 + " and might be a good idea for you to do the same.";
        }
        ans += "\n\n";
        ans = ans + "May happiness find you and yours.";
    }
    return ans;
}