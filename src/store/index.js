import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentData:[
    
        {
          name: 'Justin Septimus' ,
           email:   'example@email.com',
           status: 'Active',
           lastLogin: 'Last login: 14/Apr/2022',
           paymentStatus: 'Overdue',
           paymentDate: 'Paid on 15/APR/2020',
           amount: '$200',
           currency: 'USD',
           transactionDetails:[
            {
              date:'12-APR-2012',
                userActivities:'Tailwind is awesome',
                details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

            },
            {
              date:'10-APR-2012',
                userActivities:'Tailwind is awesome',
                details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

            },
               {
                   date:'08-APR-2012',
                   userActivities:'Tailwind is awesome',
                   details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

               },
               {
                   date:'08-APR-2012',
                   userActivities:'Tailwind is awesome',
                   details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

               },
               {
                   date:'04-APR-2012',
                   userActivities:'Tailwind is awesome',
                   details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

               },
           ]
          
        },
        {
          name: 'Anika Rhiel Madsen',
          email:   'ajaoibra@gmail',
          status: 'Inactive',
          lastLogin: 'Last login: 14/Apr/2022',
          paymentStatus: 'Unpaid',
           paymentDate: 'Paid on 15/APR/2020',
           amount: '$200',
           currency: 'USD',
            transactionDetails:[
                {
                    date:'12-APR-2012',
                    userActivities:'Vue is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

                },
                {
                    date:'10-APR-2012',
                    userActivities:'Vue is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',
                },
                {
                    date:'08-APR-2012',
                    userActivities:'Vue is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

                },
                {
                    date:'08-APR-2012',
                    userActivities:'Vue is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

                },
                {
                    date:'04-APR-2012',
                    userActivities:'Vue is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

                },
            ]
        },
        {
          name: 'Miracle Vaccaro',
          email:   'example@email.com',
          status: 'Active',
          lastLogin: 'Last login: 14/Apr/2022',
          paymentStatus: 'Paid',
          paymentDate: 'Paid on 15/APR/2020',
          amount: '$200',
           currency: 'USD',
            transactionDetails:[
                {
                    date:'12-APR-2012',
                    userActivities:'Tailwind is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

                },
                {
                    date:'10-APR-2012',
                    userActivities:'Tailwind is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

                },
                {
                    date:'08-APR-2012',
                    userActivities:'Tailwind is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

                },
                {
                    date:'08-APR-2012',
                    userActivities:'Tailwind is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',
                },
                {
                    date:'04-APR-2012',
                    userActivities:'Tailwind is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

                },
            ]

        },
        {
          name: 'Erin Levin',
          email:   'home@email.com',
          status: 'Inactive',
          lastLogin: 'Last login: 14/Apr/2022',
          paymentStatus: 'Paid',
           paymentDate: 'Paid on 15/APR/2020',
           amount: '$200',
           currency: 'USD',
            transactionDetails:[
                {
                    date:'12-APR-2012',
                    userActivities:'Vue is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',
                },
                {
                    date:'10-APR-2012',
                    userActivities:'Vue is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

                },
                {
                    date:'08-APR-2012',
                    userActivities:'Vue is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',
                },
                {
                    date:'08-APR-2012',
                    userActivities:'Vue is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',
                },
                {
                    date:'04-APR-2012',
                    userActivities:'Vue is awesome',
                    details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

                },
            ]
        },
       
    
    ],
    filteredPayment:[]
  },
  getters: {
    getPaymentData(state){
      return state.filteredPayment
    }
  },
  mutations: {
    SET_PAYMENT_DATA(state,data){
      state.filteredPayment= data
    }
  },
  actions: {
    getAllPaymentData({commit,state},payload){
      console.log('payload', payload)
      let filterPayment =[]
      if(payload.status === 'All'){
        filterPayment = state.paymentData 
      }
      else{
      filterPayment = state.paymentData.filter(item=>item.paymentStatus===payload.status)
console.log('filterPayment', filterPayment)
      }
      commit('SET_PAYMENT_DATA',filterPayment)
    }
  },
  modules: {
  }
})
