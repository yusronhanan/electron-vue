import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth_login: false,
    account:{
      email: '',
      password: ''
    },
    mailList:{}
    // mailList: new Set()
    // mailList: [{"delivered-to":["wideside20@gmail.com"],"received":["by 2002:a05:6638:629:0:0:0:0 with SMTP id h9csp2044602jar; Thu, 6 Aug 2020 19:35:36 -0700 (PDT)","from 69-171-232-146.mail-mail.facebook.com (69-171-232-146.mail-mail.facebook.com. [69.171.232.146]) by mx.google.com with ESMTPS id 105si2992579otf.159.2020.08.06.19.35.36 for <wideside20@gmail.com> (version=TLS1_3 cipher=TLS_AES_256_GCM_SHA384 bits=256/256); Thu, 06 Aug 2020 19:35:36 -0700 (PDT)"],"x-google-smtp-source":["ABdhPJxmkGdbTZzT7e57y1LMAXJknTAy4rWviGmKWHc9RHmk5rb439OfOflg9e+QpUGOmb1LbuHC"],"x-received":["by 2002:a9d:7443:: with SMTP id p3mr9661340otk.80.1596767736300; Thu, 06 Aug 2020 19:35:36 -0700 (PDT)"],"arc-seal":["i=1; a=rsa-sha256; t=1596767736; cv=none; d=google.com; s=arc-20160816; b=Xqc6C7gW6A1bwT27ZyTuo6q2MkMyheoCmvoMPMiLTYDH8oRHyweP+YY4BLhjbri0rl 8tQg8FLyvIPFBfvurD6SwstEbSC+i06cdtxXURFik+OqYu3eiLaYciEnHtfsrsBKs9jl Lxv0J/6g71GvPi6KlMmG3R+5AlDLCxDbzE1SryYKs4FPi7Fc7xlj04Ig/K9XdeW0BTZX vOuDPNvsRiWbiPNUOYymGJFjFsw6CvVw9NSa51x37XqYNHq+E5q9yO/A5BBwcZAud04r /FxBOkxVkS1GZK2VTDJj2GV13HaMFBwqN85d4KNjnFZDmzPKzU9phWykPci+Xj59OhMb 01uw=="],"arc-message-signature":["i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816; h=content-transfer-encoding:mime-version:message-id:feedback-id :errors-to:reply-to:from:subject:to:date:dkim-signature; bh=eDLPZljqToy5689vv+P0jZM/phnOUt+X9kXKXw5NiCM=; b=ZmPj8LWbj54EEorX8t22qErbpOGvJbGB1U2xrdsRkzMMc+IPDr5Zc3v5/3TBaF1EY8 7Un8u1fFtf5LSvumlPO5DxwtwHQVPlLqOJ/xKPUroi3Ul6ycWdGu1Tf0Z33D5JZTMzGQ 7RYUY6GnfP7X9lozLDnV20QVGHU+3G+2vf3spfabZmOmNcQv5Frs+KDZQ3qA5jQhXxlF uxBAfzE6bTllFqMHQd7n2DB1i3TQRPf6LSbCEux7ZX9MLL0YBVkaWb3LFgqCASZIJ5C5 uonQZNNPoCF42FAbbaEeDJyMoegeuALis+p7TejuwV/YH6/sQZ7KlvFDCnzmHY8P4YYs Cuhw=="],"arc-authentication-results":["i=1; mx.google.com; dkim=pass header.i=@mail.instagram.com header.s=s1024-2013-q3 header.b=PMqBOOgZ; spf=pass (google.com: domain of no-reply@mail.instagram.com designates 69.171.232.146 as permitted sender) smtp.mailfrom=no-reply@mail.instagram.com; dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=mail.instagram.com"],"return-path":["<no-reply@mail.instagram.com>","no-reply@mail.instagram.com"],"received-spf":["pass (google.com: domain of no-reply@mail.instagram.com designates 69.171.232.146 as permitted sender) client-ip=69.171.232.146;"],"authentication-results":["mx.google.com; dkim=pass header.i=@mail.instagram.com header.s=s1024-2013-q3 header.b=PMqBOOgZ; spf=pass (google.com: domain of no-reply@mail.instagram.com designates 69.171.232.146 as permitted sender) smtp.mailfrom=no-reply@mail.instagram.com; dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=mail.instagram.com"],"dkim-signature":["v=1; a=rsa-sha256; c=relaxed/simple; d=mail.instagram.com; s=s1024-2013-q3; t=1596767655; bh=eDLPZljqToy5689vv+P0jZM/phnOUt+X9kXKXw5NiCM=; h=Date:To:Subject:From:MIME-Version:Content-Type; b=PMqBOOgZZoZnIKiofGjVjmiFBByEsnCdJtY0X0NnHT+GSEXU0qrNrqpZeW+kSlvbg LI6QQ7YxpTBDS9coX0Ug7wdwTBmGJaNcuxW+i7Jl+Sl3PERRKo0KEICH07SzGYK8sH 6nsbA1g7gzqJzp5RnK0RlSx61oJi/iluIsENieZY="],"x-facebook":["from 2401:db00:122c:920:face:0:2f:0 ([MTI3LjAuMC4x]) by www.facebook.com with HTTPS (ZuckMail);"],"date":["Thu, 6 Aug 2020 19:34:15 -0700"],"to":["wideside20@gmail.com"],"subject":["612807 is your Instagram code"],"x-priority":["3"],"x-mailer":["ZuckMail [version 1.00]"],"from":["\"Instagram\" <no-reply@mail.instagram.com>"],"reply-to":["Instagram <no-reply@mail.instagram.com>"],"errors-to":["no-reply@mail.instagram.com"],"x-facebook-notify":["ig_verify_email_for_recovery; mailid=5ac40274dafeaG24bc2cdafa4000G5ac4070e3b2bcG37f"],"feedback-id":["9999:ig_verify_email_for_recovery:Facebook"],"x-facebook-priority":["0"],"x-auto-response-suppress":["All"],"message-id":["<02784ed69fa6b7e132d5209f121881ca@3e723b591bdb95ce8f5c9b7032dc572ca97351d0da5efc73459c1fbaf438e43b>"],"mime-version":["1.0"],"content-transfer-encoding":["quoted-printable"],"content-type":["text/html; charset=\"UTF-8\""]}] //new Set()
      
  },
  getters:{
    get_auth_login_inverse(state){
      return !state.auth_login
    },
    getSubject(state){
      return state.mailList.subject
    },
    getDate(state){
      return state.mailList.date
    },
    getFrom(state){
      return state.mailList.from
    }
  },
  mutations: {
    account_sign_in(state,account){ //, params
      console.log('Store sign in')

      state.account = account
      

      
      axios.post('http://localhost:3000/loginmail', state.account).then(res => {
        state.mailList = res.data
        console.log(res.data)
        // state.mailList.add(res.data)
        console.log(state.mailList)
      })
        state.auth_login = true      
    },
    account_sign_out(state){
      console.log('Store sign out')
      state.account.email = ''
      state.account.password = ''
      state.auth_login = false
      state.mailList = {}
    }
  },
  actions: {
    login({commit},account){
      commit('account_sign_in',account);
      
    },
    sign_out({commit}){
      commit('account_sign_out');
    }
  },
  modules: {
  }
})
