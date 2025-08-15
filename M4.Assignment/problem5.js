function  resultReport( marks ) {
    if(!Array.isArray(marks)) return "Invalid";

     if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }

    let totalMarks = 0;
    let passed = 0;
    let failed = 0;
    for(mark of marks){
        totalMarks += mark;
        if(mark >= 40) passed++;
        else failed++;
    }

    let fScore = Math.round(totalMarks / marks.length);
    
    return {finalScore: fScore, pass: passed, fail: failed};

}

console.log(resultReport(100));
