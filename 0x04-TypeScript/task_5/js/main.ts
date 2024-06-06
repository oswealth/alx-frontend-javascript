interface MajorCredits {
    credits: number;
  }
  
  interface MinorCredits {
    credits: number;
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    return subject1.credits + subject2.credits;
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits;
  }
  
  // testing interfaces and funtions
  const major1: MajorCredits = {
    credits: 8,
  };
  
  const major2: MajorCredits = {
    credits: 12,
  };
  
  const minor1: MinorCredits = {
    credits: 3,
  };
  
  const minor2: MinorCredits = {
    credits: 4,
  };
  
  console.log(sumMajorCredits(major1, major2));
  console.log(sumMinorCredits(minor1, minor2));
  