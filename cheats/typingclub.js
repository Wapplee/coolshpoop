(async ()=>{
    function extractNumberBeforePlay(url) {
        const match = url.match(/(\d+)\.play/);
        return match ? match[1] : -1;
      }
      
      const url = document.location.href;
      const num = extractNumberBeforePlay(url);
    
        var modifiedUrl = url.replace(/\/\d+\.play/, '.game');
    
        var json = await fetch("https://www.typingclub.com/auth/refresh_tokens/", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-US,en;q=0.9",
              "content-type": "application/json",
              "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Opera GX\";v=\"102\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.typingclub.com/sportal/program-3.game",
            "referrerPolicy": "same-origin",
            "body": "{\"domain\":\"www\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
          });
          fetch("https://www.typingclub.com/api/v1.1/attempt/postTypingResults/", {
            "headers": {
              "accept": "application/json, text/javascript, */*; q=0.01",
              "accept-language": "en-US,en;q=0.9",
              "authorization": "Token "+((await json.json())[0].token),
              "content-type": "application/json",
              "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Opera GX\";v=\"102\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.typingclub.com/sportal/program-3/119.play",
            "referrerPolicy": "same-origin",
            "body": "{\"team_id\":408163,\"lesson_id\":"+num+",\"frotz\":{\"per_chr\":[{\"index\":0,\"valid\":true,\"dur\":0,\"real_valid\":true,\"chr\":\"f\",\"word_index\":0,\"dirty\":true},{\"index\":1,\"valid\":true,\"dur\":168,\"real_valid\":true,\"chr\":\"f\",\"word_index\":0,\"dirty\":true},{\"index\":2,\"valid\":true,\"dur\":164,\"real_valid\":true,\"chr\":\"f\",\"word_index\":0,\"dirty\":true},{\"index\":3,\"valid\":true,\"dur\":164,\"real_valid\":true,\"chr\":\"f\",\"word_index\":0,\"dirty\":true},{\"index\":4,\"valid\":true,\"dur\":374,\"real_valid\":false,\"chr\":\" \",\"word_index\":1,\"dirty\":true},{\"index\":5,\"valid\":true,\"dur\":466,\"real_valid\":true,\"chr\":\"j\",\"word_index\":1,\"dirty\":true},{\"index\":6,\"valid\":true,\"dur\":454,\"real_valid\":true,\"chr\":\"j\",\"word_index\":1,\"dirty\":true},{\"index\":7,\"valid\":true,\"dur\":873,\"real_valid\":true,\"chr\":\"j\",\"word_index\":1,\"dirty\":true},{\"index\":8,\"valid\":true,\"dur\":500,\"real_valid\":true,\"chr\":\"j\",\"word_index\":1,\"dirty\":true},{\"index\":9,\"valid\":true,\"dur\":967,\"real_valid\":true,\"chr\":\" \",\"word_index\":2,\"dirty\":true},{\"index\":10,\"valid\":true,\"dur\":467,\"real_valid\":true,\"chr\":\"f\",\"word_index\":2,\"dirty\":true},{\"index\":11,\"valid\":true,\"dur\":190,\"real_valid\":true,\"chr\":\"f\",\"word_index\":2,\"dirty\":true},{\"index\":12,\"valid\":true,\"dur\":95,\"real_valid\":true,\"chr\":\" \",\"word_index\":3,\"dirty\":true},{\"index\":13,\"valid\":true,\"dur\":132,\"real_valid\":true,\"chr\":\"j\",\"word_index\":3,\"dirty\":true},{\"index\":14,\"valid\":true,\"dur\":162,\"real_valid\":true,\"chr\":\"j\",\"word_index\":3,\"dirty\":true},{\"index\":15,\"valid\":true,\"dur\":133,\"real_valid\":true,\"chr\":\" \",\"word_index\":4,\"dirty\":true},{\"index\":16,\"valid\":true,\"dur\":104,\"real_valid\":true,\"chr\":\"f\",\"word_index\":4,\"dirty\":true},{\"index\":17,\"valid\":true,\"dur\":179,\"real_valid\":true,\"chr\":\"f\",\"word_index\":4,\"dirty\":true},{\"index\":18,\"valid\":true,\"dur\":198,\"real_valid\":true,\"chr\":\"f\",\"word_index\":4,\"dirty\":true},{\"index\":19,\"valid\":true,\"dur\":118,\"real_valid\":true,\"chr\":\" \",\"word_index\":5,\"dirty\":true},{\"index\":20,\"valid\":true,\"dur\":108,\"real_valid\":true,\"chr\":\"j\",\"word_index\":5,\"dirty\":true},{\"index\":21,\"valid\":true,\"dur\":154,\"real_valid\":true,\"chr\":\"j\",\"word_index\":5,\"dirty\":true},{\"index\":22,\"valid\":true,\"dur\":166,\"real_valid\":true,\"chr\":\"j\",\"word_index\":5,\"dirty\":true},{\"index\":23,\"valid\":true,\"dur\":134,\"real_valid\":true,\"chr\":\" \",\"word_index\":6,\"dirty\":true},{\"index\":24,\"valid\":true,\"dur\":145,\"real_valid\":true,\"chr\":\"f\",\"word_index\":6,\"dirty\":true},{\"index\":25,\"valid\":true,\"dur\":137,\"real_valid\":true,\"chr\":\"j\",\"word_index\":6,\"dirty\":true},{\"index\":26,\"valid\":true,\"dur\":295,\"real_valid\":false,\"chr\":\" \",\"word_index\":7,\"dirty\":true},{\"index\":27,\"valid\":true,\"dur\":420,\"real_valid\":false,\"chr\":\"f\",\"word_index\":7,\"dirty\":true},{\"index\":28,\"valid\":true,\"dur\":403,\"real_valid\":true,\"chr\":\"j\",\"word_index\":7,\"dirty\":true},{\"index\":29,\"valid\":true,\"dur\":161,\"real_valid\":true,\"chr\":\" \",\"word_index\":8,\"dirty\":true},{\"index\":30,\"valid\":true,\"dur\":342,\"real_valid\":false,\"chr\":\"j\",\"word_index\":8,\"dirty\":true},{\"index\":31,\"valid\":true,\"dur\":497,\"real_valid\":true,\"chr\":\"j\",\"word_index\":8,\"dirty\":true},{\"index\":32,\"valid\":true,\"dur\":112,\"real_valid\":true,\"chr\":\"f\",\"word_index\":8,\"dirty\":true},{\"index\":33,\"valid\":true,\"dur\":155,\"real_valid\":true,\"chr\":\" \",\"word_index\":9,\"dirty\":true},{\"index\":34,\"valid\":true,\"dur\":299,\"real_valid\":true,\"chr\":\"f\",\"word_index\":9,\"dirty\":true},{\"index\":35,\"valid\":true,\"dur\":199,\"real_valid\":true,\"chr\":\"f\",\"word_index\":9,\"dirty\":true},{\"index\":36,\"valid\":true,\"dur\":99,\"real_valid\":true,\"chr\":\"j\",\"word_index\":9,\"dirty\":true},{\"index\":37,\"valid\":true,\"dur\":138,\"real_valid\":true,\"chr\":\" \",\"word_index\":10,\"dirty\":true},{\"index\":38,\"valid\":true,\"dur\":224,\"real_valid\":true,\"chr\":\"f\",\"word_index\":10,\"dirty\":true},{\"index\":39,\"valid\":true,\"dur\":180,\"real_valid\":true,\"chr\":\"f\",\"word_index\":10,\"dirty\":true},{\"index\":40,\"valid\":true,\"dur\":171,\"real_valid\":true,\"chr\":\"f\",\"word_index\":10,\"dirty\":true},{\"index\":41,\"valid\":true,\"dur\":94,\"real_valid\":true,\"chr\":\" \",\"word_index\":11,\"dirty\":true},{\"index\":42,\"valid\":true,\"dur\":90,\"real_valid\":true,\"chr\":\"j\",\"word_index\":11,\"dirty\":true},{\"index\":43,\"valid\":true,\"dur\":158,\"real_valid\":true,\"chr\":\"j\",\"word_index\":11,\"dirty\":true},{\"index\":44,\"valid\":true,\"dur\":144,\"real_valid\":true,\"chr\":\"j\",\"word_index\":11,\"dirty\":true},{\"index\":45,\"valid\":true,\"dur\":140,\"real_valid\":true,\"chr\":\" \",\"word_index\":12,\"dirty\":true},{\"index\":46,\"valid\":true,\"dur\":86,\"real_valid\":true,\"chr\":\"f\",\"word_index\":12,\"dirty\":true},{\"index\":47,\"valid\":true,\"dur\":185,\"real_valid\":true,\"chr\":\"f\",\"word_index\":12,\"dirty\":true},{\"index\":48,\"valid\":true,\"dur\":107,\"real_valid\":true,\"chr\":\"j\",\"word_index\":12,\"dirty\":true},{\"index\":49,\"valid\":true,\"dur\":156,\"real_valid\":true,\"chr\":\" \",\"word_index\":13,\"dirty\":true},{\"index\":50,\"valid\":true,\"dur\":436,\"real_valid\":true,\"chr\":\"j\",\"word_index\":13,\"dirty\":true},{\"index\":51,\"valid\":true,\"dur\":151,\"real_valid\":true,\"chr\":\"j\",\"word_index\":13,\"dirty\":true},{\"index\":52,\"valid\":true,\"dur\":114,\"real_valid\":true,\"chr\":\"f\",\"word_index\":13,\"dirty\":true},{\"index\":53,\"valid\":true,\"dur\":188,\"real_valid\":true,\"chr\":\" \",\"word_index\":14,\"dirty\":true},{\"index\":54,\"valid\":true,\"dur\":187,\"real_valid\":true,\"chr\":\"f\",\"word_index\":14,\"dirty\":true},{\"index\":55,\"valid\":true,\"dur\":501,\"real_valid\":true,\"chr\":\"j\",\"word_index\":14,\"dirty\":true},{\"index\":56,\"valid\":true,\"dur\":127,\"real_valid\":true,\"chr\":\"f\",\"word_index\":14,\"dirty\":true},{\"index\":57,\"valid\":true,\"dur\":123,\"real_valid\":true,\"chr\":\"j\",\"word_index\":14,\"dirty\":true},{\"index\":58,\"valid\":true,\"dur\":338,\"real_valid\":true,\"chr\":\" \",\"word_index\":15,\"dirty\":true},{\"index\":59,\"valid\":true,\"dur\":302,\"real_valid\":true,\"chr\":\"f\",\"word_index\":15,\"dirty\":true},{\"index\":60,\"valid\":true,\"dur\":163,\"real_valid\":true,\"chr\":\"f\",\"word_index\":15,\"dirty\":true},{\"index\":61,\"valid\":true,\"dur\":166,\"real_valid\":true,\"chr\":\"f\",\"word_index\":15,\"dirty\":true},{\"index\":62,\"valid\":true,\"dur\":130,\"real_valid\":true,\"chr\":\"j\",\"word_index\":15,\"dirty\":true},{\"index\":63,\"valid\":true,\"dur\":159,\"real_valid\":true,\"chr\":\" \",\"word_index\":16,\"dirty\":true},{\"index\":64,\"valid\":true,\"dur\":341,\"real_valid\":true,\"chr\":\"j\",\"word_index\":16,\"dirty\":true},{\"index\":65,\"valid\":true,\"dur\":177,\"real_valid\":true,\"chr\":\"j\",\"word_index\":16,\"dirty\":true},{\"index\":66,\"valid\":true,\"dur\":162,\"real_valid\":true,\"chr\":\"j\",\"word_index\":16,\"dirty\":true},{\"index\":67,\"valid\":true,\"dur\":104,\"real_valid\":true,\"chr\":\"f\",\"word_index\":16,\"dirty\":true},{\"index\":68,\"valid\":true,\"dur\":143,\"real_valid\":true,\"chr\":\" \",\"word_index\":17,\"dirty\":true},{\"index\":69,\"valid\":true,\"dur\":353,\"real_valid\":true,\"chr\":\"f\",\"word_index\":17,\"dirty\":true},{\"index\":70,\"valid\":true,\"dur\":189,\"real_valid\":true,\"chr\":\"f\",\"word_index\":17,\"dirty\":true},{\"index\":71,\"valid\":true,\"dur\":116,\"real_valid\":true,\"chr\":\"j\",\"word_index\":17,\"dirty\":true},{\"index\":72,\"valid\":true,\"dur\":145,\"real_valid\":true,\"chr\":\"j\",\"word_index\":17,\"dirty\":true},{\"index\":73,\"valid\":true,\"dur\":148,\"real_valid\":true,\"chr\":\" \",\"word_index\":18,\"dirty\":true},{\"index\":74,\"valid\":true,\"dur\":287,\"real_valid\":true,\"chr\":\"f\",\"word_index\":18,\"dirty\":true},{\"index\":75,\"valid\":true,\"dur\":167,\"real_valid\":true,\"chr\":\"f\",\"word_index\":18,\"dirty\":true},{\"index\":76,\"valid\":true,\"dur\":256,\"real_valid\":true,\"chr\":\" \",\"word_index\":19,\"dirty\":true},{\"index\":77,\"valid\":true,\"dur\":126,\"real_valid\":true,\"chr\":\"j\",\"word_index\":19,\"dirty\":true},{\"index\":78,\"valid\":true,\"dur\":143,\"real_valid\":true,\"chr\":\"j\",\"word_index\":19,\"dirty\":true},{\"index\":79,\"valid\":true,\"dur\":177,\"real_valid\":true,\"chr\":\" \",\"word_index\":20,\"dirty\":true},{\"index\":80,\"valid\":true,\"dur\":167,\"real_valid\":true,\"chr\":\"f\",\"word_index\":20,\"dirty\":true},{\"index\":81,\"valid\":true,\"dur\":185,\"real_valid\":true,\"chr\":\"f\",\"word_index\":20,\"dirty\":true},{\"index\":82,\"valid\":true,\"dur\":158,\"real_valid\":true,\"chr\":\"f\",\"word_index\":20,\"dirty\":true},{\"index\":83,\"valid\":true,\"dur\":170,\"real_valid\":true,\"chr\":\"f\",\"word_index\":20,\"dirty\":true}],\"history\":[[\"f\",0],[\"f\",168],[\"f\",164],[\"f\",164],[\"j\",233],[\"j\",164],[\"j\",151],[\"j\",597],[\"j\",203],[\" \",111],[\"<-\",353],[\"<-\",671],[\"<-\",126],[\"<-\",131],[\"<-\",142],[\"<-\",173],[\" \",141],[\"j\",129],[\"j\",161],[\"j\",145],[\"j\",171],[\" \",185],[\"f\",114],[\"f\",190],[\" \",95],[\"j\",132],[\"j\",162],[\" \",133],[\"f\",104],[\"f\",179],[\"f\",198],[\" \",118],[\"j\",108],[\"j\",154],[\"j\",166],[\" \",134],[\"f\",145],[\"j\",137],[\"f\",159],[\"j\",141],[\"<-\",292],[\"<-\",148],[\" \",136],[\"f\",131],[\"j\",111],[\" \",161],[\"f\",132],[\"<-\",357],[\"j\",210],[\"j\",140],[\"f\",112],[\" \",155],[\"f\",299],[\"f\",199],[\"j\",99],[\" \",138],[\"f\",224],[\"f\",180],[\"f\",171],[\" \",94],[\"j\",90],[\"j\",158],[\"j\",144],[\" \",140],[\"f\",86],[\"f\",185],[\"j\",107],[\" \",156],[\"j\",436],[\"j\",151],[\"f\",114],[\" \",188],[\"f\",187],[\"j\",501],[\"f\",127],[\"j\",123],[\" \",338],[\"f\",302],[\"f\",163],[\"f\",166],[\"j\",130],[\" \",159],[\"j\",341],[\"j\",177],[\"j\",162],[\"f\",104],[\" \",143],[\"f\",353],[\"f\",189],[\"j\",116],[\"j\",145],[\" \",148],[\"f\",287],[\"f\",167],[\" \",256],[\"j\",126],[\"j\",143],[\" \",177],[\"f\",167],[\"f\",185],[\"f\",158],[\"f\",170],[\"\",1]],\"lesson_text\":\"ffff jjjj ff jj fff jjj fj fj jjf ffj fff jjj ffj jjf fjfj fffj jjjf ffjj ff jj ffff\",\"is_partial\":0,\"deletable\":true,\"on_error\":\"continue\",\"profile_block_on_errors\":null,\"use_hand\":null},\"start_time\":"+(new Date).getTime()+",\"duration\":31527}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
          });
          
          window.location.replace(modifiedUrl);
      

})();