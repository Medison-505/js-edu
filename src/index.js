/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {

    let requiredTimeForLearning = 800;
    if (!knowsProgramming){
        requiredTimeForLearning = requiredTimeForLearning+500;
    }
    let freeTimeForLearning = config[focus];
    let requiredWeeks = requiredTimeForLearning / freeTimeForLearning;
    return Math.ceil(requiredWeeks);
  };
  