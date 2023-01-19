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
              date:'1-10-2012',
              details:'nddjjddhfj',
              userActivities:'sadsjsja'
            },
            {
              date:'1-10-2012',
              details:'nddjjddhfj',
              userActivities:'sadsjsja'
            },
           ]
          
        },
        {
          name: 'Anika Rhiel Madsen',
          email:   'example@email.com',
          status: 'Inactive',
          lastLogin: 'Last login: 14/Apr/2022',
          paymentStatus: 'Unpaid',
           paymentDate: 'Paid on 15/APR/2020',
           amount: '$200',
           currency: 'USD',
           transactionDetails:[
            {
              date:'1-10-2012',
              details:'nddjjddhfj',
              userActivities:'sadsjsja'
            },
            {
              date:'1-10-2012',
              details:'nddjjddhfj',
              userActivities:'sadsjsja'
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
              date:'1-10-2012',
              details:'nddjjddhfj',
              userActivities:'sadsjsja'
            },
            {
              date:'1-10-2012',
              details:'nddjjddhfj',
              userActivities:'sadsjsja'
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
