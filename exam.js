let militaryUnit = {

    name: "1st Infantry Division",
  
    location: "Fort Bragg, North Carolina, USA",
  
    establishmentDate: "1941-06-01",
  
    unitType: "Infantry Division",
  
    commandStructure: {
  
      commandingOfficer: {
  
        rank: "Major General",
  
        name: "John Doe",
  
        contact: {
  
          email: "john.doe@example.com",
  
          phone: "+1-555-123-4567",
  
        },
  
      },
  
      executiveOfficer: {
  
        rank: "Colonel",
  
        name: "Jane Smith",
  
        contact: {
  
          email: "jane.smith@example.com",
  
          phone: "+1-555-987-6543",
  
        },
  
      },
  
      chiefOfStaff: {
  
        rank: "Brigadier General",
  
        name: "Robert Brown",
  
        contact: {
  
          email: "robert.brown@example.com",
  
          phone: "+1-555-555-1234",
  
        },
  
      },
  
    },
  
    personnel: [
  
      {
  
        id: 1,
  
        name: "Private First Class Alice Johnson",
  
        rank: "Private First Class",
  
        role: "Rifleman",
  
        contact: {
  
          email: "alice.johnson@example.com",
  
          phone: "+1-555-000-1111",
  
        },
  
      },
  
      {
  
        id: 2,
  
        name: "Sergeant Michael White",
  
        rank: "Sergeant",
  
        role: "Squad Leader",
  
        contact: {
  
          email: "michael.white@example.com",
  
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  
    equipment: {
  
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  
      firearms: [
  
        {
  
          type: "M16 Rifle",
  
          quantity: 500,
  
          status: "Operational",
  
        },
  
        {
  
          type: "M249 SAW",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  
    trainingPrograms: [
  
      {
  
        programName: "Basic Combat Training",
  
        duration: 10,
  
        focus:
  
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
  
      },
  
      {
  
        programName: "Advanced Individual Training",
  
        duration: 12,
  
        focus:
  
          "Specialized training for specific military occupational specialties.",
  
      },
  
    ],
  
    history: [
  
      {
  
        eventDate: "1941-06-01",
  
        eventDescription: "Establishment of the 1st Infantry Division.",
  
      },
  
      {
  
        eventDate: "1944-06-06",
  
        eventDescription: "Participated in the D-Day landings in Normandy.",
  
      },
  
    ],
  
    currentDeployment: {
  
      location: "Middle East",
  
      mission: "Counter-terrorism operations",
  
      startDate: "2024-01-01",
  
      estimatedEndDate: "2024-12-31",
  
    },
  
  };
  
  

  // Mission 1
  const Mission1 = (obj) => {
    const name = obj.commandStructure.chiefOfStaff.name;
    const rank = obj.commandStructure.chiefOfStaff.rank;
    const phone = obj.commandStructure.chiefOfStaff.contact.phone;
    const strDetails = `Name: ${name}, Rank: ${rank}, Phone: ${phone}`;
    return strDetails;
  }

  // Mission 2
  const Mission2 = (obj) => {
    const amountOfSoldiers = obj.personnel.length;
    return amountOfSoldiers.toString();
  }
  
  // Mission 3
  const Mission3 = (newDeployment, unitObj) => {
    const currentDeployment = unitObj.currentDeployment;

    const deploymentToPush = {
        eventDate: currentDeployment.estimatedEndDate,
        eventDescription: `${currentDeployment.mission} in ${currentDeployment.location}`
    };
    unitObj.history.push(deploymentToPush);

    unitObj.currentDeployment.location = newDeployment.location;
    unitObj.currentDeployment.mission = newDeployment.mission;
    unitObj.currentDeployment.startDate = newDeployment.startDate;
    unitObj.currentDeployment.estimatedEndDate = newDeployment.estimatedEndDate;

    return unitObj;
  }
//   let x = {
//     location: "aaaaa",
//     mission: "bbbbb",
//     startDate: "ccccc",
//     estimatedEndDate: "ddddd"
//   };
//   console.log(Mission3(x, militaryUnit));
  

  //Mission 4
  const Mission4 = (firearmObj, unitObj) => {
    const firearmsArr = unitObj.equipment.firearms;
    // assign the value returned from the function, if it equals to -1 it isn't exists, otherwise it return the index of the existing firearm
    const index = isSameFirearm(firearmObj, firearmsArr);
    if(index != -1){
        unitObj.equipment.firearms[index].quantity += firearmObj.quantity; 
    }
    else{
        unitObj.equipment.firearms.push(firearmObj);
    }
    return unitObj;
  }
  // checks if the firearm object alredy exists in the unit and return the index if it exists or -1 if not
  function isSameFirearm(firearm, firearmArr){
    for(let i = 0;i < firearmArr.length;i++){
        if(firearm.type == firearmArr[i].type && firearm.status == firearmArr[i].status)
            return i;
    }
    return -1;
  }
//   let s = {
//     type: "aa",
//     quantity: 6,
//     status: "bb"
//   }
//   console.log(Mission4(s, militaryUnit));
  

  // Mission 5
  const Mission5 = (unitObj) => {
    const durationOfAllTrainings = 0;
    unitObj.trainingPrograms.forEach((val) => {
        durationOfAllTrainings += val.duration;
    });
    return durationOfAllTrainings;
  }


module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4,
    Mission5
};
