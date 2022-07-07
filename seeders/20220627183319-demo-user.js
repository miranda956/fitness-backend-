'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Activities',[{
      name:"jogging",
      description:"10 minute jogging"
    },
    {
      name:"running",
      description:"10 minute run",

    },
    {
      name:"shortsprint",
      description:"10 minute sprint"
    },
   
  
  
  ]),
  await queryInterface.bulkInsert('User',[{
    username:"musularonald@gmail.com",
    password:"12345678"
    },
    {
      username:"musula@gmail.com",
      password:"12345678"
    },
    {
    username:"ronald@gmail.com",
    password:"12345678"
    },
    
    
    
    
    ])
  await queryInterface.bulkInsert('Routines',[{
    isPublic:true,
    name:"jogging",
    goal:"warmup",
    CreatorId:"1"

  },
  {
    isPublic:true,
    name:"weight lifting",
    goal:"warmup",
    CreatorId:"2"
  },
  {
    isPublic:true,
    name:"Sprint",
    goal:"warmup",
    CreatorId:"3"
  },
  
 


]),

await queryInterface.bulkInsert('RoutineActivities',[{
  duration:"3",
  count:"8",
  ActivityId:"1",
  RoutineId:"1"
  },
  {
  duration:"2",
  count:"1",
  ActivityId:"2",
  RoutineId:"2"
  },
  {
    duration:"3",
    count:"15",
    ActivityId:"3",
    RoutineId:"3"
  },
  
  
  
  
  ])




  
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * 
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
