// named export => må importeres som import { add }
export function add(value1, value2) { return value1 + value2}
export let myVal = 1337;
export const obj = {id: 1};

// default export => kan importeres som hvaDuVil
export default function() { return 'default' }
