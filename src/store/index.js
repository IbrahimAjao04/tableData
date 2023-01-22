import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentData:[
    
        {
          name: 'Justin Septimus' ,
          id:1,
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
          id:2,
          email:   'tomandjerry@gmail.com',
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
          id:3,
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
          id: 4,
          email: 'home@email.com',
          status: 'Inactive',
          lastLogin: 'Last login: 14/Apr/2022',
          paymentStatus: 'Unpaid',
           paymentDate: 'Dews on 15/APR/2020',
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
          name: 'Ibrahim Ajao',
          id: 5,
          email: 'ajaoibra@gmail.com',
          status: 'Active',
          lastLogin: 'Last login: 14/APR/2020',
          paymentStatus: 'Paid',
          paymentDate: 'Paid on 15/APR/2020',
          amount: '$1000',
          currency: 'USD',
          transactionDetails: [
            {
              date:'12-APR-2012',
              userActivities:'Vue UI framework',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',
          },
          {
              date:'10-APR-2012',
              userActivities:'Vue UI framework',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',
          },
          {
              date:'08-APR-2012',
              userActivities:'Vue UI framework',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',
          },
          {
              date:'08-APR-2012',
              userActivities:'Vue UI framework',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',
          },
          {
              date:'04-APR-2012',
              userActivities:'Vue UI framework',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',
          },
          ]
        },
        {
          name: 'Jaxson Siphron',
          id: 6,
          email: 'w3school@gmail.com',
          status: 'Inactive',
          lastLogin: 'Last login: 14/APR/2020',
          paymentStatus: 'Paid',
          paymentDate: 'Paid on 15/APR/2020',
          amount: '$600',
          currency: 'USD',
          transactionDetails: [
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

          },          ]
        },
        {
          name: 'Mira Levin',
          id: 7,
          email: 'vuetify@gmail.com',
          status: 'Inactive',
          lastLogin: 'Last login: 14/APR/2020',
          paymentStatus: 'Paid',
          paymentDate: 'Dues on 15/APR/2020',
          amount: '$300',
          currency: 'USD',
          transactionDetails: [
            
          ]
        },
        {
          name: 'Lincon Levin',
          id: 8,
          email: 'royalpower@gmail.com',
          status: 'Active',
          lastLogin: 'Last login: 14/APR/2020',
          paymentStatus: 'Paid',
          paymentDate: '15/APR/2020',
          amount: '$500',
          currency: 'USD',
          transactionDetails: [
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

          },          ]
        },
        {
          name: 'Philip Saris',
          id: 9,
          email: 'scelloo@gmail.com',
          status: 'Inactive',
          lastLogin: 'Last login: 14/APR/2020',
          paymentStatus: 'Unpaid',
          paymentDate: 'Dues on 15/APR/2020',
          amount: '$500',
          currency: 'USD',
          transactionDetails: [
            {
              date:'12-APR-2012',
              userActivities:'Vuetify is awesome',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

          },
          {
              date:'10-APR-2012',
              userActivities:'Vuetify is awesome',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

          },
          {
              date:'08-APR-2012',
              userActivities:'Vuetify is awesome',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

          },
          {
              date:'08-APR-2012',
              userActivities:'Vuetify is awesome',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',
          },
          {
              date:'04-APR-2012',
              userActivities:'Vuetify is awesome',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',
          },
          ]
        },
        {
          name: 'Cheyenne Ekstrom Bothman',
          id: 10,
          email: 'programmer@gmail.com',
          status: 'Inactive',
          lastLogin: 'Last login:14/APR/2010',
          paymentStatus: 'Paid',
          paymentDate: 'Paid On 15/APR/2010',
          amount: '$500',
          currency: 'USD',
          transactionDetails: [
            {
              date:'12-APR-2012',
              userActivities:'Vue UI framework',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

          },
          {
              date:'10-APR-2012',
              userActivities:'Vue UI framework',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

          },
          {
              date:'08-APR-2012',
              userActivities:'Vue UI framework',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

          },
          {
              date:'08-APR-2012',
              userActivities:'Vue UI framework',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',
          },
          {
              date:'04-APR-2012',
              userActivities:'Vue UI framework',
              details:'<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper <br>morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.</h4>',

          },
          ]
        }
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
    },
    UPDATE_PAYMENT_DETAILS(state,data){
    let index  = state.paymentData.findIndex(item=> item.id === data.id)  
    if(index !== -1){
      state.paymentData[index].paymentStatus = 'Paid'
    }

    }
  },

  actions: {
    getAllPaymentData({commit,state},payload){
      let filterPayment =[]
      if(payload.status === 'All'){
        filterPayment = state.paymentData 
      }
      else{
      filterPayment = state.paymentData.filter(item=>item.paymentStatus===payload.status)
        console.log('filterPayment', filterPayment)
      }
      commit('SET_PAYMENT_DATA',filterPayment)
    },
    payDues({commit},payload){
        commit('UPDATE_PAYMENT_DETAILS',payload)
    
  },
},
  modules: {
  }
})
