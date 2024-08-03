window.onload=function(){
    var contactform = document.getElementById('contactform');
    if (contactform != null){
      contactform.addEventListener('submit', function(event) {
        event.preventDefault(); 
        // var loaderModal = document.getElementById("loadercenter");
        // loaderModal.style.display = "block";
        ownerMail(contactform);
        // ownerMail(contactform ,"loadercenter", 'contactform' ,'success-message', 'enquirepopup');
      });
    }
    
    
    function ownerMail(contactform){
      var formData = new FormData(contactform);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'owner-mail.php', true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            var successDiv = document.getElementById("successdiv");
            successDiv.style.display = "block";
            document.getElementById('contactform').reset();
          } else {
            console.error('Error: ' + xhr.status);
          }
        }
      };
      xhr.send(formData);
    }
    // function ownerMail(contactform, loaderId, contactformId , successMessageid, modalid){
    //   var formData = new FormData(contactform);
    //   formData.append('servicetype', document.getElementById("servicetype").innerHTML);
    //   disableForm(contactformId);
    //   var xhr = new XMLHttpRequest();
    //   xhr.open('POST', 'owner-mail.php', true);
    //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    //   xhr.onreadystatechange = function() {
    //     if (xhr.readyState === XMLHttpRequest.DONE) {
    //       if (xhr.status === 200) {
    //         document.getElementById(contactformId).reset();
    //         document.getElementById("servicetype").innerHTML="Select Services";
    //         var messageBody = document.getElementById(successMessageid);
    //         var loaderModal = document.getElementById(loaderId);
    //         loaderModal.style.display = "none";
    //         messageBody.style.display = "block";
    //         enableForm(contactformId);
    //     var disablemodalpointer = document.getElementById("contactpageform");
    //     disablemodalpointer.style.pointerEvents = "auto";
    //       } else {
    //         var loaderModal = document.getElementById(loaderId);
    //         loaderModal.style.display = "none";
    //         console.error('Error: ' + xhr.status);
    //         enableForm(contactformId);
    //         var disablemodalpointer = document.getElementById("contactpageform");
    //         disablemodalpointer.style.pointerEvents = "auto";
    //       }
    //     }
    //   };
    //   xhr.send(formData);
    // }
  
  
    
    
    }
    
    
    
    
    