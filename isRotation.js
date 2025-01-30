/** Input: s1 = "waterbottle", s2 = "erbottlewat"
 Output: true
 **/

function isRotation(s1, s2) {
    if (s1.length !== s2.length) return false;
    return (s1 + s1).includes(s2);
}

isRotation('waterbottle', 'bottlwaterle')

//"waterbottle" → "bottlwaterle"