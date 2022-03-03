/*version 2.4*/

var $ = jQuery.noConflict();
var hl_end_content_pos;
var locations;
var global_plot_marker=[];
var branching_system = 0;
jQuery.fn.exists = function(){return this.length>0;}

jQuery(document).ready(function() {	
	//hl_end_content_pos = parseFloat($('.footer-wrap').position().top)+50;	
	
	var website_date_picker_format="yy-mm-dd";
    if ( $("#website_date_picker_format").exists()){
    	website_date_picker_format= $("#website_date_picker_format").val();
	}
	
    if(typeof(jQuery().datepicker) == 'function') {
		jQuery(".j_date").datepicker({ 
			//dateFormat: 'yy-mm-dd' ,
			dateFormat: website_date_picker_format,        
			altFormat: "yy-mm-dd",       
			changeMonth: true,
			changeYear: true ,	   
			minDate: 0,
			prevText: js_lang.datep_1,
			nextText: js_lang.datep_2,
			currentText: js_lang.datep_3,
			monthNames: [js_lang.January,js_lang.February,js_lang.March,js_lang.April,js_lang.May,js_lang.June,
			js_lang.July,js_lang.August,js_lang.September,js_lang.October,js_lang.November,js_lang.December],
			monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
			js_lang.Jul, js_lang.Aug, js_lang.Sep, js_lang.Oct, js_lang.Nov, js_lang.Dec],
			dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			dayNamesMin: [js_lang.Su,js_lang.Mo,js_lang.Tu,js_lang.We,js_lang.Th,js_lang.Fr,js_lang.Sa],						
			isRTL: false,
			onSelect : function( element, object ) {
				var original_id=$(this).data("id");
				dump(original_id);
				var altFormat = $(this).datepicker('option', 'altFormat');
				var currentDate = $(this).datepicker('getDate');
				var formatedDate = $.datepicker.formatDate(altFormat, currentDate);
				dump(formatedDate);
				$("#"+original_id).val(formatedDate);
			}
		});	
		
		jQuery(".j_date2").datepicker({ 
			//dateFormat: 'yy-mm-dd' ,
			dateFormat: website_date_picker_format,        
			altFormat: "yy-mm-dd",       
			changeMonth: true,
			changeYear: true ,	   
			//minDate: 0,
			prevText: js_lang.datep_1,
			nextText: js_lang.datep_2,
			currentText: js_lang.datep_3,
			monthNames: [js_lang.January,js_lang.February,js_lang.March,js_lang.April,js_lang.May,js_lang.June,
			js_lang.July,js_lang.August,js_lang.September,js_lang.October,js_lang.November,js_lang.December],
			monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
			js_lang.Jul, js_lang.Aug, js_lang.Sep, js_lang.Oct, js_lang.Nov, js_lang.Dec],
			dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			dayNamesMin: [js_lang.Su,js_lang.Mo,js_lang.Tu,js_lang.We,js_lang.Th,js_lang.Fr,js_lang.Sa],						
			isRTL: false,
			onSelect : function( element, object ) {
				var original_id=$(this).data("id");
				dump(original_id);
				var altFormat = $(this).datepicker('option', 'altFormat');
				var currentDate = $(this).datepicker('getDate');
				var formatedDate = $.datepicker.formatDate(altFormat, currentDate);
				dump(formatedDate);
				$("#"+original_id).val(formatedDate);
			}
		});
	
		jQuery(".date_booking").datepicker({ 
			//dateFormat: 'yy-mm-dd' ,
			dateFormat: website_date_picker_format,        
			altFormat: "yy-mm-dd",       
			changeMonth: true,
			changeYear: true ,	   
			minDate: booking_mindate,
			prevText: js_lang.datep_1,
			nextText: js_lang.datep_2,
			currentText: js_lang.datep_3,
			monthNames: [js_lang.January,js_lang.February,js_lang.March,js_lang.April,js_lang.May,js_lang.June,
			js_lang.July,js_lang.August,js_lang.September,js_lang.October,js_lang.November,js_lang.December],
			monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
			js_lang.Jul, js_lang.Aug, js_lang.Sep, js_lang.Oct, js_lang.Nov, js_lang.Dec],
			dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			dayNamesMin: [js_lang.Su,js_lang.Mo,js_lang.Tu,js_lang.We,js_lang.Th,js_lang.Fr,js_lang.Sa],						
			isRTL: false,
			onSelect : function( element, object ) {
				var original_id=$(this).data("id");
				dump(original_id);
				var altFormat = $(this).datepicker('option', 'altFormat');
				var currentDate = $(this).datepicker('getDate');
				var formatedDate = $.datepicker.formatDate(altFormat, currentDate);
				dump(formatedDate);
				$("#"+original_id).val(formatedDate);
			}
		});	
	}
	/** update 2.4 */
	var booking_mindate = 1;
	if ($("#accept_booking_sameday").exists()) {
		if ($("#accept_booking_sameday").val() == 2) {
			booking_mindate = 0;
		}
	}
	/** update 2.4 */

	var show_period=false;
	if ( $("#website_time_picker_format").exists() ){		
		if ( $("#website_time_picker_format").val()=="12"){
			show_period=true;
		}
	}
	
	function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
	
	if ( $("#theme_time_pick").val() ==""){				
		/*jQuery('.timepick').timepicker({        
	        showPeriod: show_period,
			hourText: js_lang.Hour,       
			minuteText: js_lang.Minute,  
			amPmText: [js_lang.AM, js_lang.PM],
	    });	      
	    jQuery('#booking_time').timepicker({
	        showPeriod: show_period,
			hourText: js_lang.Hour,       
			minuteText: js_lang.Minute,  
			amPmText: [js_lang.AM, js_lang.PM],
        });	*/
        

        d = new Date();
        d = new Date(d.getTime() + $('#delivery_est').val() * 60000);
        var x = "";
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        
        
        var date = d;
        var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var am_pm = date.getHours() >= 12 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
        
        x = "T" + h + ":" + m + ":" + s;
        console.log("this is X" , x);
        $('.timepicks').timepicker({
            timeFormat: 'h:mm p',
            interval: 10,
            minTime: new Date(x),
            defaultTime: 'now',
            dynamic: true,
            dropdown: true,
            scrollbar: true
        });
        $('#booking_time').timepicker({
            timeFormat: 'h:mm p',
            interval: 10,
            defaultTime: 'now',
            dynamic: true,
            dropdown: true,
            scrollbar: true
        });
        $('#delivery_time').val(h + ":" + m + "");
	}
});	

$(window).scroll(function() {   
	
	if ( hl_get_scroll_position() ) {		
		$(".back-top").show();
	} else {		
		$(".back-top").fadeOut("slow");
	}
});


function generateArray(tt){
    var x = 10; //minutes interval
    var times = []; // time array
    var ap = ['AM', 'PM']; // AM-PM
    
    //loop to increment the time and push results in array
    for (var i=0;tt<24*60; i++) {
      var hh = Math.floor(tt/60); // getting hours of day in 0-24 format
      var mm = (tt%60); // getting minutes of the hour in 0-55 format
      times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) +" "+ ap[Math.floor(hh/12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x;
    }
    return times;
}

function hl_get_scroll_position()
{					
	var total_scrol_height=$(window).scrollTop() + $(window).height();				
	
	if( $(window).scrollTop() + $(window).height() == $(document).height()) {       		
	}			
	if ( total_scrol_height >= hl_end_content_pos){
		return true;
	}	
	return false;
}

function clear_elements(ele) {	
    $("#"+ele).find(':input').each(function() {						    	
        switch(this.type) {
            case 'password':
            case 'select-multiple':
            case 'select-one':
            case 'text':
            case 'textarea':
                $(this).val('');
                break;
            case 'checkbox':
            case 'radio':
                this.checked = false;            
            
        }
   });
   
   $(".preview").remove();
}

// $.validate({ 	
// 	language : jsLanguageValidator,
//     form : '#forms',    
//     onError : function() {      
//     },
//     onSuccess : function() {     
//       form_submit();
//       return false;
//     }  
// });

/*$.validate({ 	
	language : jsLanguageValidator,
    form : '#forms-search',    
    onError : function() {      
    },
    onSuccess : function() {           
      return true;
    }  
});*/

// $.validate({ 	
// 	language : jsLanguageValidator,
//     form : '#form-signup',    
//     onError : function() {      
//     },
//     onSuccess : function() {           
//       form_submit('form-signup');
//       return false;
//     }  
// });

// $.validate({ 	
// 	language : jsLanguageValidator,
//     form : '#frm-creditcard',    
//     onError : function() {      
//     },
//     onSuccess : function() {           
//       form_submit('frm-creditcard');
//       return false;
//     }  
// });

// $.validate({ 	
// 	language : jsLanguageValidator,
//     form : '#frm-resume-signup',    
//     onError : function() {      
//     },
//     onSuccess : function() {           
//       form_submit('frm-resume-signup');
//       return false;
//     }  
// });

// $.validate({ 	
// 	language : jsLanguageValidator,
//     form : '#frm-book',    
//     onError : function() {      
//     },
//     onSuccess : function() {           
//       form_submit('frm-book');
//       return false;
//     }  
// });

/*$.validate({ 	
    form : '#frm-fooditem',    
    onError : function() {      
    },
    onSuccess : function() {           
      alert('d2');
      form_submit('frm-fooditem');
      return false;
    }  
});*/

// $.validate({ 	
// 	language : jsLanguageValidator,
//     form : '#frm-delivery',    
//     onError : function() {      
//     },
//     onSuccess : function() {           
//       form_submit('frm-delivery');
//       return false;
//     }  
// });

function busy(e)
{
    if (e) {
        $('body').css('cursor', 'wait');	
    } else $('body').css('cursor', 'auto');        

    if (e) {    
        NProgress.set(0.0);		
        NProgress.inc();
    } else {    	
    	NProgress.done();
    }       
}

function scroll(id){
   if( $('#'+id).is(':visible') ) {	
      $('html,body').animate({scrollTop: $("#"+id).offset().top-100},'slow');
   }
}

function scroll_class(id){
   if( $('.'+id).is(':visible') ) {	
      $('html,body').animate({scrollTop: $("."+id).offset().top-100},'slow');
   }
}

function toogle(id , bool , caption)
{
    $('#'+id).attr("disabled", bool );
    $("#"+id).val(caption);
}

function rm_notices()
{
	$(".uk-alert").remove();		    
}

function form_submit(formid)
{		
	rm_notices();
	if ( formid ) {
		var form_id=formid;
	} else {
		var form_id=$("form").attr("id");    
	}    	
    
	var btn=$('#'+form_id+' input[type="submit"]');   	
    var btn_cap=btn.val();
    btn.attr("disabled", true );
    // btn.val(js_lang.processing);
	btn.val('Processing');
	//btn.hide();
	//btn.after('<button class="add_to_cart btn btn-sm upper-text"><div class="loader4"></div></button>')
    busy(true);    
    
    var params=$("#"+form_id).serialize();	
    
    var action=$('#'+form_id).find("#action").val(); 
    if ( action == "placeOrder" || action == "InitPlaceOrder" ){
    	params+="&cc_id="+$(".cc_id:checked").val();
    }    	
    
    if ( action == "merchantPayment" ){
    	params+="&cc_id="+$(".cc_id:checked").val();
    }    	

    if ( action=="addReviews"){
    	if ( $("#initial_review_rating").val()=="" ){
    		uk_msg(js_lang.trans_1);    		
    		busy(false);  
        	btn.attr("disabled", false );
        	btn.val(btn_cap);        	
    		return;
    	}    	
    }   
                   
    switch(action)
    {    	
    	case "clientLogin":
    	case "clientLoginModal":
    	case "merchantSignUp":    	
    	case "merchantSignUp2":
    	if ( $("#RecaptchaField1").exists() ){
    		var googleResponse = $("#RecaptchaField1").find(".g-recaptcha-response").val();    		
    		if (!googleResponse) {
    			busy(false); 
	    		uk_msg(js_lang.trans_52);                 
	            btn.attr("disabled", false );
		        btn.val(btn_cap);
		        busy(false);        	    	
		    	return;
    		}
    	}
    	break;
    	    	
    	case "clientRegistrationModal":
    	case "clientRegistration":
    	if ( $("#RecaptchaField2").exists() ){
    		var googleResponse = $("#RecaptchaField2").find(".g-recaptcha-response").val();    		
    		dump(googleResponse);
    		if (!googleResponse) {
    			busy(false); 
	    		uk_msg(js_lang.trans_52);                 
	            btn.attr("disabled", false );
		        btn.val(btn_cap);
		        busy(false);        	    	
		    	return;
    		}
    	}
    	break;
    	
    	case "placeOrder":
    	  $(".place_order").css({ 'pointer-events' : 'none' });
    	break;
    }
        
    dump(action);
    
	 $.ajax({    
        type: "POST",
        url: ajax_url,
        data: params,
        dataType: 'json',       
        success: function(data){ 
        	busy(false);  
        	btn.attr("disabled", false );
        	btn.val(btn_cap);        	
        	//scroll(form_id);
        	if (data.code==1){
        		        		
        		uk_msg_sucess(data.msg);
        		
        		if(action=="ItemBankDepositVerification"){
        			$(".box-grey").html( "<p class=\"bg-success\">"+data.msg+"</p>"  );
        			return;
        		}
        		        		
        		if ( action=="forgotPassword"){        			
        			//if ( $(".checkout-page").exists()){
        				$(".section-forgotpass").hide();
        				$("#username-email").val('');
        				return;
        			//}        		
        		}
        		
        		if ( action=="clientRegistration"){
        			if ( $("#verification").exists() ){
        				window.location.href=sites_url+"/verification/?checkout=true&id="+data.details;
        				return;
        			}  
        			if ( $("#theme_enabled_email_verification").exists() ){
        				window.location.href=sites_url+"/emailverification/?checkout=true&id="+data.details;
        				return;
        			}  
        		}
        		
        		if ( action=="addAddressBook"){
        			if (typeof data.details === "undefined" || data.details==null ) {         				
        			} else {
        			   window.location.replace(  data.details );
        			}        			
        		}
        		
        		if ( $("#redirect").length>=1 ){
        			if (typeof data.details === "undefined" || data.details==null ) {        			    		
        			    window.location.replace(  $("#redirect").val() );
        			} else {
        				window.location.replace(  $("#redirect").val()+"/?id="+data.details );
        			}
        		}
        		
        		if( action=="verifyMobileCode" || action=="verifyEmailCode"){        			
        			if ( $("#redirect").exists() ){
        				window.location.href=$("#redirect").val();
        				return;
        			}          			
        			window.location.href=home_url;
        			return;
        		}
        		        		
        		if ( action=="clientLogin"){
        			if ( $("#single_page").exists() ){
	        			window.location.href=sites_url+"/";
	        			return;
        			}
        		}
        		
        		if ( action=="subscribeNewsletter"){
        			$("#subscriber_email").val("");
        		}        	
        		
        		if ( action=="bookATable" || action=="bankDepositVerification" ){
        			clear_elements('frm-book');
        		}
        		if (action=="bankDepositVerification"){
        			clear_elements('forms');
        		}        	
        		
        		if ( action=="addToCart" ){
        			
        			if (  $(".back-mobile").exists() ){
        				dump('back-mobile');
        				var back_url=$(".back-mobile").attr("href");
        				dump(back_url);
        				window.location.href=back_url;
        				return;
        			}
        			
        			close_fb();
        			load_item_cart();
        		}        		        	
        		
        		if ( action=="addCreditCard"){
        			load_cc_list();
        		}
        		
        		if ( action=="addCreditCardMerchant"){
        			load_cc_list_merchant();
        		}
        		
        		if ( action == "placeOrder" ){
        			console.debug(data.details.payment_type);         			
					showPreloader(1);
					
					// SEND ORDER TO SAVYOUR
					var time_to_wait = 1000;
					// if (data.details.savyour_order_detail) {
					// 	time_to_wait = 3000;
					// 	savyour('orderPlace', data.details.savyour_order_detail);
					// 	console.log('sending_savyour_wait...')
					// }
					//-------------------------
                    setTimeout(() => {
                        console.log('redirecting...')
            			switch (data.details.payment_type)
            			{
            				case "pyp":
            				case "paypal":        		        				
            				window.location.href = sites_url+"/paypalinit/?id="+data.details.order_id ;
            				break;
            				
            				case "stp":
            				case "stripe":        				
            				window.location.href = sites_url+"/stripeinit/?id="+data.details.order_id;
            				break;
            				
            				case "mcd":
            				case "mercadopago":        				
            				window.location.href = sites_url+"/mercadoinit/?id="+data.details.order_id;
            				break;
            				
            				case "pyl":        				
            				window.location.href = sites_url+"/paylineinit/?id="+data.details.order_id;
            				break;
            				
            				case "ide":        				
            				window.location.href = sites_url+"/sisowinit/?id="+data.details.order_id;
            				break;
            				
            				case "payu":        				
            				window.location.href = sites_url+"/payuinit/?id="+data.details.order_id;
            				break;
            				
            				case "pys":        			
            				window.location.href = sites_url+"/payserainit/?id="+data.details.order_id;
            				break;
            				
            				case "bcy":        				
            				window.location.href = sites_url+"/bcyinit/?id="+data.details.order_id;
            				break;
            				
            				case "epy":        				
            				window.location.href = sites_url+"/epyinit/?id="+data.details.order_id;
            				break;
            				
            				case "atz":
            				window.location.replace(sites_url+"/atzinit/?id="+data.details.order_id);
            				break;
            				
            				case "btr":        				
            				window.location.href = sites_url+"/btrinit/?id="+data.details.order_id;
            				break;
            				
            				case "mol":        				
            				window.location.href = sites_url+"/mollieinit/?id="+data.details.order_id;
            				break;
            				
            				case "ip8":        				
            				window.location.href = sites_url+"/ip8init/?id="+data.details.order_id;
            				break;
            				        	        						
            				case "mri":        				
            				window.location.href = sites_url+"/monerisinit/?id="+data.details.order_id;
            				break;
            				
            				case "cod":
            				case "ocr":
            				case "obd":
            				case "pyr":        				
            				window.location.replace(sites_url+"/receipt/?id="+data.details.order_id);
            				break;
            				        			
            				default:
            				window.location.href = data.details.payment_link;
            				break;
    					}
                    }, time_to_wait);
					
        		}
        		
        		if ( action=="clientLoginModal"){        			
        			load_top_menu();
        			close_fb();
        		}
        		
        		if ( action=="clientRegistrationModal"){
        			        			
        			if ( $("#verification").exists() ){
        				window.location.href=sites_url+"/verification/?id="+data.details;
        				return;
        			}                			
        			if ($("#theme_enabled_email_verification").exists()){
        				window.location.href=home_url+"/emailverification/?id="+data.details;
        				return;
        			}		
        			
        			if ( $("#single_page").exists() ){
        				window.location.href=sites_url;
        			} else {        		
	        			load_top_menu();
	        			close_fb();
        		    }
        		}
        		        		        		
        		if ( action=="addReviews"){
        			//uk_msg_sucess(data.msg);
        			load_reviews();
        			//load_ratings();
        			//$(".write-review").addClass("active");
        			$(".review-input-wrap").slideToggle("fast");
        			$("#review_content").val('');
        			$('.raty-stars').raty({ 
        			   score:0,
					   readOnly: false, 		
					   path: sites_url+'/assets/vendor/raty/images',
					   click: function (score, evt) {
					   	   $("#initial_review_rating").val(score);
					   }
			        });    
        			return;
        		}
        		
        		if ( action=="updateReview"){        			
        			load_reviews();
        			close_fb();
        		}
        		
        		if ( action=="paypalCheckoutPayment"){
        			showPreloader(1);
        			window.location.replace(sites_url+"/receipt/?id="+data.details.order_id);
        		}
        		
        		/*merchant signup*/
        		
        		if (action=="merchantSignUp"){        			
        			showPreloader(1);
        			window.location.href = sites_url+"/merchantsignup/?Do=step3&token="+data.details;
        		}
        		
        		if ( action=="merchantSignUp2"){        			
        			showPreloader(1);
        			window.location.href = sites_url+"/merchantsignup/?Do=thankyou2&token="+data.details;
        		}
        		        		
        		if ( action=="merchantPayment"){        			
        			if ($("#renew").val()==1 && $("#payment_opt:checked").val() =="ocr" ){        				
        				window.location.href = sites_url+"/renewSuccesful";
        			} else {	        			
        			   switch ( $("#payment_opt:checked").val() )
        			   {
        			   	   case "pyp":
        			   	   case "stp":
        			   	   case "mcd":
        			   	   case "pyl":
        			   	   case "ide":
        			   	   case "payu":
        			   	   case "obd":
        			   	   case "pys":
        			   	   case "bcy":
        			   	   case "epy":
        			   	   case "atz":
        			   	   case "btr":
        			   	   case "mol":
        			   	   case "mri":
        			   	   case "rzr":
        			   	   case "vog":
        			   	   window.location.href=data.details;
        			   	   showPreloader(true);
        			   	   break;
        			   	   default:	        			   	   
        			   	   window.location.href=sites_url+"/merchantsignup?Do=step4&token="+data.details;
        			   	   break;
        			   }	        			  		
        			}	
        		}
        		
        		if ( action=="merchantPaymentPaypal"){
        		    if ($("#renew").val()==1){
        				window.location.replace(sites_url+"/renewSuccesful");
        		    } else {		
	        			if ( $("#merchant_email_verification").val()=="yes" ){
	        				window.location.replace(sites_url+"/merchantsignup/?Do=thankyou2&token="+data.details);
	        			} else {
	        				window.location.replace(sites_url+"/merchantsignup/?Do=step4&token="+data.details);
	        			}
        		    }
        		}
        		
        		if (action=="activationMerchant"){
        			window.location.replace(sites_url+"/merchantsignup/?Do=thankyou1&token="+data.details);
        		}
        		
        		if ( action=="changePassword"){
        			$(".change-pass-btn").attr("disabled",true);
        			$(".change-pass-btn").css({"opacity":"0.5"});
        		}        		
        		        	
        		if ( action=="merchantResumeSignup"){
        			window.location.replace(data.details);
        			return;
        		}
        		
        		if (action=="setAddress"){
        			//console.debug("setAddress");
        			window.location.reload();
        			return;
        		}
        		
        		if ( action=="InitPlaceOrder"){
        			showPreloader(1);
        			window.location.href=data.details;
        		}
        			
        	} else if ( data.code==3 ) {
        		 if ( action=="clientLogin"){
        		 	window.location.href=sites_url+"/verification/?id="+data.details;
        		 } else {
        		 	uk_msg(data.msg);
        		 }
        	} else if ( data.code==4 ) {
        		 if ( action=="clientLogin"){
        		 	window.location.href=sites_url+"/emailverification/?id="+data.details;
        		 } else {
        		 	uk_msg(data.msg);
        		 }
        	} else {
        		//$("#"+form_id).before("<p class=\"uk-alert uk-alert-danger\">"+data.msg+"</p>");
        		/*$("#"+form_id).before("<p class=\"uk-alert uk-alert-danger\">"+data.msg+"</p>");
        		setTimeout(function () {
                   $(".uk-alert-danger").fadeOut();
                }, 4000);        	*/
        		
        		if ( action=="placeOrder"){
        		   $(".place_order").css({ 'pointer-events' : 'auto' });
				}
				
        		uk_msg(data.msg);
        	}        	
        	        	
        },  // failed
        error: function(){	        	
        	btn.attr("disabled", false );
        	btn.val(btn_cap);
        	busy(false);        	
        	//$("#"+form_id).before("<p class=\"uk-alert uk-alert-danger\">ERROR:</p>");
        	/*$("#"+form_id).before("<p class=\"uk-alert uk-alert-danger\">ERROR</p>");
    		setTimeout(function () {
               $(".uk-alert-danger").fadeOut();
            }, 4000);        	
        	scroll_class('uk-alert');*/
        	$(".place_order").css({ 'pointer-events' : 'auto' });
        	uk_msg("ERROR");
        }		
    });

}

var otable;

jQuery(document).ready(function() {	
	 if( $('#table_list').is(':visible') ) {    	
    	table();    	
    } 
        
    if( $('.chosen').is(':visible') ) {     
     //$(".chosen").chosen(); 
       $(".chosen").chosen({
       	  allow_single_deselect:true,
       	  no_results_text: js_lang.trans_33,
          placeholder_text_single: js_lang.trans_32, 
          placeholder_text_multiple: js_lang.trans_32
       });     
    } 
    
    if ( $(".icheck").exists() ) {
	     $('.icheck').iCheck({
	       checkboxClass: 'icheckbox_minimal',
	       radioClass: 'iradio_flat'
	     });
    }
    
    if( $('#bar-rating').is(':visible') ) {	
    	
	    $('#bar-rating').barrating('show', {
	    	initialRating: $("#initial_rating").val(),
	        showValues:false,
	        showSelectedRating:true,        
	        onSelect:function(value, text) {	            
	        	if( $('#review_content').is(':visible') ) {		        	
	        		$("#initial_review_rating").val(value)
	        	} else {	        		
	        		$("#initial_review_rating").val(value)
	        		//add_rating(value, $("#merchant_id").val() );
	        	}		        	           
	        }
	    });
	            
	    var x=1;
        $( ".br-widget a" ).each(function( index ) {
        	$(this).addClass("level-"+x++);
        });
    }
           
    $( document ).on( "click", ".menu-category", function() {
    	var i=$(this).find("i");
    	if (i.hasClass("fa-chevron-up")){
    		i.removeClass("fa-chevron-up");
    		i.addClass("fa-chevron-down");
    	} else {
    		i.addClass("fa-chevron-up");
    		i.removeClass("fa-chevron-down");
    	}
        var parent=$(this).parent();
    	var ul=parent.find("ul");    	
    	ul.slideToggle("fast");
    });
	
	$( document ).on('click', '#left-controller',  function(){
		$('.related-item-wrapper').animate( { scrollLeft: '-=200' }, 200 );
	});

	$( document ).on('click', '#right-controller', function(){
		$('.related-item-wrapper').animate( { scrollLeft: '+=200' }, 200);
	});

	$( document ).on('click', '#left-controller1',  function(){
		$('#navbar-example ul').animate( { scrollLeft: '-=200' }, 200 );
	});

	$( document ).on('click', '#right-controller1', function(){
		$('#navbar-example ul').animate( { scrollLeft: '+=200' }, 200);
	});

	$( document ).on('mouseenter', '.navbar-item-categories', function(){
		if(window.outerWidth >= '768'){
			if ( $("#navbar-example ul").prop('scrollWidth') > $("#navbar-example ul").width() ) {
				$("#left-controller1, #right-controller1").show(100);
			}
		}
	});

	$( document ).on('mouseleave', '.navbar-item-categories', function(){
		if(window.outerWidth >= '768'){
			if ( $("#navbar-example ul").prop('scrollWidth') > $("#navbar-example ul").width() ) {
				$("#left-controller1, #right-controller1").hide(100)
			}
		}
	});

	$( document ).on('click', '#search-item-icon', function(){
		$(this).toggleClass('open-search').focus();
		$('#search_item').focus();
	})
	
    $( document ).on( "click", ".menu-item", function() {
		
		$('.modal-body').scrollTop(0);

		if ($('.logo-smallx').hasClass('product_image')) {
			$(".product_image").attr("src","");
		} else {
		    $('.logo-smallx').addClass('product_image');
		    $(".product_image").attr("src","");
		}
		
		if ($('form').hasClass('update-item-modal')) {
            // $('.add_to_cart').val('Update Cart');
        } else {
            $('.add_to_cart').val('Add to Cart');
        }
		$('.addon_price').val('');
		$('.pro_id').val('')
		$('.img_pro').val('');
		$('.item_title').html("");
		$('.item_description').html("");
		$('.itemPriceWithoffier').html("");
		// $(".product_image").attr("src","");
		$('.radio_prices').html("");
		$('.sub-item-rows').html("");
		$('.qty').val(1);

    	// event.preventDefault();
    	/*if ( !$(".order-list-wrap").exists()){
    		return;
		} */
    	/** check if the item is available*/
    	
		// Item not available direct message instead of show item not available text
		// if ( $(this).hasClass("item_not_available")){
    	// 	uk_msg(js_lang.trans_51);
    	// 	return;
    	// }    
    	    	
    	if ( $("#merchant_close_store").exists() ){	
    		if  (  $("#merchant_close_store").val()=="yes"){
    			var close_msg=$("#merchant_close_msg").val();
		        uk_msg(close_msg);
		        return;
    		}
    	}	
    	
    	/** auto add item if food is single */
    	var id=$(this).attr("rel");
    	
    	
    	var single=$(this).data("single");    	
    	if ( single==2 ){
			showPreloader(false);
    		if ( $("#website_disbaled_auto_cart").val()!="yes"){		    			
    			if ( $("#disabled_website_ordering").val()=="yes"){    				 		
    				return;
    			}    	
				single_food_item_add(id, $(this).data("price"), $(this).data("size") , $(this).data("category_id"), '', $(this).data("available") );
	    		return;
    		}
    	}
    	//Disable single item add on click
    	
    	//showPreloader(false);

    	    
    	/*mobile issue*/
    	if ( $(this).hasClass("mbile")){
    	    var mbile_url=sites_url+"/item/?item_id="+id+"&mtid="+ $("#merchant_id").val();
    	    mbile_url+= "&slug="+$("#restaurant_slug").val();
    	    window.location.href=mbile_url;
    		return;
		}
		
    	var item_name 	= $(this).data("item-name");    	
    	var item_price 	= $(this).data("item-price");    	
    	var item_desc 	= $(this).data("item-desc");    	
    	var item_img 	= $(this).data("item-image");    	
		var item_id 	= $(this).data("product_id");    	
		var related_item 	= $(this).data("related-item");    	

		$('.addon_price').val(item_price);
		$('.pro_id').val(decodeURIComponent(item_id).replaceAll('+',' '));
		$('.item_title').html(decodeURIComponent(item_name).replaceAll('+',' '));
		$('.item_description').html(decodeURIComponent(item_desc).replaceAll('+',' '));
		$('.itemPriceWithoffier').html(decodeURIComponent(item_price).replaceAll('+',' '));
		$('.img_pro').val(decodeURIComponent(item_img).replaceAll('+',' '));
		$('#related_item').val((related_item) ? related_item : 0);

		var arr = item_img.split('/');
		var file = arr[arr.length - 1];
		var Name = file.split('.')[0]; 

		if(Name == '' || Name == 'placholde-general2' || Name == 'mobile-default-logo'){
			$(".product_image").hide();
		}else{
			$(".product_image").show();
			$(".product_image").attr("src",item_img);
		}

		fooditemdata(id);
		







    	//open_modal_box(params);
    });

	
	
	$('#food-item-modal').on('hidden.bs.modal', function () {
		// $('.add_to_cart').prop( "disabled", true );

	  })
	  
    $( document ).on( "click", ".edit_item", function() {
    	
    	if ( $(".pts_amount").is(':visible') ){
    		uk_msg_sucess(js_lang.you_cannot_edit_order);
    		return;
    	}    
    	var id=$(this).attr("rel");
    	var row=$(this).data("row");
    	var params="action=viewFoodItem&currentController=store&item_id="+id+"&tbl=viewFoodItem&row="+row;
    	open_modal_box(params);
    	fooditemdata(id);
    });
    // $(window).on('resize load', function () {

   /* $(".view-item-wrap").niceScroll( {
    	cursorcolor:"#E57871",
    	cursorwidth:"7px",
    	autohidemode:"leave"  
    });
    
   $(".view-item-wrap").mouseover(function() {
      $(".view-item-wrap").getNiceScroll().resize();
   });*/

   function multipleAddonQtyLimit(){
		window.addOnMsg = "";
		var multiValuesQty = $('#multiple_option_value').val();
		var multValueAddonLimit = JSON.parse(multiValuesQty);
		window.requireAddon2 	= 0;

		$('.require_addon').each(function(i,v){
			window.addonStatus 		= true;
			window.addonRequired	= 0;
			window.requireAddon2 	= 0;

			console.log("CHECKING ADDON QUANTITY");

			window.id  			= $(this).data('id');
			window.AddonName  	= $(this).data('name');
			
			console.log(id);
			console.log(window.AddonName);

			if ($('.counter-'+id).exists()) {
				console.log('.counter-'+id);
				$('.counter-'+id).each(function(_i,_v){
					window.requireAddon2 += parseInt($(this).val());
				});
			}
				
			console.log("limit ====> " + multValueAddonLimit[id]);
			console.log("current qty ====> " + window.requireAddon2);
			if (multValueAddonLimit[id]) {
				if (window.requireAddon2 != multValueAddonLimit[id]) {
					console.log("i am inside");
					window.addonLimit 		= parseInt(multValueAddonLimit[id]);
					window.addonStatus 		= false;
				}
				
				if (window.addonStatus == false) {
					console.log("i found false"); 
					return false;
				}
		  	}
			window.requireAddon2 = 0;
			
		});
		return [
			window.addonStatus,
			window.addonLimit,
			window.AddonName,
			window.requireAddon2,
			window.id
		];
   }
   
   //$('.numeric_only').keyup(function () {     
   $( document ).on( "keyup", ".numeric_only", function() {
      this.value = this.value.replace(/[^0-9\.]/g,'');
   });	 
      
   $( document ).on( "click", ".special-instruction", function() {
   	  $(".notes-wrap").slideToggle("fast");
   });
      
   $( document ).on( "click", ".qty-plus", function() {
   	  qty=parseFloat( $("#qty").val())+1;
    	////console.debug(qty);
    	if (isNaN(qty)){
    	    qty=1;
    	}
    	$("#qty").val( qty );
   });
   
   $( document ).on( "click", ".qty-minus", function() {
   	    var qty=$("#qty").val()-1;
    	if (qty<=0){
    		qty=1;
    	}
    	$("#qty").val(  qty );
   });
   
   $( document ).on( "click", ".qty-addon-plus", function() {

	
   	   var parent=$(this).parent().parent();   	   
   	   var child=parent.find(".addon_qty");   	   
   	   var qty=parseFloat(child.val())+1;   	   
   	   if (isNaN(qty)){
    	    qty=1;
       }
       child.val( qty );
	   let id = $(this).data('id');
	   var resp = multipleAddonQtyLimit();
	   console.log(resp);
	   if ($('.sub_item_name_'+id).is(':checked')) {
		if(resp[3] > resp[1]){
			console.log("1 condition worked")
		}
		if(id == resp[4]){
			console.log("2 condition worked")
		}
		if(resp[0] == false){
			console.log("3 condition worked")
		}
		
		if(resp[3] > resp[1] && id == resp[4] && resp[0] == false){
			console.log('inside qty');

			uk_msg('Sorry but you can select only '+resp[1]+' quantity of '+resp[2]+'');
			return;
		}
	   }
	//    console.log(resp[3], "=======+++++++");
	   
   });
   
   $( document ).on( "click", ".qty-addon-minus", function() {
   	   var parent=$(this).parent().parent();   	   
   	   var child=parent.find(".addon_qty");   	      
   	   var qty=parseFloat(child.val())-1;
       if (qty<=0){
    		qty=1;
       }
       child.val( qty );
   });
      
   $( document ).on( "click", ".sub_item_name", function() {   	   
   	   var addon_type=$(this).attr("rel");
   	   
		if ( addon_type=="multiple"){
			
			var id = $(this).data('id');
			var parent=$(this).parent().parent();	   	    
			var child=parent.find(".quantity-wrap-small");
			var multiValuesQty = $('#multiple_option_value').val();
			var multValueAddonLimit = JSON.parse(multiValuesQty);

			window.reqQTY = 0;
			$('.counter-'+id).each(function(_i,_v){
				window.reqQTY += parseInt($(this).val());
			});
			
			if(window.reqQTY == multValueAddonLimit[id]){
				$(this).attr("checked",false);
				uk_msg('Sorry but you can select only '+multValueAddonLimit[id]+' quantity');
			}

			if ($(this).is(":checked")){
				child.show();
				var parent_counter = $(this).parent().parent().next().find('input');   
				$(parent_counter).addClass('counter-'+id);

			} else {
				var parent_counter = $(this).parent().parent().next().find('input');   
				$(parent_counter).removeClass('counter-'+id);
				child.hide();
			}
		}
   	      	   
   	   if ( addon_type=="custom"){  	   	 
   	   	  var data_id=$(this).data("id");
   	   	  var data_option=$(this).data("option");   	   	  
   	   	  var total_multi_selected=$(".sub_item_name_"+data_id+":checked").length;   	   	  
   	   	  if ( data_option == ""){
   	   	  	  return;
   	   	  }   	   
   	   	  if ( total_multi_selected > data_option  ){   	   	  	  
	       	  uk_msg(js_lang.trans_2+" "+" "+ data_option +" "+js_lang.trans_3);  	  
   	   	  	  $(this).attr("checked",false);
   	   	  }   	   
   	   }   
   });
   
   
   $( document ).on( "click", ".add_to_cart", function() {   	   
   	
   	   /*var cooking_ref=$("#cooking_ref:checked").length;
   	   if ( cooking_ref<=0){
   	   	  uk_msg("Cooking ref is required");
   	   	  return;
   	   }   
   	   var ingredients=$("#ingredients:checked").length;
   	   if ( ingredients<=0){
   	   	  uk_msg("Ingredients is required");
   	   	  return;
   	   }*/
   	
   	   //var price=$("#price:checked").length;
   	   var price=$(".item_price:checked").length;   	   
   	   console.debug(price);
   	   if (price<=0){
   	   	   if ( !$("#two_flavors").exists()) {
   	   	      uk_msg(js_lang.trans_29);
   	   	      $("#price_wrap").focus();
   	   	      return;
   	   	   }
   	   }  
   	   
   	   /** two flavors */
   	   if ( $("#two_flavors").exists()) {   	   	  
   	   	  var sub_item=$(".sub_item:checked").length;   	   	  
   	   	  dump(sub_item);
   	   	  if ( sub_item<2){
   	   	  	  uk_msg(js_lang.trans_46);   	   	      
   	   	      return;
   	   	  }   	   
   	   }
   	   
   	   /** check if addon is required */
   	   if ( $(".require_addon").exists()){
   	   	   
   	   	   $(".req_addon_msg").remove();
   	   	   
   	   	   var addon_err='';
   	   	   $('.require_addon').each(function () {
   	   	   	   if ( $(this).val()==2 ) {
	   	   	   	   var required_addon_id=$(this).data("id");
	   	   	   	   var required_addon_name=$(this).data("name");
	   	   	   	   dump(required_addon_id);
	   	   	   	   
	   	   	   	   /*remove sub item with no values*/
	   	   	   	   
	   	   	   	   addon_type=$(".sub_item_name_"+required_addon_id).data("type");
	   	   	   	   dump("addon_type=>"+addon_type);
	   	   	   	   dump(".sub_item_name_"+required_addon_id);
	   	   	   	   
	   	   	   	   if ( addon_type=="select"){
	   	   	   	   	   var required_addon_selected=$(".sub_item_name_"+required_addon_id+" :selected").val(); 
	   	   	   	   	   dump("=>"+required_addon_selected);
	   	   	   	   	   if ( empty(required_addon_selected) || required_addon_selected=="0"){
	   	   	   	   	   	   addon_err=js_lang.trans_47+" - "+required_addon_name +"<br/>";
		   	   	   	   	   $(".require_addon_"+required_addon_id+"+.section-label > .section-label-a").after(
		   	   	   	   	   "<p class=\"req_addon_msg text-danger text-small top10\">"+addon_err+"</p>").fadeIn("slow");
		   	   	   	   	   $('.inner_modal_form').animate({
								scrollTop: $("#addon_wrapper_"+required_addon_id).offset().top + 50
                            }, 1000);
	   	   	   	   	   }	   	   	   	   
	   	   	   	   } else {   	   	   	   	   	   	   	   
		   	   	   	   var required_addon_selected=$(".sub_item_name_"+required_addon_id+":checked").length; 
		   	   	   	   dump(required_addon_selected);
		   	   	   	   if ( required_addon_selected <=0){
		   	   	   	   	   addon_err=js_lang.trans_47+" - "+required_addon_name +"<br/>";
		   	   	   	   	   $(".require_addon_"+required_addon_id+"+.section-label > .section-label-a").after(
		   	   	   	   	   "<p class=\"req_addon_msg text-danger text-small top10\">"+addon_err+"</p>").fadeIn("slow");
		   	   	   	   	//    $('.inner_modal_form').animate({
                        //         scrollTop: $("#addon_wrapper_"+required_addon_id).offset().top + 50
                        //     }, 1000);
                            
							let container = $('.inner_modal_form'),
							scrollTo = $("#addon_wrapper_"+required_addon_id);

							container.scrollTop(
								scrollTo.offset().top - container.offset().top + container.scrollTop()
							);
							return false;
		   	   	   	   }   
								 
	   	   	   	   }	   	   
   	   	   	   }
   	   	   });
   	   	   var resp = multipleAddonQtyLimit();
				 console.log(resp);
				 //console.log(resp[2], ">>>>>>>>>>>>>>>>===========");
			if(resp[0] == false){
				uk_msg('Sorry but you can select only '+resp[1]+' quantity of '+resp[2]+'');
			return;
			}
   	   	   if ( addon_err!=""){
   	   	   	   //uk_msg(addon_err);
   	   	   	   return;
   	   	   }   	   
   	   }   	   
   	   
		  form_submit('frm-fooditem');

		  if(typeof(FB_PIX) !== 'undefined'){
   	       console.log("Executing Add to cart FB Pixel");
   	       console.log("Item name" , $('.modal-title.text-left').html());
           fbq('track', 'AddToCart', {
                content_name: $('.modal-title.text-left').html(), 
                content_category: $('#category_name').val(),
                content_ids: [$('#item_id').val()],
                content_type: 'product',
                value: parseInt($("#frm-fooditem #price").val()),
                currency: 'PKR' 
           });
		}
		  
		if(typeof(gtag) == 'function') {
			var gtag_items = [];
			if(window.isUA) {
				gtag_items.push({
					id: $('#item_id').val(),
					name: $('.modal-title.text-left').html(),
					category: $('#category_name').val(),
					variant: 'N/A',
					quantity: $('[name=qty]').val(),
					price: parseInt($("#frm-fooditem #price").val())
				});
			} else {
				gtag_items.push({
					item_id: $('#item_id').val(),
					item_name: $('.modal-title.text-left').html(),
					item_category: $('#category_name').val(),
					item_variant: 'N/A',
					quantity: $('[name=qty]').val(),
					price: parseInt($("#frm-fooditem #price").val())
				});
			}

		    gtag('event', 'add_to_cart', {
              currency: 'PKR',
              items : gtag_items
            });
			
			console.log('ENHANCED_ECOMMERCE', 'ADD_TO_CART');
		}
		$('.addon_price').val('');
		$('.pro_id').val('')
		$('.img_pro').val('')
		$('.item_title').html("");
		$('.item_description').html("");
		$('.itemPriceWithoffier').html("");
		$(".product_image").attr("src","");
		$('.radio_prices').html("");
		$('.sub-item-rows').html("");
		$('.qty').val(1);
		
   });
   
   if( $('.item-order-wrap').is(':visible') ) {	
      load_item_cart();
   }
      
   $( document ).on( "click", ".delete_item", function() {    	
   	
        if ( $(".pts_amount").is(':visible') ){
    		uk_msg_sucess(js_lang.you_cannot_edit_order);
    		return;
    	}    
    	
   	   var ans=confirm(js_lang.trans_4); 
   	   if (ans){      
   	       var row=$(this).data("row");   	   
   	       delete_item(row);
   	   }
   });
      
   $( document ).on( "click", ".edit_item", function() { 
   	   var row=$(this).data("row");
   	   ////console.debug(row);
   });
      
   /************** CHECK OUT ***************/
   
   $( document ).on( "click", ".checkout", function() {

	//Delivery ASAP Code Start
	var caurrentDateTime = new Date();
	caurrentDateTime = moment(caurrentDateTime);
	var delivery_estimation = parseInt($('#delivery_est').val())+5;
	var newDateObj = moment(caurrentDateTime).add(delivery_estimation, 'm').toDate();
	var selectedMoment = moment($("#delivery_date").val()+' '+$("#delivery_time").val()).format('YYYY-MM-DD hh:mm A');
	var currentMoment = moment(newDateObj).format('YYYY-MM-DD hh:mm A');

	console.log(currentMoment,">>currentMoment with delivery estimation");
	console.log(selectedMoment, ">>selectedMoment");

	var isAfter = moment(currentMoment).isAfter(selectedMoment);

	if ($('#is_pre_order').val() == 1) {
		$('#delivery_asap:checked').val(3);
	}else{
		if(isAfter === true){
			$('#delivery_asap:checked').val(1);
			console.log('"Current moment" is greater then to "selected moment"');
		}else{
			$('#delivery_asap:checked').val(2);
			console.log('"Current moment" is less then to "selected moment"');
		}
	}
	//Delivery ASAP Code End
    
	if($('#is_branching_system').val() == 1){
		branching_system = 1;
	}
	var subtotal = parseFloat($("#subtotal_food").val());
	var min_order = 0;
	   if ($('[name=delivery_zone]').exists()) {
		   var kr_rate = localStorage.getItem('kr_location_area_' + $('[name=merchant_id]').val());
		   try {
			   kr_rate = JSON.parse(kr_rate);
			   min_order = parseInt(kr_rate.minimum);
		   } catch (error) {
			   min_order = 0;
		   }
	   } else {
		   if ($("#minimum_order").length >= 1) {
			   min_order = parseFloat($("#minimum_order").val());
		   }
	   }
	   
	   if(isNaN(min_order)) {
		   min_order = 0;
	   }
   	 /*check if delivery/pickup date is empty*/
	let transType = $("#delivery_type").val();   	 
	if (!transType) {
		uk_msg("Please select trensaction type");
	}
	console.log(transType);

	if ( transType=="delivery") {
	   	  	  var minimum= min_order;
			  var inclusiveTax = parseFloat($('#remaining-rupee').data('inclusive-tax'));
			  minimum = (inclusiveTax > 0) ? minimum - inclusiveTax : minimum;	   	  	  
	   	  	  if (isNaN(subtotal)){
	   	  	  	  subtotal=0;
	   	  	  }   	     	  	  
	   	  	  if (isNaN(minimum)){
	   	  	  	  minimum=0;
	   	  	  }   	     	  
	   	  	  
	   	  	  if(minimum>subtotal){
				 minimum = minimum + inclusiveTax;
	             get_pretty_price(minimum, type="minimum_subtotal", js_lang.trans_5);
	             return;
	   	  	  }      	  	  
	   	  	  
	          if ( $("#merchant_maximum_order").exists() ){
	    	      console.debug("max");
	    	      var merchant_maximum_order= parseFloat($("#merchant_maximum_order").val());    	      
	    	      if ( subtotal>merchant_maximum_order){
	    	      	  uk_msg(js_lang.trans_31+" "+ $("#merchant_maximum_order_pretty").val());
	   	  	  	      return;
	    	      }              	      
	          }
			 
			 if($('#delivery_zones').exists()) {
				 if($('#delivery_zones select').val() == 0) {
					 $('#delivery_zones').addClass('error');
					 uk_msg("Please select your area");
					 return;
				 }
			 }
			 if ($('#deliveryBranch').exists()) {
				 if (!$("#deliveryBranch").val()) {
					$('.deliverybranchDrop').addClass('error');
					uk_msg("Please select your branch");
					return;
				 }
			 }
   	 }
		
   	 if ( transType=="pickup"){   	     

		if(branching_system){

			var pick_up_branch = $('.branchDropdow select').val(); //$('#branches').val();
				if(!pick_up_branch){
					uk_msg('Please select branch for pick up');
					return;
				}
		}
		
		 if ( $("#merchant_minimum_order_pickup").exists()){
			var minimum= parseFloat($("#merchant_minimum_order_pickup").val());
		
	   	  	  if (isNaN(subtotal)){
	   	  	  	  subtotal=0;
	   	  	  }   	     	  	  
	   	  	  if (isNaN(minimum)){
	   	  	  	  minimum=0;
	   	  	  }   	     	  	  
	   	  	  if ( minimum>subtotal){   	  	  	
	              uk_msg(js_lang.trans_5+" "+ $("#merchant_minimum_order_pickup_pretty").val());
	   	  	  	  return;
	   	  	  }      	  	  
   	     }   	 
   	     
   	     if ( $("#merchant_maximum_order_pickup").exists() ){
   	     	  var merchant_maximum_order= parseFloat($("#merchant_maximum_order_pickup").val());    	      
    	      if ( subtotal>merchant_maximum_order){
    	      	  uk_msg(js_lang.trans_31+" "+ $("#merchant_maximum_order_pickup_pretty").val());
   	  	  	      return;
    	      }              	      
   	     }   	 
   	 }   
   	 
	if ( transType=="dinein"){
		if(branching_system){
			var pick_up_branch = $('.dineInBranchDropdow select').val();
			if(!pick_up_branch){
				uk_msg('Please select branch for dinein');
				return;
			}
		}
	}		

   	  //if ( $("#delivery_type").val()=="delivery" ){   	  	  
   	  switch (transType)
   	  {
   	  	   case "delivery":
   	  	   
   	  	   if ( $("#is_ok_delivered").val()==2){	   	  	 
	   	  	 uk_msg(js_lang.trans_15+" "+$("#merchant_delivery_miles").val() + " "+$("#unit_distance").val());   	  
	   	  	 return;
	   	   }   
	   	   if ( $("#delivery_date").val()==""){
   	  	 	  uk_msg(js_lang.trans_43);  	  	 
   	  	 	  $("#delivery_date").focus();
   	  	 	  return;
   	  	   }   	  
	   	  	 
	   	  	 if ( $("#merchant_required_delivery_time").exists()){
	   	  	 	if ( $("#merchant_required_delivery_time").val()=="yes"){   	  	 		   	  	 	
	   	  	 		if ( $("#delivery_time").val()==""){
	   	  	 			var delivery_asap=$("#delivery_asap:checked").val();
	   	  	 			dump(delivery_asap);
	   	  	 			if ( delivery_asap!=1){
				   	  	 	uk_msg(js_lang.trans_44);  	  	 
				   	  	 	$("#delivery_time").focus();
				   	  	 	return;
	   	  	 			}
			   	  	 }   	  
	   	  	 	}   	  	 
	   	  	 }   	     	  	   
   	  	   break;
   	  	   
   	  	   case "dinein":
   	  	    
   	  	    var dinein_suborder= parseFloat($("#subtotal_order").val());	   	  	    
   	  	    dinein_minimum = parseFloat(dinein_minimum);   	  	    
   	  	    dinein_max = parseFloat(dinein_max);

   	  	    if(dinein_minimum>0){
   	  	    	if ( dinein_minimum>dinein_suborder ){
   	  	    		uk_msg(js_lang.trans_5 + " "+ $("#minimum_order_dinein").val() );  	  	   	  	    	
   	  	    	   return; 	
   	  	    	}   	  	    
   	  	    }   	  
   	  	    if(dinein_max>0){   	    	  	    	
   	  	    	if ( dinein_max<dinein_suborder ){
   	  	    		uk_msg(js_lang.trans_31 + " "+ $("#maximum_order_dinein").val() );  	  	   	  	    	
   	  	    	   return; 	
   	  	    	}   	  	    
   	  	    }   	  
   	  	    
   	  	    if ( $("#delivery_date").val()==""){
   	  	 	   uk_msg(js_lang.trans_42);  	  	 
   	  	 	   $("#delivery_date").focus();
   	  	 	   return;
	   	  	}   	  
	   	  	if ( $("#delivery_time").val()==""){
	   	  	 	uk_msg(js_lang.dinein_time_is_required);  	  	 
	   	  	 	$("#delivery_time").focus();
	   	  	 	return;
	   	    }   	
   	  	   break;
   	  	   
   	  	   case "pickup":
   	  	    if ( $("#delivery_date").val()==""){
   	  	 	   uk_msg(js_lang.trans_42);  	  	 
   	  	 	   $("#delivery_date").focus();
   	  	 	   return;
	   	  	}   	  
	   	  	if ( $("#delivery_time").val()==""){
	   	  	 	uk_msg(js_lang.trans_41);  	  	 
	   	  	 	$("#delivery_time").focus();
	   	  	 	return;
	   	    }   	
   	  	   break;
   	  }   
	   	  
		//  to enable branch on all type of orders
		// var pick_up_branch = $('#branches').val();
			
			var branch_id = $('#branch_id').val();

		 	var delivery_type_checkout = $("#delivery_type").val(); 
			var params="delivery_type="+$("#delivery_type").val()+"&delivery_date="+$("#delivery_date").val();
			params+="&delivery_time="+$("#delivery_time").val();
			params+="&delivery_asap="+$("#delivery_asap:checked").val();
			params+="&merchant_id="+$("#merchant_id").val();
			params+="&is_curbside_pickup="+$("#is_curbside_pickup").val();
			params+="&area_id="+$('[name=delivery_zone]').val();
			params+="&enable_branch_delivery="+($('#deliveryBranch').exists()?'yes':'');
			if(pick_up_branch)
				params+='&pick_up_branch='+pick_up_branch; 		 	
			
			if(branch_id)
				params+='&branch_id='+branch_id;
			
   	    busy(true);
	    $.ajax({    
	    type: "POST",
	    url: ajax_url,
	    data: "action=setDeliveryOptions&currentController=store&tbl=setDeliveryOptions&"+params,
	    dataType: 'json',       
	    success: function(data){
			busy(false);  
			if (data.code == 4) {
				window.location.reload();
				return;
			}
	    	if (data.code==1) {	  
				if(!!data.details.fb_pix){

						if(typeof(fbq) !== 'undefined'){
							fbq('track', 'InitiateCheckout', data.details.fb_pix );
						}else{

							console.log("Fb Pixel is not working"); 

						}
				}
				if(!!data.details.gtag){
					if(typeof(gtag) == 'function') {
						var _items = data.details.gtag.gtag_products;
						if(window.isUA) {
							_items = data.details.gtag.gtag_products_ua;
						}
						
						gtag('event', 'begin_checkout', {
							currency: 'PKR',
							items: _items
						});
						
						console.log('ENHANCED_ECOMMERCE', 'CHECKOUT_SENT')
					}
					//console.log( data.details.gtag.gtag_products_ua);
				}
				
				if(data.enable_user_login == 'yes'){
				    window.location.href=sites_url+"/checkout/";
				}else{
				    window.location.href=sites_url+"/guestcheckout/";
				}
	    	} else {
	    		uk_msg(data.msg);
	    	}	    
	    }, 
	    error: function(){	        	    	
	    	busy(false); 
	    }		
	    });   	     	  
   });
   
//    $('#delivery_asap').on('ifChecked', function(event){
//       $("#delivery_time").val('');
//    });
   
   $('.payment_opt').on('ifChecked', function(event){   	   
       $(".credit_card_wrap").slideToggle("fast");
   });
   
   $('.payment_opt').on('ifUnchecked', function(event){
       $(".credit_card_wrap").slideToggle("fast");
   });
   
   
   $( document ).on( "click", ".cc-add", function() {    	  
   	   $(".cc-add-wrap").slideToggle("fast");
   });
   
   if( $('.payment-option-page').is(':visible') ) {	
       load_cc_list();
   }
   
   if( $('.merchant-payment-option').is(':visible') ) {	
       load_cc_list_merchant();
   }
   
   /************ PLACE ORDER ***************/
   $( document ).on( "click", ".place_order", function() {  
	   var min_order = 0;
	   var subtotal = parseFloat($("#subtotal_food").val());
	   var country_code = $("#admin_country_set").val();
   	    
   	   let phoneno = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/; //PK
   	   if(country_code == 'US'){
   	    phoneno = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
   	   }else if(country_code == 'AE'){
		 phoneno = '';
	   }

	   if ($('[name=delivery_zone]').exists()) {
		   var kr_rate = localStorage.getItem('kr_location_area_' + $('[name=merchant_id]').val());
		   try {
			   kr_rate = JSON.parse(kr_rate);
			   min_order = parseInt(kr_rate.minimum);
		   } catch (error) {
			   min_order = 0;
		   }
	   } else {
		   if ($("#minimum_order").length >= 1) {
			   min_order = parseFloat($("#minimum_order").val());
		   }
	   }
	   
	   if(isNaN(min_order)) {
		   min_order = 0;
	   }

	   var minimum= min_order;	   	  	  
	   	  	  if (isNaN(subtotal)){
	   	  	  	  subtotal=0;
	   	  	  }   	     	  	  
	   	  	  if (isNaN(minimum)){
	   	  	  	  minimum=0;
	   	  	  }   	     	  	  
	   	  	  if ( minimum>subtotal){   	  	  	
	              uk_msg(js_lang.trans_5+" Rs. "+ minimum);
	   	  	  	  return;
	   	  	  }      	  	  
	   	  	  
	          if ( $("#merchant_maximum_order").exists() ){
	    	      console.debug("max");
	    	      var merchant_maximum_order= parseFloat($("#merchant_maximum_order").val());    	      
	    	      if ( subtotal>merchant_maximum_order){
	    	      	  uk_msg(js_lang.trans_31+" "+ $("#merchant_maximum_order_pretty").val());
	   	  	  	      return;
	    	      }              	      
	          }

   	      	     
   	   /** if checkout is guest type */
   	   if ( $("#is_guest_checkout").exists() ){   	   	   
   	   	   if ( $("#map_address_toogle").exists()){   	   	   	   	   	  
   	          if ( $("#map_address_toogle").val()==2 ){
   	          	  $("#street").removeAttr("data-validation");
   	          	  $("#city").removeAttr("data-validation");
   	          	  $("#state").removeAttr("data-validation");
   	          }
   	   	   }  
   	   }   
   	
   	   var payment_type=$(".payment_option:checked").val();
   	   
   	   if ( $(".payment_option:checked").length<=0 ){
   	   	   uk_msg(js_lang.trans_6);
   	   	   return;
   	   }
		 
   	   if( $("#voucher_code").exists() ){
			var params="?action=checkvoucher&tbl=1&voucher_code="+$("#voucher_code").val()+"&contact_phone="+$("#contact_phone").val()+"&merchant_id="+$("#merchant_id").val();
			busy(true);
			var isException = false;
			$.ajax({    
			type: "GET",
			url: ajax_url+params,
			async: false,
			dataType: 'json',       
			success: function(data){ 
				busy(false);     
				if (data.code == 1) {
					isException = true;
					uk_msg(data.msg);
				} 
			}, 
			error: function(){	        	    	
				busy(false);
				console.log(error); 
			}		
			});
			if(isException){
				return;
			}
		}


		if ( $("#full_name").exists() ){
			var p = $("#full_name").val();
			if(p !== ''){ 	      	      	   
				if ( p.length > 40){
					uk_msg('Full Name should not be larger than 40 characters');
					$("#full_name").focus();
					$("#full_name").css("border", "1px solid red");
					return;
				}
				if(p.match(/[^a-zA-Z0-9 ]/g)){
					uk_msg('Special characters and numbers are not allowed');
					$("#full_name").focus();
					$("#full_name").css("border", "1px solid red");
					return;
				}
			}else{
				$("#full_name").blur();
				return;
			}
		}

   	   if ( $("#contact_phone").exists() ){
	   	    var p = $("#contact_phone").val();   	      	      	   
    	   	if(p.match(phoneno)){
				console.log('Contact true');
			}else{
				uk_msg(js_lang.trans_7);
				$("#contact_phone").css("border", "1px solid red");
				return;
			}
		}
		  
		if ( $("#alternate_phone").exists() ){
			var p = $("#alternate_phone").val();   	      	      	   
		  	if(p !== ''){ 
				if(p.match(phoneno)){
					console.log('Contact true');
				}else{
					uk_msg(js_lang.trans_7);
					$("#alternate_phone").css("border", "1px solid red");
					return;
				}
			}
		}

		if ( $("#delivery_type").val() == 'delivery' && $("#street").exists() ){
			var p = $("#street").val();
			if(p == ''){	      	      	   
				$("#street").blur();
				uk_msg('Delivery address should not be empty');
				return;
			}
		}

		// if ( $("#street").exists() ){
		// 	var p = $("#street").val();
		// 	if(p !== ''){	      	      	   
		// 		if ( p.length > 100){
		// 			uk_msg('Delivery address should not be larger than 100 characters');
		// 			$("#street").focus();
		// 			$("#street").css("border", "1px solid red");
		// 			return;
		// 		}
		// 		if(p.match(/[^a-zA-Z0-9 ]/g)){
		// 			uk_msg('Special character are not allowed');
		// 			$("#street").focus();
		// 			$("#street").css("border", "1px solid red");
		// 			return;
		// 		}
		// 	}else{
		// 		$("#street").blur();
		// 		return;
		// 	}
		// }

		if ( $("#email_address").exists() ){
			var p = $("#email_address").val();
			var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
			if(p == ''){
				// Do Nothing
			}else{
				if(!pattern.test(p)){
					uk_msg('Email is not correct');
					$("#email_address").focus();
					$("#email_address").css("border", "1px solid red");
					return;
				}
			}
		}

   	   if ( payment_type =="ccr" || payment_type =="ocr"){   	   	   
   	   	   if ( $(".cc_id:checked").length<=0 ){
   	   	   	   uk_msg(js_lang.trans_8);   	   	  
   	   	   	   return;
   	   	   }   	   
   	   }        	   
   	      	   
   	   if ( payment_type=="pyr"){
   	   	   var selected_payment_provider_name=$("#payment_provider_name:checked").length;   	   	   
   	   	   if ( selected_payment_provider_name<=0){
   	   	   	   uk_msg(js_lang.trans_40);   	   	   
   	   	   	   return;
   	   	   }   	   
   	   }   
   	   
   	   /** check if client move the marker */
   	   if ( $("#map_address_toogle").exists()){   	   	
   	      if ( $("#map_address_toogle").val()==2 ){
	   	   	   if ( $("#map_address_lat").val()==""){
	   	   	   	  uk_msg(js_lang.trans_48);
	   	   	   	  $("#temporary_address").geocomplete("find", "Karachi, Pakistan");
	   	   	   	  console.log("I AM HERE");
	   	   	   	  return;
	   	   	   }   	   
   	      }
   	   }   
   	      	   
   	   if ( $(".capcha-wrapper").exists() ){
   	   	   var google_resp = $(".capcha-wrapper").find(".g-recaptcha-response").val();    		
   	   	   dump(google_resp);
   	   	   if (!google_resp) {
   	   	   	   uk_msg(js_lang.trans_52); 
   	   	   	   return;
   	   	   }
   	   } 
   	      	   
   	   /*check if merchant sms oder verification is required*/
   	   if ( $("#order_sms_code").exists()){
   	   	    if ( $("#order_sms_code").val()=="" ){
   	   	    	uk_msg(js_lang.trans_53);    	  
   	   	    	$("#order_sms_code").focus();  
   	   	    	return;
   	   	    } else {
   	   	    	$("#client_order_sms_code").val( $("#order_sms_code").val() );
   	   	    	$("#client_order_session").val( $(".send-order-sms-code").data("session"));
   	   	    } 	      	   
   	   }   

		var latitude	= $("#street_lat").val();
		var longitude 	= $("#street_long").val();
		if (!latitude && !longitude && $("#delivery_type").val() == 'delivery' ) {
			showPreloader(true);

			getLatLongByAddress();

			setTimeout(function(){
				$("#frm-delivery").submit(); 
			},2500);	
		}else{
			$("#frm-delivery").submit(); 
		}
   	     	   
   	   //form_submit('frm-delivery');   	   
   });
   
   $("#contact_phone").keypress(function(){
		$(this).css("border", "1px solid #D5D9DC")
	});
	$("#alternate_phone").keypress(function(){
		$(this).css("border", "1px solid #D5D9DC")
	});
   /*ANIMATE*/
  /* $('.animated').appear(function(){             
      var element = $(this);
      var animation = element.data('animation');
      var animationDelay = element.data('delay');      
      if (animationDelay) {
        setTimeout(function(){
          element.addClass( animation + " visible" );
          element.removeClass('hiding');
          if (element.hasClass('counter')) {          
          }
        }, animationDelay);
      }else {
        element.addClass( animation + " visible" );
        element.removeClass('hiding');
        if (element.hasClass('counter')) {         
        }
      }    
    },{accY: -1});*/
      
    /*LOOP THRU STEPS*/
    $( ".order-steps li" ).each(function( index ) {
    	var current=$(this);    	
    	var link= current.find("a");
    	if ( current.hasClass("active") ){  
    	} else {    	    
    	    link.attr("href","javascript:;")    	   
    	    link.addClass("inactive");
    	}    
    });
        
	$('.text_only').keyup(function () {     
		this.value = this.value.replace(/[^a-z A-Z\.]/g,'');
	});

   $('.filter_by').on('ifChecked', function(event){
   	   dump('d2');
       research_merchant();       
   });
   
   $('.filter_by').on('ifUnchecked', function(event){
   	   dump('d3');
       research_merchant();   
   });     
      
   $('.filter_by_radio').on('ifChecked', function(event){  
       $(".filter_minimum_clear").show();   
       research_merchant();   
   });     
         
   $( document ).on( "click", ".button_filter", function() {
   	   $(".frm_search_name_clear").show();
   	   research_merchant(); 
   });
      
   $( document ).on( "change", ".sort-results", function() {
   	   var sort_filter=$(this).val();   	   
   	   if (!empty(sort_filter)){
   	   	  dump(sort_filter);   	   
   	      $("#sort_filter").val(sort_filter);      	   
   	      research_merchant();   	  
   	   }   	   
   });
    
   
   $( document ).on( "click", ".login-link", function() {    	     	  
   	  $(".section1").hide();
   	  $(".section2").fadeIn();
   });	
   
   
   $( document ).on( "click", ".signup-link", function() {    	     	     	  
   	  $(".section3").fadeIn();
   	  $(".section2").hide();
   	  $(".section1").hide();
   });	
      
   $( document ).on( "click", ".back-link", function() {    	  
   	  $(".section1").fadeIn();
   	  $(".section2").hide();
   	  $(".section3").hide();
   	  $(".section-forgotpass").hide();
   });	
   
   $( document ).on( "click", ".fc-close", function() {    	  
      close_fb();
   });	     
      
   $( document ).on( "click", ".remove-rating", function() {    	  
       var params="action=removeRating&currentController=store&merchant_id="+$("#merchant_id").val();
		busy(true);
	    $.ajax({    
	    type: "POST",
	    url: ajax_url,
	    data: params,
	    dataType: 'json',       
	    success: function(data){ 
	    	busy(false);      
	    	if (data.code==1){	  	    		
	    		load_ratings();
	    		$('#bar-rating').barrating('clear'); 
	    		$(".br-widget a").removeClass("br-selected");
	    		$(".rating_handle").addClass("hide");
	    	} else {
	    		uk_msg(data.msg);
	    	}	    
	    }, 
	    error: function(){	        	    	
	    	busy(false); 
	    }		
	    });
   });	     
   
  
   $( document ).on( "click", ".write-review", function() {    	  
   	   if ( $(this).hasClass("active") ){
   	   	   ////console.debug('d2');
   	   	   $(".review-content-wrap").slideToggle("fast");
   	   } else {   
   	       $(".review-content-wrap").slideToggle("fast");
   	   }
   });	
      
   /*if ( $(".merchant-review-wrap").exists() ){
   	   load_reviews();
   }*/
      
   $( document ).on( "click", ".map-li", function() {    	     	  
   	  var locations;
   	  if ( $("#google_map_wrap").text()=="" ){
   	  	 
   	  	 if (typeof $("#merchant_map_latitude").val() === "undefined" || $("#merchant_map_latitude").val()==null || $("#merchant_map_latitude").val()=="" ) {  
   	  	 	$("#google_map_wrap").html("<p class=\"uk-text-muted\">"+js_lang.trans_9+"</p>");
   	  	 	return;
   	  	 }	
         locations=[[$("#map_title").val(),$("#merchant_map_latitude").val(),$("#merchant_map_longtitude").val(),16]];
         initializeMarker(locations);      
   	  }
   });
         
   $( document ).on( "click", ".uk-tab-responsive a", function() {    	     	  
   	  var locations;
   	  if ( $("#google_map_wrap").text()=="" ){
   	  	 
   	  	 if (typeof $("#merchant_map_latitude").val() === "undefined" || $("#merchant_map_latitude").val()==null || $("#merchant_map_latitude").val()=="" ) {  
   	  	 	$("#google_map_wrap").html("<p class=\"uk-text-muted\">"+js_lang.trans_9+"</p>");
   	  	 	return;
   	  	 }	
         locations=[[$("#map_title").val(),$("#merchant_map_latitude").val(),$("#merchant_map_longtitude").val(),16]];
         initializeMarker(locations);      
   	  }
   });
    
   $( document ).on( "click", ".top_sigin", function() {    	  
   	   var params="action=loginModal&tbl=loginModal&do-action=sigin&currentController=store";
       open_fancy_box(params);
   });
      
   $( document ).on( "click", ".top_signup", function() {    	  
   	   var params="action=loginModal&tbl=loginModal&do-action=sigin&currentController=store";
       open_fancy_box(params);
   });
   
   $( document ).on( "click", ".edit-review", function() {    	  
   	   var id=$(this).data("id");
   	   var params="action=editReview&currentController=store&tbl=editReview&id="+id+"&web_session_id="+$("#web_session_id").val();
       open_fancy_box(params);
   });	

     
   $( document ).on( "click", ".delete-review", function() {    	  
   	   var id=$(this).data("id");
   	   var q=confirm(js_lang.trans_10);
   	   if (q){
   	   	   delete_review(id);
   	   }   
   });

     
   $( document ).on( "click", ".print-receipt", function() {  
       $('#receipt-content').printElement();
   });	
   
   $( document ).on( "click", ".view-receipt", function() {    	       	 	
   	   var params="action=viewReceipt&currentController=store&tbl=viewReceipt&id="+ $(this).data("id");
       open_fancy_box(params);
   });	
   
   $( document ).on( "click", ".add-to-cart", function() {    	       	 	
      var id=$(this).data("id");
      var a=confirm(js_lang.trans_11);
      if (a){
      	 add_to_order(id);      
      }
   });	
      
   $( document ).on( "click", ".search-box-wrap	 a", function() {    	       	 	
   	  if ( $(this).hasClass("filter_minimum_clear") ){
   	  	 return;
   	  }   
   	  if ( $(this).hasClass("frm_search_name_clear") ){
   	  	 return;
   	  }   
   	  var i=$(this).find(".fa");
   	  if ( i.hasClass("fa-caret-up") ){
   	  	  i.removeClass("fa-caret-up");
   	  	  i.addClass("fa-caret-down");
   	  } else {
   	  	  i.removeClass("fa-caret-down");
   	  	  i.addClass("fa-caret-up");
   	  }   
     	 
   	  var parent=$(this).parent();   	  
   	  var child=parent.find(".uk-list");
   	  child.slideToggle("fast");
   });	
   
   $( document ).on( "click", ".next_step_free_payment", function() {    	       	 	
   	  next_step_free_payment($(this).data("token"));
   });	   
   
   $( document ).on( "click", ".row_del", function() {
        var ans=confirm(js_lang.deleteWarning);        
        if (ans){        	
        	row_delete( $(this).attr("rev"),$("#tbl").val(), $(this)); 
        }
    });
    
    $( document ).on( "click", ".filter_minimum_clear", function() {    	
    	$(".filter_minimum").attr("checked",false);
    	$('.filter_minimum').iCheck('update'); 
    	$(this).hide();
    	research_merchant();  
    });            
       
    $( document ).on( "click", ".frm_search_name_clear", function() {    	
    	$(".filter_name").val('');
    	$(this).hide();
    	research_merchant();  
    });
            
    /*contact map*/
    if ( $("#map_latitude").length>=1 ){
    	if (typeof $("#map_latitude").val() === "undefined" || $("#map_longitude").val()==null  ) {  
   	  	 	$("#google_map_wrap").html("<p class=\"uk-text-muted\">Map not available</p>");
   	  	 	return;
   	  	 }	
         locations=[[$("#map_title").val(),$("#map_latitude").val(),$("#map_longitude").val(),16]];         
         initializeMarker(locations);      
    }
    
   
    $( document ).on( "click", ".fb-link-login", function() {    	
    	////console.debug('d2');
    	checkLoginState();
    });
    
    $( document ).on( "click", ".forgot-pass-link", function() {    	    
    	  $(".section-forgotpass").fadeIn();
    	  $(".section3").hide();
   	      $(".section2").hide();
   	      $(".section1").hide();
    });
    
    next_bg();
        
    $( document ).on( "click", ".resume-app-link", function() {    	    
    	$(".frm-resume-signup").slideToggle("fast");
    });	
        
    $( document ).on( "click", ".resend-activation-code", function() {    	    
    	resend_activation_code( $("#token").val() );
    });	
    
    
    if ( $("#merchant_header").length>=1 ){
    	var merchant_header=upload_url+"/"+$("#merchant_header").val();
    	//console.debug(merchant_header);
    	$('#menu-with-bg').css('background-image', 'url(' + merchant_header + ')');
    }
    
    $( document ).on( "click", ".apply_voucher", function() {
    	if ( $("#voucher_code").val()!="" ){
    		apply_voucher();
    	} else {
    		uk_msg(js_lang.trans_22);
    	}        
    });    
    
    
    if( $('#restaurant-mini-list').is(':visible') ) {	    	
    	var t=$("#tab-left-content li:first-child").find(".links");      	
    	//geocode_address(t.data("id"));
    	var lat=t.data("lat");
    	var lng=t.data("long");    	
    	if (isNaN(lat) && isNaN(lng)){
    	    geocode_address(t.data("id"));
    	} else {
    		//locations=[['test',lat,lng,18]];    		
    		locations=[['',lat,lng,18]];
            geocode_address2(locations);      
    	}    
    }	
        
    $( document ).on( "click", ".view-map", function() {     	
    	var lat=$(this).data("lat");
    	var lng=$(this).data("long");    	
    	if (isNaN(lat) && isNaN(lng)){
    	    geocode_address($(this).data("id"));
    	} else {
    		var merchantname=$(this).data("merchantname");   	
    		locations=[[merchantname,lat,lng,18]];
            geocode_address2(locations);      
    	}    
    });	            
            
}); /*END DOCU*/

function table()
{			
	var action=$("#action").val();	
	dump(action);
	var params=$("#frm_table_list").serialize();
			
	var sInfo=js_lang.trans_12;	
	
	if ( action=="ClientCCList"){	
		params+="&action=ClientCCList";
		sInfo=js_lang.trans_13;
		sEmptyTable=js_lang.tablet_1;
		
	} else if( action=="addressBook"){
		params+="&action=addressBook";
		sEmptyTable=js_lang.tablet_1;
		
	} else {		
		sInfo=js_lang.trans_13;
		sEmptyTable=js_lang.tablet_1;
	}
		
	if ( action=="searchArea"){
		 epp_table = $('#table_list').dataTable({
		       "bProcessing": true, 
		       "bServerSide": true,	    
		       "bFilter":false,
		       "bLengthChange":false,
		       "sAjaxSource": ajax_url+"?"+params,	       		       
		       "bDeferRender": true,
		       "iDisplayLength": 10,
		       "pagingType": "full_numbers",
		       "oLanguage":{
		       	 "sInfo": sInfo,
		       	 "sInfoEmpty":  js_lang.tablet_3,
		       	 "sEmptyTable": sEmptyTable,
		       	 "sProcessing": "<p>"+js_lang.tablet_7+" <i class=\"fa fa-spinner fa-spin\"></i></p>",
		       	 "oPaginate": {
				        "sFirst":    js_lang.tablet_10,
				        "sLast":     js_lang.tablet_11,
				        "sNext":     js_lang.tablet_12,
				        "sPrevious": js_lang.tablet_13
				  }
		       },
		       "fnInitComplete": function (oSettings, json) {  		       	  		       	  		       	  
	              if ( oSettings._iRecordsTotal<=0){
	              	  $(".ops_notification").show();
	              }
	           },
	           "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {	      	           	
	            	global_plot_marker[iDisplayIndex]=[ucwords(aData[7]),parseFloat(aData[5]),parseFloat(aData[6]),iDisplayIndex,aData[8],aData[9],aData[10] ];
	            		            	
	           },
	           "fnDrawCallback": function( oSettings ) {
	           	  plotMerchantLocationNew(global_plot_marker);
	           }
	    });		
	} else {
	    epp_table = $('#table_list').dataTable({
		       "bProcessing": true, 
		       "bServerSide": false,	    
		       "bFilter":false,
		       "bLengthChange":false,
		       "sAjaxSource": ajax_url+"?"+params,	       
		       //"aaSorting": [[ 0, "desc" ]],
		       "oLanguage":{
		       	 "sInfo": sInfo,
		       	 "sEmptyTable": sEmptyTable,
		       	 "sInfoEmpty":  js_lang.tablet_3,
		       	 "sProcessing": "<p>"+js_lang.tablet_7+" <i class=\"fa fa-spinner fa-spin\"></i></p>",
		       	 "oPaginate": {
				        "sFirst":    js_lang.tablet_10,
				        "sLast":     js_lang.tablet_11,
				        "sNext":     js_lang.tablet_12,
				        "sPrevious": js_lang.tablet_13
				  }
		       },
		       "fnInitComplete": function (oSettings, json) {                                                   
	              if ( json.iTotalRecords <=0){
	              	 $(".ops_notification").show();
	              } else {
	              	 if ( action=="searchArea"){                     	 	              	 	
	              	 	plotMerchantLocation(json);
	              	 }
	              }
	           }
	    });		
	}
}

function table_reload()
{
	epp_table.fnReloadAjax(); 
}

function table_reload_with_params(new_params)
{
	var params=$("#frm_table_list").serialize();
	epp_table.fnReloadAjax(  ajax_url+"?"+params+new_params ); 
}

function research_merchant()
{
	var filter_delivery_type='';
	var filter_cuisine='';
	var filter_promo='';
	var filter_minimum='';
	var filter_name='';
	
	/*$('input:checkbox.filter_delivery_type').each(function () {
        var sThisVal = (this.checked ? $(this).val() : "");
        if ( sThisVal !=""){
            filter_delivery_type+=sThisVal+",";
        }
    });*/	
	filter_delivery_type = $(".filter_delivery_type:checked").val();
    
    $('input:checkbox.filter_cuisine').each(function () {
        var sThisVal = (this.checked ? $(this).val() : "");
        if ( sThisVal !=""){
            filter_cuisine+=sThisVal+",";
        }
    });
        
    $('input:checkbox.filter_promo').each(function () {
        var sThisVal = (this.checked ? $(this).val() : "");
        if ( sThisVal !=""){
            filter_promo+=sThisVal+",";
        }
    });
    
    
    filter_minimum=$(".filter_minimum:checked").val(); 
    filter_name=$("#filter_name").val();
    if (typeof filter_name === "undefined" || filter_name==null ) {  
    	filter_name='';
    }	        
           
    var new_params='';
    if (!empty(filter_delivery_type)){
        new_params+="&filter_delivery_type="+filter_delivery_type;
    }
    
    if (!empty(filter_cuisine)){
        new_params+="&filter_cuisine="+filter_cuisine;
    }
    
    if (!empty(filter_promo)){
       new_params+="&filter_promo="+filter_promo;
    }
    
    if (!empty(filter_minimum)){
       new_params+="&filter_minimum="+filter_minimum;
    }
    
    if (!empty(filter_name)){
       new_params+="&filter_name="+filter_name;
    }
    
    sort_filter=$("#sort_filter").val();    
    if (!empty(sort_filter)){
        new_params+="&sort_filter="+sort_filter;   
    }
    
    if (!empty( $("#display_type").val() )){
    	new_params+="&display_type="+$("#display_type").val();
    }
        
    if (!empty( $("#restaurant_name").val() )){
    	new_params+="&restaurant_name="+$("#restaurant_name").val();
    }
        
    dump(new_params);
    window.location.href= $("#current_page_url").val() + new_params ;
    return false;    
}

function open_fancy_box(params)
  {  	  	  	  	
  	dump(params);
	var URL=ajax_url+"/?"+params;
		$.fancybox({        
		maxWidth:800,
		closeBtn : false,          
		autoSize : true,
		padding :0,
		margin :2,
		modal:false,
		type : 'ajax',
		href : URL,
		openEffect :'elastic',
		closeEffect :'elastic',
		/*helpers: {
		    overlay: {
		      locked: false
		    }
		 }*/
	});   
}

function open_modal_box(params)
  {
	showPreloader(true);

    dump(params);
    var URL=ajax_url+"/?"+params;
    $.ajax({
      type : 'post',
      url : URL, //Here you will fetch records 
      success : function(data) {
		showPreloader(false);
		$('.modal-body1').html(data);//Show fetched data from database
      }
    }); 
       
    //     var tp = $("#t-p").html();
    // $("#c-btn-price").html(tp);
}

// function load_dynamic_menu(params)
//   {                 
    // dump(params);
//     var URL=ajax_url+"/?"+params;
//     $.ajax({
//       type : 'post',
//       url : URL, //Here you will fetch records 
//       success : function(data) {
//         $('#menu-div').html(data);//Show fetched data from database
//       }
//     }); 
// }

function open_fancy_box2(params)
  {  	  	  	  	
	var URL=ajax_url+"/?"+params;
	$.fancybox({        
	maxWidth:800,
	closeBtn : false,          
	autoSize : true,
	padding :0,
	margin :2,
	modal:false,
	type : 'ajax',
	href : URL,
	openEffect :'elastic',
	closeEffect :'elastic'	
	});   
}

function close_fb()
{
	// $.fancybox.close(); 
    $('#myModal, #food-item-modal').modal('hide');
}

function uk_msg(msg)
{
	var n = noty({
		 text: msg,
		 type        : "warning" ,		 
		 theme       : 'relax',
		 layout      : 'topCenter',		 
		 timeout:2500,
		 animation: {
	        open: 'animated fadeInDown', // Animate.css class names
	        close: 'animated fadeOut', // Animate.css class names	        
	    }
	});
}

function uk_msg_sucess(msg)
{
	var n = noty({
		 text: msg,
		 type        : "success" ,		 
		 theme       : 'relax',
		 layout      : 'topCenter',		 
		 timeout:2500,
		 animation: {
	        open: 'animated fadeInDown', // Animate.css class names
	        close: 'animated fadeOut', // Animate.css class names	        
	    }
	});	  
}


function get_pretty_price(price, type, message_text=''){
    var params="action=GetPrettyPrice&price="+price;
	$.ajax({    
        type: "POST",
        url: ajax_url,
        data: params,
        dataType: 'json',
        success: function(data){ 
            if(type == 'remaining_rupee'){
                $('#remaining-rupee').html(data.details.price);        
            }
            
            if(type == 'free_delivery_rupee'){
                $('#free-delivery-rupee').html(data.details.price);
            }
            
            if(type == 'minimum_subtotal'){
                uk_msg(message_text+" "+data.details.price);
            }
        }
    });
} //get_pretty_price

function load_item_cart()
{	
	var params="action=loadItemCart&currentController=store&merchant_id="+$("#merchant_id").val();
	params+="&delivery_type="+$("#delivery_type").val();

	var kr_rate = localStorage.getItem('kr_location_area_' + $('[name=merchant_id]').val());
	try {
		kr_rate = JSON.parse(kr_rate);
		kr_area_id = kr_rate.area_id;
		kr_rate = kr_rate.rate_id;
	} catch (error) {
		kr_rate = null;
	}
	if(typeof(merchant_information) !== 'undefined') {
		kr_rate = $('[name="delivery_zone"]').length > 0 ? kr_rate : null;
	}
	
	if (kr_rate) {
		params += `&location_area=${kr_rate}&area_id=${kr_area_id}`;
	}

	if ( $("#cart_tip_percentage").exists()  ){
		params+="&cart_tip_percentage=" + $("#cart_tip_percentage").val();
	}	
	

	params+="&current_page="+ current_page;
	// params+="&card_fee="+ card_fee;
		
	// busy(true);/

}

function delete_item(row)
{
	var params="action=deleteItem&row="+row;
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: params,
    dataType: 'json',       
    success: function(data){ 
    	busy(false);      	
    	if (data.code==1){    		
    		load_item_cart();
    	}
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });
}

function load_cc_list()
{
	var htm='';
	var params="action=loadCreditCardList&currentController=store";
	params+="&is_guest_checkout="+$("#is_guest_checkout").val();
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: params,
    dataType: 'json',       
    success: function(data){ 
    	busy(false);      	
    	if (data.code==1){    		    		    		    	
    		$.each(data.details, function( index, val ) {
    			$(".uk-list-cc tr").remove(); 
    			/*htm+='<li>';
	              htm+='<div class="uk-grid">';
	                htm+='<div class="uk-width-1-2">'+val.credit_card_number+'</div>';
	                htm+='<div class="uk-width-1-2">&nbsp;<input type="radio" name="cc_id" class="cc_id" value="'+val.cc_id+'"></div>';
	              htm+='</div>';
	            htm+='</li>';*/
    			
    			htm+='<tr>';
				  htm+='<td>'+val.credit_card_number+'</td>';
				  htm+='<td><input type="radio" name="cc_id" class="cc_id" value="'+val.cc_id+'"></td>';
				htm+='</tr>';
    			
    		});
    		$(".uk-list-cc").append(htm);
    		$(".cc-add-wrap").hide();
    	}
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });
}

function load_cc_list_merchant()
{
	var htm='';
	var params="action=loadCreditCardListMerchant&currentController=store";
	params+="&merchant_id="+$("#merchant_id").val();
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: params,
    dataType: 'json',       
    success: function(data){ 
    	busy(false);      	
    	if (data.code==1){    		    		    		    	
    		$.each(data.details, function( index, val ) {
    			$(".uk-list-cc tr").remove(); 
    			    			
    			/*$(".uk-list-cc li").remove(); 
    			htm+='<li>';
	              htm+='<div class="uk-grid">';
	                htm+='<div class="uk-width-1-2">'+val.credit_card_number+'</div>';
	                htm+='<div class="uk-width-1-2">&nbsp;<input type="radio" name="cc_id" class="cc_id" value="'+val.mt_id+'"></div>';
	              htm+='</div>';
	            htm+='</li>';*/
	            
	            htm+='<tr>';
				  htm+='<td>'+val.credit_card_number+'</td>';
				  htm+='<td><input type="radio" name="cc_id" class="cc_id" value="'+val.mt_id+'"></td>';
				htm+='</tr>';
				
    		});
    		$(".uk-list-cc").append(htm);
    		$(".cc-add-wrap").hide();
    	}
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });
}

function add_rating(value,merchant_id)
{
    var params="action=addRating&currentController=store&value="+value+"&merchant_id="+merchant_id;
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: params,
    dataType: 'json',       
    success: function(data){ 
    	busy(false);      		
    	if (data.code==1){    
    		$(".rating_handle").removeClass("hide");
    		load_ratings();
            close_fb();
    	} else if( data.code==3) {
    		uk_msg(data.msg);
    	} else {
    		$('#bar-rating').barrating('clear'); 		
    		var params="action=loginModal&tbl=loginModal&currentController=store&do-action=rating&rating="+value;
    	    open_fancy_box(params);
    	}
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });
}

function load_ratings()
{
	var params="action=loadRatings&currentController=store&merchant_id="+$("#merchant_id").val();
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: params,
    dataType: 'json',       
    success: function(data){ 
    	busy(false);      
    	if (data.code==1){    		
    		$(".votes_counter").html(data.details.votes+" Votes");
    		$(".rate-wrap h6").html(data.details.ratings);
    	}
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });
}


function load_top_menu()
{
	var params="action=loadTopMenu&currentController=store";
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: params,
    dataType: 'json',       
    success: function(data){ 
    	busy(false);      
    	if (data.code==1){
    		$(".section-to-menu-user").append(data.details);
    		$(".top_signup").remove();
    		$(".top_sigin").remove();
    	}
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });
}


function load_reviews()
{
	var params="action=loadReviews&currentController=store&merchant_id="+$("#merchant_id").val();
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: params,
    dataType: 'json',       
    success: function(data){ 
    	busy(false);      
    	if (data.code==1){
    	   $(".merchant-review-wrap").html(data.details);
    	   initRating();   
    	   initReadMore();  	   
    	} else {
    	   $(".merchant-review-wrap").html("<div class=\"uk-text-muted\">"+data.msg+"</div>");
    	}
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });
}

function delete_review(id)
{
	var params="action=deleteReview&currentController=store&id="+id+"&web_session_id="+$("#web_session_id").val();
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: params,
    dataType: 'json',       
    success: function(data){ 
    	busy(false);      
    	if (data.code==1){    	   
            load_reviews();            
            close_fb();
    	} else {
    	   uk_msg(data.msg);
    	}
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });
}

function add_to_order(order_id)
{
	var params="action=addToOrder&currentController=store&order_id="+order_id;
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: params,
    dataType: 'json',       
    success: function(data){ 
    	busy(false);      
    	if (data.code==1){       			              
    		//window.location.replace(sites_url+"/menu/merchant/"+data.details.restaurant_slug);
    		window.location.replace(sites_url+"/menu-"+data.details.restaurant_slug);
    	} else {
    	   uk_msg(data.msg);
    	}
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });
}

function next_step_free_payment(token)
{
	var params="action=merchantFreePayment&currentController=store&token="+token;
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: params,
    dataType: 'json',       
    success: function(data){ 
    	busy(false);      
    	if ( $("#merchant_email_verification").val()=="yes" ){
		   window.location.replace(sites_url+"/merchantsignup/?Do=thankyou2&token="+token);
		} else {
		   window.location.replace(sites_url+"/merchantsignup/?Do=step4&token="+token);
		}
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });	
}

function row_delete(id,tbl,object)
{		
	var form_id=$("form").attr("id");
	rm_notices();	
	busy(true);
	var params="action=rowDelete&tbl="+tbl+"&row_id="+id+"&whereid="+$("#whereid").val();	
	 $.ajax({    
        type: "POST",
        url: ajax_url,
        data: params,
        dataType: 'json',       
        success: function(data){
        	busy(false);
        	if (data.code==1){       
        		$("#"+form_id).before("<div class=\"uk-alert uk-alert-success\">"+data.msg+"</div>");         		
        		tr=object.closest("tr");
                tr.fadeOut("slow");
        	} else {      
        		$("#"+form_id).before("<div class=\"uk-alert uk-alert-danger\">"+data.msg+"</div>");
        	}        	        	
        }, 
        error: function(){	        	        	
        	busy(false);
        	$("#"+form_id).before("<div class=\"uk-alert uk-alert-danger\">"+js_lang.trans_14+"</div>");
        }		
    });
}

/*=============================================================
START GOOGLE MAP MARKER
=============================================================*/
function initializeMarker(locations){	

    window.map = new google.maps.Map(document.getElementById('google_map_wrap'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
        //styles: [ {stylers: [ { "saturation":-100 }, { "lightness": 0 }, { "gamma": 0.5 }]}]
    });
        
    var infowindow = new google.maps.InfoWindow();

    var bounds = new google.maps.LatLngBounds();

    for (i = 0; i < locations.length; i++) {
    	    	                
        if ( $("#map_marker").exists() ){
        	var image=upload_url+"/"+$("#map_marker").val(); 
        	marker = new google.maps.Marker({
	            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	            map: map ,
	            icon:image
	        });
        } else {
	        marker = new google.maps.Marker({
	            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	            map: map           
	        });
        }

        bounds.extend(marker.position);

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    map.fitBounds(bounds);

    var listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(16);
        google.maps.event.removeListener(listener);
    });
}

function initializeMarkerNew(locations,divname,zoom_value){		
		
	window.map = new google.maps.Map(document.getElementById(divname), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    });
        
    var contentString=[];
       
    for (i = 0; i < locations.length; i++) {
        //dump(locations);
    	contentString[i]='<div class="marker-info-wrap">';
    	contentString[i]+=locations[i][6];
    	contentString[i]+="<div>"+js_lang.trans_35+" : "+locations[i][0]+"</div>";
    	contentString[i]+="<div>"+js_lang.trans_36+" : "+locations[i][4]+"</div>";
    	contentString[i]+="<a href=\""+sites_url+"/menu/merchant/"+locations[i][5]+"\" >"+js_lang.trans_37+"</a>";
    	contentString[i]+="</div>";
    	
    	
    	var infowindow = new google.maps.InfoWindow({
           content: contentString[i]
        });

        
        var bounds = new google.maps.LatLngBounds();
    
        var image=upload_url+"/"+$("#map_marker").val();        
                
        if ( $("#map_marker").exists() ){
	        marker = new google.maps.Marker({
	            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	            map: map,
	            icon: image     
	        });
        } else {
        	marker = new google.maps.Marker({
	            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	            map: map	           
	        });
        }

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {   
            	infowindow.setContent(contentString[i]);             
                infowindow.open(map,marker);
            }
        })(marker, i));

        
        bounds.extend(marker.position);
        
    }
    

    dump("zoom=>"+zoom_value);
    if (typeof zoom_value === "undefined" || zoom_value==null ) { 
    	zoom_value=10;
    }
    dump("zoom=>"+zoom_value);
    
    map.fitBounds(bounds);

    var listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(zoom_value);
        
        /** focus on the map location */
        if ( focus_lat!=""){        	
        	dump("focus_lat->"+focus_lat);
            dump("focus_lng->"+focus_lng);
            var position = new google.maps.LatLng(focus_lat,focus_lng);
            map.setCenter(position);   
        }                
        
        google.maps.event.removeListener(listener);
    });
	
}
/*=============================================================
END GOOGLE MAP MARKER
=============================================================*/

function fb_register(object)
{
	var fb_params='';
	$.each( object, function( key, value ) {      
      fb_params+=key+"="+value+"&";
    });
		
    rm_notices();	
	busy(true);
	
	var params="action=FBRegister&currentController=store&"+fb_params+"&YII_CSRF_TOKEN="+$("#YII_CSRF_TOKEN").val();
	 $.ajax({    
        type: "POST",
        url: ajax_url,
        data: params,
        dataType: 'json',        
        success: function(data){         	
        	busy(false);
        	if (data.code==1){
        		load_top_menu();
        		
        		if(!empty(data.details)){
	        		if (!empty(data.details.redirectverify)){
	        			uk_msg_sucess(data.msg);
	        			if ($("#redirect").exists()){
	        			   window.location.href = data.details.redirectverify+"&checkout=true"; 
	        			} else {
	        			   window.location.href = data.details.redirectverify; 
	        			}
	        			return;
	        		}
        		}
        		        		
        		if ( $(".section-checkout").exists() ){        			
        			window.location.href = $("#redirect").val();
        		}	
        		            		    	
        		if ( $("#single_page").exists() ){
        			window.location.href=home_url;
        		}		
        		
        		close_fb();
        	} else {
        		uk_msg(data.msg);
        	}
        }, 
        error: function(){	             	
        	busy(false);
        }		
   });
}


/*CHANGE BACKGROUND*/
//var handle_bg=setInterval(next_bg, 5000);
// var backgrounds = [
// sites_url+"assets/images/b-1.jpg",
// sites_url+"assets/images/b-2.jpg",
// sites_url+"assets/images/b-3.jpg",
// sites_url+"assets/images/b-4.jpg",
// sites_url+"/assets/images/b-5.jpg",
// sites_url+"assets/images/b-6.jpg",
// ];
      
function next_bg()
{	
	
    
}

function resend_activation_code(token)
{
	$(".resend-activation-code").css({ 'pointer-events' : 'none' });
	var params="action=resendActivationCode&currentController=store&token="+token;
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: params,
    dataType: 'json',       
    success: function(data){ 
    	$(".resend-activation-code").css({ 'pointer-events' : 'auto' });
    	busy(false);      	
    	if (data.code==1){    		    	
    		uk_msg_sucess(data.msg);
    	} else {
    		uk_msg(data.msg);
    	}    	
    }, 
    error: function(){	        	    	
    	$(".resend-activation-code").css({ 'pointer-events' : 'auto' });
    	busy(false); 
    }		
    });
}

function apply_voucher()
{
	var action="applyVoucher";
	if ( $(".apply_voucher").text()==js_lang.trans_23 ){
		action="removeVoucher";
	}
	
	if ( action=="removeVoucher"){
		var a=confirm("Are you sure?");
		if (!a){
			return;
		}
	}
	
	var code = $("#voucher_code").val();
	var params="action="+action+"&currentController=store&voucher_code="+code+"&merchant_id="+$("#merchant_id").val();
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: params,
    dataType: 'json',       
    success: function(data){     	
    	busy(false);      	
    	if (data.code==1){    	
    		//console.debug(action);
    		load_item_cart();
    		if ( action=="removeVoucher"){
    			$(".apply_voucher").text(js_lang.trans_24);    		
    			$("#voucher_code").show();
    		} else {    			
    		    $("#voucher_code").hide();
    			$(".apply_voucher").text(js_lang.trans_23);
    		}    		
    		    		
    		/*if ( $(".tip_percentage").html()!="0%" ){    			
    			setTimeout( function(){    				
    				    			
    				if($(".tips.active").data("type")=="tip"){
    					
    					var tip=$(".tips.active").data("tip");
    					var tip_percentage = tip*100;
			            
    					var cart_subtotal=$("#subtotal_order2").val()
			            var tip_raw = tip*cart_subtotal;
			            dump(tip_raw.toFixed(2));		
			            
			            display_tip(tip_percentage,tip_raw.toFixed(2));
			            	
    				} else {    					    				
    				}
    				   				
    			} , 1000);
    		}*/
    		
    	} else {
           uk_msg(data.msg);
    	}
    }, 
    error: function(){	        	    	    	
    	busy(false); 
    }		
    });	
}

/***************************************
GET CURRENT LOCATION 
***************************************/

jQuery(document).ready(function() {	

    if(typeof($().geocomplete) == 'function') {
    	if ( $("#google_auto_address").val()=="yes" ){		
    	} else {
        		if ( $("#google_default_country").val()=="yes" ){			
        			$("#s").geocomplete({
                      country: $("#domain_country").val()            
                    });             
                } else {      
        			$("#s").geocomplete({
                      country: $("#domain_country").val()            
                   });	
        		}
    	}
    	$("#origin").geocomplete({
    		country: $("#admin_country_set").val()
    	});
    	
    }
	
	function success_geo(position) {
	    console.log('success_geo in store.js');
		if ( $("#s").val()!=""){
		 	 //return;
		 	 $("#s").val('');
		 }	
		/*console.debug(position.coords.latitude);
		console.debug(position.coords.longitude);		*/
		//getAddress(position.coords.latitude,position.coords.longitude);
		var lat=position.coords.latitude;
		var lng=position.coords.longitude;
		var latlng = new google.maps.LatLng(lat, lng);		
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({'latLng': latlng}, function(results, status) {						
			if (status == google.maps.GeocoderStatus.OK) {
				 //dump(results[0]);
				 if (results[1]) {
				    $('#location_loading_gif').hide(); 
				 	if (typeof results[0].formatted_address === "undefined" || results[0].formatted_address==null ) { 
				 		$("#s").val(results[1].formatted_address);
				 		$(".st").val(results[1].formatted_address);
				 	} else {	     				 						 		
				        $("#s").val(results[0].formatted_address);
				        $(".st").val(results[0].formatted_address);
				 	} 
				 } else {
				 	 uk_msg(js_lang.trans_27);
				 }
			} else {
				uk_msg(js_lang.trans_28 + " " + status);
			}
		});
	}
	
		
	/*auto get geolocation*/
	$('.locate-me').on('click',function(){
	    $('#location_loading_gif').show();
	    
	
    	if ( $(".forms-search").exists() ) {
    		if (navigator.geolocation) {
    		   if ( $("#disabled_share_location").val()==""){	
    		   	  dump('detect current location');
    	          navigator.geolocation.getCurrentPosition(success_geo);
    		   } 
    	    } else {
    	        //error('Geo Location is not supported');
    	    }
    	}
	
	});
	
    function getAddress(lat,lng)
    {
    	var params="action=geoReverse&currentController=store&lat="+lat+"&lng="+lng;
		busy(true);
	    $.ajax({    
	    type: "POST",
	    url: ajax_url,
	    data: params,
	    dataType: 'json',       
	    success: function(data){     	
	    	busy(false);      	
	    	if (data.code==1){    	
	    		if ( $("#s").val()==""){
	    		   $("#s").val(data.details);
	    		}
	    	} else {	           
	    		uk_msg(data.msg);
	    	}
	    }, 
	    error: function(){	        	    	    	
	    	busy(false); 
	    }		
	    });	
    }
        
    $( document ).on( "click", ".get_direction_btn", function() {    	
    	if ( $("#origin").val() ==""){
    		uk_msg(js_lang.trans_25);
    	} else {
    		$(".direction_output").css({"display":"none"});	
    		display_direction();
    	}    	
    });
    
    
    //if( $('.rating-wrapper').is(':visible') ) {	
    if ( $(".menu-left-content").exists() ) {
    	if ( $("#from_address").val()=="" ){
    		if ( $("#customer_ask_address").val()!=2){
    			    			
    			var delivery_type=$("#delivery_type").val();    			
    			if(delivery_type=="delivery"){    			
    		       var params="action=enterAddress&currentController=store&tbl=enterAddress";
    	           open_fancy_box2(params);    		    	
    			}
    		}	
    	}
    }	    
    
    $( document ).on( "click", ".change-address", function() {    	
    	var params="action=enterAddress&currentController=store&tbl=enterAddress";
    	open_fancy_box(params);    		
    });	    
    
           
    if ( $("#sisowbank").exists() ){
    	$("#sisowbank").addClass("grey-fields full-width");
    }
    
    
    if ( $("#payuForm").exists() ){
    	if ( $("#hash").val()=="" ){    		    	
    	} else {
    		$(".uk-button").attr("disabled",true);    		
    		$(".uk-button").css({ 'pointer-events' : 'none' });
    		$("#payuForm").submit();
    	}
    }
    if ( $("#payu_status").exists() ){
    	$(".uk-button").attr("disabled",true);    		
        $(".uk-button").css({ 'pointer-events' : 'none' });
    }    
    
    jQuery.fn.exists = function(){return this.length>0;}
    
    // if ( $("#is_merchant_open").exists() ){
    // 	if ( $("#is_merchant_open").val()==2 ){
    // 		var merchant_close_msg=$("#merchant_close_msg").val();    		
    // 		if (typeof merchant_close_msg === "undefined" || merchant_close_msg==null ) { 
    // 			merchant_close_msg(js_lang.trans_30);
    // 		} else {
    // 			uk_msg(merchant_close_msg);
    // 		}	
    // 	}
    // }
    
    $( document ).on( "click", "a.share", function(ev) {
		social_popup( $(this).attr("rel") );
		ev.preventDefault();
		return;
	});
		
	$( document ).on( "change", "#delivery_type", function() {    	
		var delivery_type=$(this).val();				
		if ( delivery_type=="pickup"){
			$(".delivery-asap").hide();	
			$(".delivery_info").hide();			
			// $("#delivery_time").attr("placeholder",js_lang.trans_38);
			$(".delivery-fee-wrap").hide();	
			$(".delivery-min").hide();
			$(".pickup-min").show();
			$(".dinein-min").hide();
		} else if( delivery_type=="dinein")	{
			$(".pickup-min").hide();
			$(".delivery-min").hide();
			$(".dinein-min").show();
			// $("#delivery_time").attr("placeholder",js_lang.dinein_time);
			$(".delivery-asap").hide();	
			$(".delivery_info").hide();		
		} else {
			$(".delivery-asap").show();	
			$(".delivery_info").show();			
			// $("#delivery_time").attr("placeholder",js_lang.trans_39);
			$(".delivery-fee-wrap").show();	
			$(".delivery-min").show();
			$(".pickup-min").hide();
			$(".dinein-min").hide();
		}
    	load_item_cart();
    });	    
    
    if( jQuery('#photo').is(':visible') ) {    	
       createUploader('photo','photo');
    }     
    
    if ( $("#search-tabs").exists()){
    	$( "#search-tabs" ).show();
        $( "#search-tabs" ).tabs();
    }
        
    if ( $(".fancybox").exists() ){
       $(".fancybox").fancybox();
    }
    
    $('.payment_cod').on('ifChecked', function(event){   	   
       $(".change_wrap").slideToggle("fast");
   });
   
   $('.payment_cod').on('ifUnchecked', function(event){
       $(".change_wrap").slideToggle("fast");
   });
   
   if ( $(".is_holiday").exists()){
   	   //uk_msg( $(".is_holiday").val() );
   }  
    
   if ( $(".merchant-gallery-wrap").exists()){
   	    $('.merchant-gallery-wrap').magnificPopup({
          delegate: 'a',
          type: 'image',
          closeOnContentClick: false,
          closeBtnInside: false,
          mainClass: 'mfp-with-zoom mfp-img-mobile',
          image: {
            verticalFit: true,
            titleSrc: function(item) {
              return '';
            }
          },
          gallery: {
            enabled: true
          },
          zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
              return element.find('img');
            }
          }
          
        });
   }
   
   $('.payment_pyr').on('ifChecked', function(event){   	   
       $(".payment-provider-wrap").slideToggle("fast");
   });
   
   $('.payment_pyr').on('ifUnchecked', function(event){
       $(".payment-provider-wrap").slideToggle("fast");
   });
           
   //isImageLoaded('featured-restaurant-list');
    
    $( document ).on( "click", ".goto-category", function(ev) {
		var class_name= $(this).data("id");		
		dump(class_name);
		$(".goto-category").removeClass("active");
		$(this).addClass("active");
		scroll_class(class_name);
	});
   
}); /*END DOCU*/

function featuredListing()
{
	if ( $(".bxslider").exists() ){  
		$(".bxslider").show();
		$(".feature-merchant-loader").remove();
    	$('.bxslider').bxSlider({
          minSlides: 8,
		  maxSlides: 9,
		  slideWidth: 150,
		  slideMargin: 10,
		  pager:false,
		  onSliderLoad:function(currentIndex){		  	
		  }		  
    	});
    }
}
function featuredListingMobile()
{	
	if ( $(".bxslider2").exists() ){  		
    	$('.bxslider2').bxSlider({
          minSlides: 2,
		  maxSlides: 3,
		  slideWidth: 150,
		  slideMargin: 10,
		  pager:false,
		  onSliderLoad:function(currentIndex){		  	
		  }		  
    	});
    }
    if ( $(".bxslider3").exists() ){  		
    	$('.bxslider3').bxSlider({
          minSlides: 1,
		  maxSlides: 1,
		  slideWidth: 150,
		  slideMargin: 10,
		  pager:false,
		  onSliderLoad:function(currentIndex){		  	
		  }		  
    	});
    }
}

function isImageLoaded(classname)
{
	  $('.'+classname).imagesLoaded()
	  .always( function( instance ,image ) {
	     //console.log('all images loaded');
	     featuredListing();
	     featuredListingMobile();
	  })
	  .done( function( instance ) {
	     //console.log('all images successfully loaded');	     	     
	  })
	  .fail( function() {
	    //console.log('all images loaded, at least one is broken');	     
	  })
	  .progress( function( instance, image ) {	  	 	  	 
	     var result = image.isLoaded ? 'loaded' : 'broken';	     
	     var $item = $( image.img ).parent();	     
	     //dump($item);
	     $item.removeClass('isloading');	     
	     //console.log( 'image is ' + result + ' for ' + image.img.src );	     
    });	
}

function social_popup(url)
{	
	w=700;
    h=436;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
       	
	window.open(url, 'sharer','toolbar=0,status=0,width=700,height=436'+', top='+top+', left='+left);	  
}

/*$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 100,
    itemMargin: 5
  });
});*/

function getLatLongByAddress() {

	var area_name = document.getElementById('area_name') ? document.getElementById('area_name').value : false;
	//if($('#street').exists()){
		if (area_name) {
			var address = document.getElementById("street").value + " " + document.getElementById('area_name').value.toLowerCase() + ", " + document.getElementById('city').value + ", " + document.getElementById('state').value;
		} else {
			var address = document.getElementById("street").value;
		}
	//}
	console.log("Address:",address);
	// next line creates asynchronous request
	var geocoder = new google.maps.Geocoder();

    geocoder.geocode( { 'address': address}, function(results, status) {

		// and this is function which processes response
		if (status == google.maps.GeocoderStatus.OK) {

		var latitude	= $("#street_lat").val(results[0].geometry.location.lat());
		var longitude 	= $("#street_long").val(results[0].geometry.location.lng());
		
		console.log("latitude", results[0].geometry.location.lat());
		console.log("longitude", results[0].geometry.location.lng());
		
		} 
		// else if (status == "ZERO_RESULTS") {

		// 	var address = document.getElementById("location_name").value;
		// 	console.log("Nearest Land Mark",address);
		// 	// next line creates asynchronous request
		// 	var geocoder = new google.maps.Geocoder();

		// 	geocoder.geocode( { 'address': address}, function(results, status) {

		// 		// and this is function which processes response
		// 		if (status == google.maps.GeocoderStatus.OK) {
		
		// 		var latitude	= $("#street_lat").val(results[0].geometry.location.lat());
		// 		var longitude 	= $("#street_long").val(results[0].geometry.location.lng());
				
		// 		console.log("Nearest latitude", results[0].geometry.location.lat());
		// 		console.log("Nearest longitude", results[0].geometry.location.lng());
				
		// 		} else {
		// 			console.log("Not Found Nearest Land Mark");
		// 		}
		// 	});
			
		// } 
		else {
			console.log("Geocode was not successful for the following reason: " , status);
		}
	});

  }

  var placeSearch, autocomplete;

  function initialize() {
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('autocomplete')),
        { types: ['geocode'] });
  }

  function fillInAddress() {
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false;
    }
  }

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
      autocomplete.setBounds(new google.maps.LatLngBounds(geolocation,
          geolocation));
    });
  }
}

function display_direction()
{
	
	$(".direction_output").html('');
	$(".direction_output").css({"min-height":"300px","display":"block"});	
	 var directionsService = new google.maps.DirectionsService();
     var directionsDisplay = new google.maps.DirectionsRenderer();

     var map = new google.maps.Map(document.getElementById('merchant-map'), {
       zoom:7,
       mapTypeId: google.maps.MapTypeId.ROADMAP,
       scrollwheel: false
     });

     directionsDisplay.setMap(map);
     directionsDisplay.setPanel(document.getElementById('direction_output'));
     
     var destination_location= $("#merchant_map_latitude").val()+","+$("#merchant_map_longtitude").val();
     dump(destination_location);

     switch( $("#travel_mode").val() )
     {
     	case "DRIVING":
     	var request = {
	       origin: $("#origin").val(), 
	       destination: destination_location ,
	       travelMode: google.maps.DirectionsTravelMode.DRIVING
	     };
     	break;
     	
     	case "WALKING":
     	var request = {
	       origin: $("#origin").val(), 
	       destination:destination_location ,
	       travelMode: google.maps.DirectionsTravelMode.WALKING
         };
     	break;
     	
     	case "BICYCLING":
     	var request = {
	       origin: $("#origin").val(), 
	       destination: destination_location ,
	       travelMode: google.maps.DirectionsTravelMode.BICYCLING
	     };	     
     	break;
     	
     	case "TRANSIT":
     	var request = {
	       origin: $("#origin").val(), 
	       destination: destination_location ,
	       travelMode: google.maps.DirectionsTravelMode.TRANSIT
	     };
     	break;
     }          
     
     directionsService.route(request, function(response, status) {       
       if (status == google.maps.DirectionsStatus.OK) {
         directionsDisplay.setDirections(response);
       } else {
       	  uk_msg(js_lang.trans_26+" "+status)
       	  $(".direction_output").css({"display":"none"});	
       }
     });
}

function geocode_address(address)
{
 
	var geocoder;
    var map;
    geocoder = new google.maps.Geocoder(); 
    var mapOptions = {
	   scrollwheel: false,	
	   zoom: 18,
	   //center: latlng,
	   mapTypeId: google.maps.MapTypeId.ROADMAP
	 }
	 map = new google.maps.Map(document.getElementById('maps_side'), mapOptions);
	 
	 geocoder.geocode( { 'address': address}, function(results, status) {	 	   	 
	 	  //console.debug(results[0].geometry.location.k);
	 	  //console.debug(results[0].geometry.location.B);
	 	  if (status == google.maps.GeocoderStatus.OK) {
		      map.setCenter(results[0].geometry.location);
		      
		      if ( $("#map_marker").exists() ){
		      	var image=upload_url+"/"+$("#map_marker").val();    
		      	 var marker = new google.maps.Marker({    	
				     map: map,
				     position: results[0].geometry.location,
				     icon: image    
				  });
		      } else {
				  var marker = new google.maps.Marker({    	
				     map: map,
				     position: results[0].geometry.location
				  });
		      }
	 	  } else {
	 	  	 uk_msg(status);
	 	  }
	 });
}

function geocode_address2(locations)
{	
     window.map = new google.maps.Map(document.getElementById('maps_side'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false       
    });
        
    var infowindow = new google.maps.InfoWindow();

    var bounds = new google.maps.LatLngBounds();

    for (i = 0; i < locations.length; i++) {
    	
    	if ( $("#map_marker").exists() ){
	      	var image=upload_url+"/"+$("#map_marker").val();    
	      	marker = new google.maps.Marker({
	            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	            map: map ,
	            icon: image         
	        });
	      } else {
	        marker = new google.maps.Marker({
	            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	            map: map            
	        });
		 }

        bounds.extend(marker.position);

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    map.fitBounds(bounds);

    var listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(18);
        google.maps.event.removeListener(listener);
    });
}

function dump(data)
{
	console.debug(data);
}

function photo(data)
{
	var img='';	
	$(".preview").show();
	img+="<img src=\""+upload_url+"/"+data.details.file+"\" alt=\"\" title=\"\" class=\"uk-thumbnail uk-thumbnail-mini\" >";
	img+="<input type=\"hidden\" name=\"photo\" value=\""+data.details.file+"\" >";
	img+="<p><a href=\"javascript:rm_preview();\">"+js_lang.removeFeatureImage+"</a></p>";
	$(".image_preview").html(img);

	$("#branch_code").removeAttr("data-validation");
	$("#date_of_deposit").removeAttr("data-validation");
	$("#time_of_deposit").removeAttr("data-validation");
	$("#amount").removeAttr("data-validation");
}

function rm_preview()
{
	$(".image_preview").html('');
	
	$("#branch_code").attr("data-validation",'required');
	$("#date_of_deposit").attr("data-validation",'required');
	$("#time_of_deposit").attr("data-validation",'required');
	$("#amount").attr("data-validation",'required');
}

function plotMerchantLocation(json)
{		
	if ( $(".search-map-wrap").exists() ){
		var s=[];
		var x=0;
		var y=1;		
	    $.each(json.aaData, function( index, val ) {        
	        s[x]=[ucwords(val[7]),parseFloat(val[5]),parseFloat(val[6]),y,val[8],val[9],val[10] ]
	        x++;
	        y++;
	    });        	    	    
	    $(".search-map-wrap").show();	    
	    initializeMarkerNew(s,'search-map-wrap');
	}
}

function ucwords(str) {  
  return (str + '')
    .replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1) {
      return $1.toUpperCase();
  });
}

// $.validate({ 	
// 	language : jsLanguageValidator,
//     form : '#frm-subscribe',    
//     onError : function() {      
//     },
//     onSuccess : function() {           
//       form_submit('frm-subscribe');
//       return true;
//     }  
// });

jQuery(document).ready(function() {	
	
	if ( $("#hide_foodprice").exists() ){		
		if ( $("#hide_foodprice").val()=="yes"){
			$(".food-price-wrap").hide();			
			$(".hide-food-price").hide();				
			//$(".right-menu-content").hide();
			//$("#menu-wrap .grid-1").css({"width":"100%"});
		}
	}	
			
	$( document ).on( "click", ".close-receipt", function() {
		close_fb();
	});
			
	if ( $(".mobile_inputs").exists()){
		if ( $("#mobile_country_code").exists()){
			$(".mobile_inputs").intlTelInput({      
		        autoPlaceholder: false,
		        defaultCountry: $("#mobile_country_code").val(),    
		        autoHideDialCode:true,    
		        nationalMode:false,
		        autoFormat:false,
		        utilsScript: sites_url+"/assets/vendor/intel/lib/libphonenumber/build/utils.js",
		        onlyCountries:["pk"]
		     });
		} else {
			 $(".mobile_inputs").intlTelInput({      
		        autoPlaceholder: false,		        
		        autoHideDialCode:true,    
		        nationalMode:false,
		        autoFormat:false,
		        utilsScript: sites_url+"/assets/vendor/intel/lib/libphonenumber/build/utils.js",
		        onlyCountries:["pk"]
		     });
		}
	}
	

	$( document ).on( "click", ".ui-timepicker a", function() {		
		if ( $("#frm-book").exists()){
			$("#booking_time").removeAttr("style");
			var parent=$("#booking_time").parent();		
			parent.find(".form-error").remove();
		}
	});
	
	if ( $("#delivery_type").exists()){
		var delivery_type=$("#delivery_type").val();						
		if ( delivery_type=="pickup"){
			$(".delivery-asap").hide();			
			// $("#delivery_time").attr("placeholder",js_lang.trans_38);
			$(".delivery-fee-wrap").hide();	
			$(".delivery-min").hide();	
			$(".pickup-min").show();	
			$(".dinein-min").hide();
		} else if ( delivery_type=="dinein" ) {
			$(".delivery-asap").hide();			
			$("#delivery_time").attr("placeholder",js_lang.dinein_time);
			$(".delivery-min").hide();	
			$(".pickup-min").hide();	
			$(".dinein-min").show();
		} else {
			$(".delivery-asap").show();			
			// $("#delivery_time").attr("placeholder",js_lang.trans_39);
			$(".delivery-fee-wrap").show();	
			$(".delivery-min").show();	
			$(".pickup-min").hide();	
			$(".dinein-min").hide();
		}
    	//load_item_cart();
	}
	
	/*if ( $("#merchant_close_store").exists() ){				
		if  (  $("#merchant_close_store").val()=="yes"){
		   var close_msg=$("#merchant_close_msg").val();
		   uk_msg(close_msg);
		   $(".order-list-wrap").after('<p class="uk-alert uk-alert-warning">'+close_msg+'</p>');
		   $(".book-table-button").attr("disabled",true);
		   $(".checkout").hide();
		}
	}*/
	
}); /*END doc*/

function plotMerchantLocationNew(s)
{	
	if ( $(".search-map-wrap").exists() ){				
		if ( s.length >=1){
			$(".search-map-wrap").show();		
	        initializeMarkerNew(s,'search-map-wrap');
		}
	}
}

function single_food_item_add(item_id,price,size,category_id,r_related_item,item_available)
{
	if(item_available == 2){
		uk_msg('Item not available');
		return false;
	}

	var params='';
	params="merchant_id="+$("#merchant_id").val();
	params+="&item_id="+item_id	
	if ( size==""){
		params+="&price="+price;
	} else {
	    params+="&price="+price+"|"+size;
	}
	params+="&qty=1";		
	params+="&discount=";
	params+="&notes=";
	params+="&row=";	
	params+="&category_id="+category_id;
	if(r_related_item){
		params+="&related_item="+r_related_item;
	}
		
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: "action=addToCart&currentController=store&"+params,
    dataType: 'json',       
    success: function(data){ 
    	busy(false);      		
    	if (data.code==1) {    	   
    		uk_msg_sucess(data.msg);
    		close_fb();
    		load_item_cart();
    	} else {
    		uk_msg(data.msg);
    	}	    
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });   	     	  
}


jQuery(document).ready(function() {	
	$( document ).on( "click", ".tips", function() {		
		
		$("#tip_value").val('');
		
		var type=$(this).data("type");
		
		$(".tips").removeClass("active");
		$(this).addClass("active");
			
		if ( type=="tip"){		
		    var tip=$(this).data("tip");			
		    		    						
			var tip_percentage = tip*100;
			$(".tip_percentage").html(tip_percentage+"%");
			
			var cart_subtotal=$("#subtotal_order2").val()
			var tip_raw = tip*cart_subtotal;
			
			dump("tip=>"+tip);		
			dump("tip value=>"+tip_raw.toFixed(2));		
			
			$(".apply_tip").click();			
			
			//$("#cart_tip_value").val( tip_raw.toFixed(2) );
			//$("#cart_tip_percentage").val( tip );			
			//display_tip(tip_percentage,tip_raw.toFixed(2));
		} else {
			
			$("#cart_tip_value").val( 0 );
			$("#cart_tip_percentage").val( 0 );
			$("#cart_tip_cash_percentage").val( 0 );
			
			//$(".tip_percentage").html(0+"%");			
			$(".tip_percentage").html(0+"%");
			/*display_tip(0,0);			
			$(".added_tip_wrap").remove();*/
			$(".apply_tip").click();			
		}
	});
			
	$( "#tip_value" ).keyup(function() {
		 var tip_raw=parseFloat($(this).val());		 
		 if (isNaN(tip_raw)){
		 	tip_raw=0;
		 }
		 dump(tip_raw);
		 $(".tips").removeClass("active");
		 
		 var cart_subtotal=parseFloat($("#subtotal_order2").val());
		 dump(cart_subtotal);
		 
		 var reverse_percentage= (tip_raw/cart_subtotal)*100;
		 dump(reverse_percentage);
		 $(".tip_percentage").html(reverse_percentage.toFixed()+"%");
		 		 
		 dump("reverse tip =>"+reverse_percentage.toFixed());
		 $("#cart_tip_cash_percentage").val( reverse_percentage.toFixed()/100 );		 
		 
		 $(".tip_cash").addClass("active");
		 $(".apply_tip").click();
		 //display_tip(reverse_percentage.toFixed(),tip_raw.toFixed(2));
	});
	
	
	if ( $("#default_tip").exists() ){
		var default_tip=$("#default_tip").val();		
		$( ".tips" ).each(function( index ) {
			var tip=$(this).data("tip");
			dump(tip);
			if ( default_tip == tip){				
				
				$(".tips").removeClass("active");
		        $(this).addClass("active");
				
		        $("#cart_tip_percentage").val(tip);
		        
				var tip_percentage = tip*100;
				$(".tip_percentage").html(tip_percentage+"%");
								
				/*setTimeout(function() { 
					var cart_subtotal=$("#subtotal_order2").val();
					var tip_raw = tip*cart_subtotal;
					dump("->"+tip_raw.toFixed(2));							
					display_tip(tip_percentage,tip_raw.toFixed(2));				
				},2100);*/
				
				return false;
			}
		});
	}
		
}); /*end docu*/

function display_tip(tip_percentage,amount)
{
	$("#cart_tip_percentage").val(tip_percentage);
	$("#cart_tip_value").val(amount);
	
	var admin_currency_set=$("#admin_currency_set").val();
	
	var sub_total= $("#subtotal_order2").val();
	var subtotal_extra_charge= parseFloat($("#subtotal_extra_charge").val()) + 0;	
	
	if (isNaN(subtotal_extra_charge)){
		subtotal_extra_charge=0;
	}
	if (isNaN(amount)){
		amount=0;
	}
	if (isNaN(subtotal_extra_charge)){
		subtotal_extra_charge=0;
	}	
	
	dump(sub_total);
	dump(amount);
	dump(subtotal_extra_charge);
	
	var cart_total= parseFloat(sub_total) + parseFloat(amount) + parseFloat(subtotal_extra_charge);
	dump(cart_total);
	cart_total=cart_total.toFixed(2);
	
	var cart_total_display='';
	var amount_display='';
	
	if ( $("#admin_currency_position").val()=="right" ){
		cart_total_display=cart_total+" "+admin_currency_set;
		amount_display = amount+" "+admin_currency_set;
	} else {
		cart_total_display=admin_currency_set+" "+cart_total
		amount_display = admin_currency_set+" "+amount;
	}
		
	
	var html='';
	/*html+='<div class="added_tip_wrap">';
	html+='<div class="a">'+js_lang.trans_45+' ('+tip_percentage+'%)</div>';
	html+='<div class="manage">';
	  html+='<div class="b">'+amount_display+'</div>';
	html+='</div>';
	html+='<div>';*/
	
    html+='<div class="row added_tip_wrap">';
	    html+='<div class="col-md-6 col-xs-6 text-right">';
	    html+= js_lang.trans_45+" ("+tip_percentage+"%)";
	    html+='</div>';
	    html+='<div class="col-md-6 col-xs-6 text-right">';
	    html+= amount_display;
	    html+='</div>';
    html+='</div>';
	
	$(".added_tip_wrap").remove();
	$(".cart_total_wrap").before(html);
		
	$(".cart_total").html(cart_total_display);
}

// $.validate({ 	
// 	language : jsLanguageValidator,
//     form : '#forms-normal',    
//     onError : function() {      
//     },
//     onSuccess : function() {     
//       return true;
//     }  
// });

/***  SIGNUP AND LOGING PAGE*/
// $.validate({ 	
// 	language : jsLanguageValidator,
//     form : '#frm-modal-forgotpass',    
//     onError : function() {      
//     },
//     onSuccess : function() {           
//       form_submit('frm-modal-forgotpass');
//       return false;
//     }  
// });

jQuery(document).ready(function() {	
	$( document ).on( "click", ".resend-code", function() {		
		busy(true);
	    $.ajax({    
	    type: "POST",
	    url: ajax_url,
	    data: "action=resendMobileCode&currentController=store&tbl=resendMobileCode&id="+$("#client_id").val(),
	    dataType: 'json',       
	    success: function(data){ 
	    	busy(false);      		
	    	if (data.code==1) {	    	   
	    		uk_msg_sucess(data.msg);
	    	} else {
	    		uk_msg(data.msg);
	    	}	    
	    }, 
	    error: function(){	        	    	
	    	busy(false); 
	    }		
	    });   	     	  		
	});	
}); /*end docu*/


/** START VERSION 2.1.1 added code*/
jQuery(document).ready(function() {	
	
	if ( $(".full_map_page").exists()){
		getAllMerchantCoordinates();		
		if ( $("#google_default_country").val()=="yes" ){		
		    $("#geo_address").geocomplete({
		    	country: $("#admin_country_set").val(),
		    	details:'form'
		    });  	   
		} else {			
			$("#geo_address").geocomplete({		    	
		    	details:'form'
		    });  	   
		}
	}	
	
	$( document ).on( "click", ".reset-geo", function() {		
		getAllMerchantCoordinates();	
	});
	
	// $.validate({ 	
	// language : jsLanguageValidator,
	//     form : '#form_map',    
	//     onError : function() {      
	//     },
	//     onSuccess : function() {     
	//       searchGeoByAddress();
	//       return false;
	//     }  
	// });
	
		
    if ( $(".new-merchant-header").exists() ){
    	var merchant_header=upload_url+"/"+$("#merchant_header_new").val();    
    	$('.new-merchant-header').css('background-image', 'url(' + merchant_header + ')');
    }	
	
});/* end docu*/

function getAllMerchantCoordinates()
{
	var map_zoom=parseInt($("#view_map_default_zoom").val());	
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: "action=getAllMerchantCoordinates&currentController=store&tbl=getAllMerchantCoordinates",
    dataType: 'json',       
    success: function(data){ 
    	busy(false);      
    	if (data.code==1){     		  
    		focus_lat=data.msg.lat;		
    		focus_lng=data.msg.lng;
    		initializeMarkerNew(data.details,'map_area',map_zoom);
    	} else {
    		uk_msg(data.msg);
    	}
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });   	     	
}

var focus_lat='';
var focus_lng='';

function searchGeoByAddress()
{
	var params_geo="action=findGeo&currentController=store&tbl=findGeo&geo_address="+$("#geo_address").val();
    params_geo+="&lat="+$("#lat").val();
    params_geo+="&lng="+$("#lng").val();	
	
    busy(true);
    
    var map_zoom=parseInt($("#view_map_default_zoom_s").val());	    
    
	$.ajax({    
    type: "POST",
    url: ajax_url,
    data: params_geo,
    dataType: 'json',       
    success: function(data){ 
    	busy(false);      
    	if (data.code==1){        		
    		focus_lat=data.msg.lat;
    		focus_lng=data.msg.lng;    		
    		initializeMarkerNew(data.details,'map_area',map_zoom); 
    	} else {
    		uk_msg(data.msg);
    	}
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });   	     	
}


/*SCROLLING DIV STARTS HERE*/
jQuery(document).ready(function($){
	
	if ( $(".separate-category-menu").exists()){				
		var h=$(".col-category").height();		
		$(".scroll-parent").css({"min-height":h+"px"});
	}	
	
	if ( $(".scroll-parent2").exists()){				
		var h=$(".right-menu-content").height();		
		$(".scroll-parent2").css({"min-height":h+"px"});
	}		
	
	if ( $("#disabled_cart_sticky").val()==""){
	if ( $(".scroll-parent").exists()){						
		
		var $window = $(window);
		var $container = $(".scroll-child");
		var $main = $(".scroll-parent");
		var window_min = 0;
		var window_max = 0;
		var threshold_offset = 50;
	
	
	function set_limits(){
		//max and min container movements
		var max_move = $main.offset().top + $main.height() - $container.height() - 2*parseInt($container.css("top") );
		var min_move = $main.offset().top;
		//save them
		$container.attr("data-min", min_move).attr("data-max",max_move);
		//window thresholds so the movement isn't called when its not needed!
		//you may wish to adjust the freshhold offset
		window_min = min_move - threshold_offset;
		window_max = max_move + $container.height() + threshold_offset;
	}
	
	//sets the limits for the first load
	set_limits();
	
	function window_scroll(){
		//if the window is within the threshold, begin movements
		if( $window.scrollTop() >= window_min && $window.scrollTop() < window_max ){
			//reset the limits (optional)
			set_limits();
			//move the container
			container_move();
		}
	}
	
	$window.bind("scroll", window_scroll);
	
	function container_move(){
		var wst = $window.scrollTop();
		//if the window scroll is within the min and max (the container will be "sticky";
		if( wst >= $container.attr("data-min") && wst <= $container.attr("data-max") ){
			//work out the margin offset
			var margin_top = $window.scrollTop() - $container.attr("data-min");
			//margin it down!
			$container.css("margin-top", margin_top);
			$container.addClass("scroll-active");
		//if the window scroll is below the minimum 
		}else if( wst <= $container.attr("data-min") ){
			//fix the container to the top.
			$container.css("margin-top",0);
			$container.removeClass("scroll-active");
		//if the window scroll is above the maximum 
		}else if( wst > $container.attr("data-max") ){
			//fix the container to the top
			$container.css("margin-top", $container.attr("data-max")-$container.attr("data-min")+"px" );
			$container.addClass("scroll-active");
		}
	}
	//do one container move on load
	container_move();	
	}
	}

	/** START CART*/	
	if ( $("#disabled_cart_sticky").val()==""){
	if ( $(".scroll-parent2").exists()){				
						
		var $window2 = $(window);
		var $container2 = $(".scroll-child2");
		var $main2 = $(".scroll-parent2");
		var window_min2 = 0;
		var window_max2 = 0;
		var threshold_offset2 = 50;
		
	function set_limits2(){
		//max and min container movements
		var max_move = $main2.offset().top + $main2.height() - $container2.height() - 2*parseInt($container2.css("top") );
		var min_move = $main2.offset().top;
		//save them
		$container2.attr("data-min", min_move).attr("data-max",max_move);
		//window thresholds so the movement isn't called when its not needed!
		//you may wish to adjust the freshhold offset
		window_min2 = min_move - threshold_offset2;
		window_max2 = max_move + $container2.height() + threshold_offset2;
	}
	
	//sets the limits for the first load
	set_limits2();
	
	function window_scroll2(){
		//if the window is within the threshold, begin movements
		if( $window2.scrollTop() >= window_min2 && $window2.scrollTop() < window_max2 ){
			//reset the limits (optional)
			set_limits2();
			//move the container
			container_move2();
		}
	}
	
	$window2.bind("scroll", window_scroll2);
	
	function container_move2(){
		var wst = $window2.scrollTop();
		//if the window scroll is within the min and max (the container will be "sticky";
		if( wst >= $container2.attr("data-min") && wst <= $container2.attr("data-max") ){
			//work out the margin offset
			var margin_top = $window2.scrollTop() - $container2.attr("data-min");
			//margin it down!
			$container2.css("margin-top", margin_top);
			$container2.addClass("scroll-active");
		//if the window scroll is below the minimum 
		}else if( wst <= $container2.attr("data-min") ){
			//fix the container to the top.
			$container2.css("margin-top",0);
			$container2.removeClass("scroll-active");
		//if the window scroll is above the maximum 
		}else if( wst > $container2.attr("data-max") ){
			//fix the container to the top
			$container2.css("margin-top", $container2.attr("data-max")-$container2.attr("data-min")+"px" );
			$container2.addClass("scroll-active");
		}
	}
	//do one container move on load
	container_move2();	
	}	
	}
	/** END CART*/
	
	
	$( document ).on( "click", ".back-top-menu", function() {
		scroll_class('opening-hours-wrap');
	});
	
	if ( $("#address_book_id").exists() ){		
		$(".address-block").hide();
		$(".saved_address_block").hide();
				
		$("#street").removeAttr("data-validation");
  	    $("#city").removeAttr("data-validation");
  	    $("#state").removeAttr("data-validation");
	}
		
	$( document ).on( "click", ".edit_address_book", function() {
		$(".address_book_wrap").remove();
		$(".address-block").show();
		$(".saved_address_block").show();
				
		$("#street").attr("data-validation",'required');
  	    $("#city").attr("data-validation",'required');
  	    $("#state").attr("data-validation",'required');
	});
	
	$( document ).on( "click", ".map-address", function() {
		$(this).parent().hide();
		
		$("#street").removeAttr("data-validation");
  	    $("#city").removeAttr("data-validation");
  	    $("#state").removeAttr("data-validation");
   	    
		$(".address_book_wrap").hide();
		$(".address-block").hide();
		$("#map_address_toogle").val(2);
		$(".map-address-wrap-inner").show();
		
		$(".back-map-address").show();
		
		uk_msg_sucess(js_lang.trans_48);
		
		mapAddress();    
	});

	$( document ).on( "click", ".map-select-location", function() {
		// MAP_DOM
		var address = $(this).data('formatted');
		var coords = $(this).data('coords');

		$('#street').val(address);
		
		// console.log(address, coords)
	});
			
	$( document ).on( "click", ".paypal_paynow", function() {
		$(this).val(js_lang.processing);
		$(".paypal_paynow").css({ 'pointer-events' : 'none' });
	});
	
	/** set default if payment option is only */
	if ( $(".payment-option-page").exists() ){
		var c=$(".payment_option").length;
		if ( c==1){			
			$(".payment_option").attr("checked",true);
			$('.payment_option').iCheck('update');
						
			if ( $(".payment_option:checked").val()=="cod" ){
				$(".change_wrap").show();
			}		
			if ( $(".payment_option:checked").val()=="ccr" || $(".payment_option:checked").val()=="ocr" ){
				$(".credit_card_wrap").show();
			}	
		}
	}
	
}); /*end docu*/
/*SCROLLING DIV ENDS HERE*/


function mapAddress()
{		
	var defaultLatLng = new google.maps.LatLng(24.858982055991248, 67.0001493470825);
	$("#temporary_address").geocomplete({
		location: defaultLatLng,
		map: ".map_address",
		mapOptions: {
			zoom: 14
		},
		markerOptions: {
			draggable: true,
		}      
	});
	// $('.map-button-address').hide();
	$('.map-select-location').hide();

	$("#map_address_lat").val( defaultLatLng.lat() );
	$("#map_address_lng").val( defaultLatLng.lng() );

	$("#temporary_address").bind("geocode:dragged", function(event, latLng){  
		$("#map_address_lat").val( latLng.lat() );
		$("#map_address_lng").val( latLng.lng() );

		var temp_geocoder = new google.maps.Geocoder();
		temp_geocoder.geocode({'latLng': latLng}, function(results, status) {						
			if (status == google.maps.GeocoderStatus.OK) {
				let result = results[0];
				let coords = [result.geometry.location.lat(), result.geometry.location.lng()]
				$('.map-select-location').data('formatted', result.formatted_address);
				$('.map-select-location').data('coords', coords)
				$('.map-select-location').fadeIn('fast');

				$('.map-button-address').text(result.formatted_address)
				// $('.map-button-address').fadeIn('500');

				let current_street = $('#street').val();
				if(current_street.length == 0) {
					// $('#street').val(result.formatted_address);
				}
			} else {
				uk_msg(js_lang.trans_28 + " " + status);
			}
		});

	})
	.bind('geocode:result', function(event, result) {
		let formatted = result.formatted_address;
		let coords = [result.geometry.location.lat(), result.geometry.location.lng()]
		

		$('.map-select-location').data('formatted', result.formatted_address);
		$('.map-select-location').data('coords', coords)

		console.log(formatted)
	});
}

/** END VERSION 2.1.1 added code*/


/** START ADDED CODE VERSION 2.3*/
jQuery(document).ready(function() {	
	$( document ).on( "click", ".filter-search-bar", function() {
		$(".filter-options").slideToggle("fast");
	});
	
    $( document ).on( "click", ".forgot-pass-link2", function() {    	    
    	  $(".section-forgotpass").fadeIn();    	  
    });
        	
}); /*end docu*/	
/** END CODE VERSION 2.3*/


/** START ADDED CODE VERSION 2.4*/
jQuery(document).ready(function() {	
	$( document ).on( "click", ".clear-cart", function() {
		clearCart();
	});
	
	if ( $("#disabled_cart_sticky").exists() ){
		if ( $("#disabled_cart_sticky").val()==2){
		    $(".scroll-parent2 .order-list-wrap").removeClass("scroll-child2");
		}
	}
}); /*end docu*/	

function clearCart()
{	
	var ans=confirm(js_lang.trans_4); 
	if (!ans){
		return;
	}
	var params="action=clearCart&currentController=store";	
	busy(true);
    $.ajax({    
    type: "POST",
    url: ajax_url,
    data: params,
    dataType: 'json',       
    success: function(data){ 
    	busy(false);
    	load_item_cart();    	
    }, 
    error: function(){	        	    	
    	busy(false); 
    }		
    });
}

function clearCartButton(option)
{	
	if ( option==1){
		$(".clear-cart").show();
		$(".cart-fix-btm").show();
		//$(".c-btn-price").show();
		//$(".cart_count").show();
	} else {
		$(".clear-cart").hide();
		$(".cart-fix-btm").hide();
		//$(".c-btn-price").hide();
		//$(".cart_count").hide();
	}
}

var recaptcha1; // for customer signup
var recaptcha2; // for customer login

var KMRSCaptchaCallback = function(){
	dump('init recaptcha');
	if ( !$(".recaptcha").exists()){
		return;
	}
	if (typeof captcha_site_key === "undefined" || captcha_site_key==null || captcha_site_key=="") {   
		return;
	}			
	if ( $("#RecaptchaField1").exists() ){
		dump('RecaptchaField1');
        recaptcha1=grecaptcha.render('RecaptchaField1', {'sitekey' : captcha_site_key});    
	}
	if ( $("#RecaptchaField2").exists() ){
        recaptcha2=grecaptcha.render('RecaptchaField2', {'sitekey' : captcha_site_key});    
	}
};
/** START ADDED CODE VERSION 2.4*/


/** START ADDED CODE VERSION 2.5*/
jQuery(document).ready(function() {	
	$( document ).on( "click", ".view-order-history", function() {		
		var parent=$(this).parent().parent();
		var i=parent.find("i");		
		$(".show-history-"+ $(this).data("id") ).slideToggle("fast",function() {     
			if (i.hasClass("ion-android-arrow-dropright")){
			i.removeClass("ion-android-arrow-dropright");
				i.addClass("ion-android-arrow-dropdown");
			} else{
				i.addClass("ion-android-arrow-dropright");
				i.removeClass("ion-android-arrow-dropdown");
			} 
        });		
	});

    $( document ).on( "click", ".send-order-sms-code", function() {    	
    	    	
    	var sosc=$(this);
    	sosc.css({ 'pointer-events' : 'none' });
		var params="action=sendOrderSMSCode&currentController=store&session="+sosc.data("session")+"&mobile="+$("#contact_phone").val()+"&mtid="+$("#merchant_id").val();	
		busy(true);
	    $.ajax({    
	    type: "POST",
	    url: ajax_url,
	    data: params,
	    dataType: 'json',       
	    success: function(data){ 
	    	busy(false);	    	
	    	sosc.css({ 'pointer-events' : 'auto' });
	    	if (data.code==1){
	    		uk_msg_sucess(data.msg);
	    	} else {
	    		uk_msg(data.msg);
	    	}
	    }, 
	    error: function(){	        	    	
	    	busy(false); 
	    	sosc.css({ 'pointer-events' : 'auto' });
	    }		
	    });
	});
}); /*end ready*/

/** END ADDED CODE VERSION 2.5*/


/** START ADDED CODE VERSION 2.6*/
jQuery(document).ready(function() {		
	$( document ).on( "change", ".s_city", function() {    	
		var selected=$(this).val();				
		if ( selected!="-1"){
			$(".s_area").val("-1");
			$(".areas").addClass("area-hidden");
			$("."+selected).removeClass("area-hidden");
		} else {
			$(".areas").addClass("area-hidden");
		}
	});	
	
    d = new Date();
    d = new Date(d.getTime() + 30*60000);
	
    $('.timepicker_2').timepicker({ 'timeFormat': 'h:i A' });
    $('.timepicker_2').timepicker('setTime', d);
    
                  $('#delivery_time').on("change", function() {
	                  console.log("THis is the new Value" , $(this).val());
	                  
                        $('#delivery_d_time').html($(this).val());
	              });
	              $('#delivery_date').on("change", function() {
	                  console.log("THis is the new date Value" , $(this).val());
	                  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                      var d = new Date($(this).val());
                      var dayName = days[d.getDay()];
                      $('#delivery_d_day').html($("#delivery_date option:selected" ).text());
	              });
	              
	               console.log("THis is the new date Value" , $(this).val());
	                  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                      var d = new Date($('#delivery_date').val());
                      var dayName = days[d.getDay()];
                      $('#delivery_d_day').html(dayName);
                      
                    $('#delivery_d_time').html($('#delivery_time').val());
	
		
}); /*end ready*/
/** END ADDED CODE VERSION 2.6*/

function empty(data)
{
	if (typeof data === "undefined" || data==null || data=="" ) { 
		return true;
	}
	return false;
}




function toggleCategories(listcat){
	//console.log(listcat);
	if(typeof listcat != undefined && Array.isArray(listcat)){
		window.allCatVisible = false;
		listcat.forEach(function(v){
			//alert(v);
			var category_box_visibility = false; 
			$('.'+v).find('.item-box-branch').each(function(i,k){
				if($(this).css('display') == 'block'){
					category_box_visibility = true;
				}
			});
			// $('.'+v+'.menu-layout-slider').find('.item-box-branch').each(function(i,k){
			// 	if($(this).attr('style') == 'block'){
			// 		category_box_visibility = true;
			// 	}
			// 	console.log($(this).attr('style'));
			// });
			if(category_box_visibility){
				allCatVisible = true;
				$('.'+v).attr('style','display:block !important');
				$('.'+v+'-title').show();
				$('.'+v+'-banner').show();
			}else{
				$('#not-found-error').show();
				$('.'+v).attr('style','display:none !important');
				$('.'+v).removeClass('active');
				$('.'+v+'-title').hide();
				$('.'+v+'-banner').hide();
			}
			if(allCatVisible){
				$('#not-found-error').hide();
			}else{
				$('#not-found-error').show();
			}
		});
		window.listcat = listcat;
		// $.each(listcat,function(val){
		//     console.log(val);
		// });
	}
}

function addToCartRelatedItem(e){
		var r_item_id = $(e).find('input[name=r_item_id]').val();
		var r_item_category = $(e).find('input[name=r_item_category]').val();
		var r_item_price = $(e).find('input[name=r_item_price]').val();
		var r_item_available = $(e).find('input[name=r_item_available]').val();
		var r_related_item = $(e).data("related-item");
		console.log(r_related_item);
		single_food_item_add(		
			r_item_id, 
			r_item_price, 
			'',  r_item_category,
			r_related_item ? r_related_item : 0,
			r_item_available
		);
}
function radio(val,name){
	
	var price = (val.price)?val.price:0;
	
	var html = "<div class='col-md-12 no-padding'>";
		html += "<div class='row bor-btm'>";
		html += "<div class='col-xs-6 no-padding'";
		if(val.hidden){
			html += " style='display:none;' ";
		}
		html += ">";
		html += "<label class='radio-label12 w-100'>";
		html += "<input value='"+price+"'";
		if(val.selected){
			html += "checked ";
		}
		html += "class='price_cls item_price' onclick='toggleItemAddonsBySize("+val.size_id+")' type='radio' name='price' id='price'> "+name+"";
		html += "</label>";
		html += "</div>";
		html += "<div class='col-xs-6 no-padding text-right multi-price'>";
		if(val.before_discount_html){
			html += "<span class='line-tru'>"+val.before_discount_html+"</span>";
		}
		if(val.price_html){
			html += "<span class='line-tru2'>"+val.price_html+"</span>";
		}
		html += "</div>";
		html += "</div>";
		html += "</div>";
	return html;
}

function addonInfo(val,cb){

var html = "<div id='"+val.wrapper_id+"' data-id='"+val.hidden.data_id+"' class='addon_common'>";
	html += "<input class='"+val.hidden.class+"' data-id='"+val.hidden.data_id+"' data-name='"+val.hidden.data_name+"' type='hidden' value='"+val.hidden.value+"' name='"+val.hidden.name+"' id='"+val.hidden.name+"'>";
	html += "<div class='section-label mt-30'>";
	html += "<a class='section-label-a'>";
	html += "<span class='bold'>";
	html += val.sub_cat_name;
	html += "</span>";
	if(val.require_addons >= 2){
		html += "<span class='badge-warning'>";
		html += "required";
		html += "</span>";

	}
	html += "</a>";
	html += cb;
	html += "</div>";
	html += "</div>";
	return html;
}

function radioAddon(addon, isRequire){
	var html = "";
	$.each(addon, function(i,val){
		var defaultChecked = isRequire == 2 && addon.length == 1 ? 'checked=checked' : '';
		html += "<div class='row top10x row-10x row-style py-5'>";
		html += "<div class='border into-row no-padding col-70'>";
		html += "<label class='radio-label12'><input value='"+val.value+"' class='"+val.class+"' data-type='"+val.data_type+"' type='radio' name='"+val.name+"' id='sub_item_106' "+defaultChecked+">&nbsp;"+val.title+"</label>";

		if(val.photo){
			html += "<div class='col-addon-image'><span class='addon-wrapper'>";
			html += "<img src='"+val.photo+"'>";
			html += "</span></div>";
		}

		if(val.description){
			html += "<p class='disc'>"+val.description+"</p>";
		}

		html += "</div>";
		html += "<div class='actions'>";
		html += "<div class='border into-row w-93-px'>";
		html += "</div>";
		html += "<div class='border text-right into-row col-price'>";
		html += "<span class='hide-food-price'>";
		html += val.price;
		html += "</span>";
		html += "</div>";
		html += "</div>";
		html += "</div>";
	});
	return html;
}

function dropDownAddon(addon, isRequire){
	var html = "";
	html += "<div class='row'>";
	html += "<div class='col-xs-8 p-0'>";
	html += "<select class='custom-fields dropdowAddon' name='"+addon[0].name+"' id='"+addon[0].name+"' data-id='"+addon[0].data_id+"' onchange='getAddonData(this)'>";
	html += "<option disabled selected>Select an item</option>";
	
	$.each(addon, function(i,val){
		var addonPrice = (val.price != '-')?'('+val.price+')':'';
		var defaultChecked = isRequire == 2 && addon.length == 1 ? 'selected=selected' : '';
		html += "<option value='"+val.value+"' class='"+val.class+"' data-description='"+val.description+"' data-img='"+val.photo+"' data-price='"+addonPrice+"' data-type='"+val.data_type+"' type='radio' "+defaultChecked+">"+val.title+' '+addonPrice+"</option>";
	});

	html += "</select>";
	html += "</div>";
	
	html += "<div class='col-xs-4 p-0 text-right'>";
	html += "<span class='hide-food-price' id='dumpPrice"+addon[0].data_id+"'></span>";
	html += "</div>";
	
	html += "<div class='col-xs-8 pt-15 px-0'>";
	html += "<p class='disc w-100' id='dumpDiscription"+addon[0].data_id+"'></p>";
	html += "</div>";

	// html += "<div class='col-addon-image col-xs-4 p-0 m-0'><span class='addon-wrapper'>";
	// html += "<img src='' id='dumpImg"+addon[0].data_id+"'>";
	// html += "</span></div>";
	// html += "</div>";
	
	return html;
}

function checkboxAddon(addon){
	//console.log(addon);return;
	var html = "";
	$.each(addon, function(i,val){
		console.log("all checkbox ========", val);
		html += "<div class='row top10x row-10x row-style py-5'>";
		html += "<div class='border into-row no-padding col-70'>";
		html += "<label class='radio-label12'><input value='"+val.value+"' data-id='"+val.data_id+"' data-option='"+val.data_option+"' rel='"+val.rel+"' class='"+val.class+"' type='checkbox' name='"+val.name+"' id='"+val.name+"'>&nbsp;"+val.title+"</label>";

		if(val.photo){
			html += "<div class='col-addon-image'><span class='addon-wrapper'>";
			html += "<img src='"+val.photo+"'>";
			html += "</span></div>";
		}

		if(val.description){
			html += "<p class='disc'>"+val.description+"</p>";
		}

		html += "</div>";
		html += "<div class='actions'>";
		
		if(val.rel !== 'custom'){
			html += "<div class='counnter'>";
			
			html += "<div class='col'>";
			html += "<a href='javascript:;' class='qty-addon-minus'>";
			html += "<i class='fa fa-minus'></i>";
			html += "</a>";
			html += "</div>";

			html += "<div class='col'>";
			if(val.textField){
				html += "<input class='"+val.textField.class+" addon_qty' maxlength='5' type='text' value='"+val.textField.value+"' name='"+val.textField.name+"' id='"+val.textField.name+"'> ";
			}
			html += "</div>";

			html += "<div class='col'>";
			html += "<a href='javascript:;' class='qty-addon-plus' data-id='"+val.data_id+"' rel='"+val.rel+"'>";
			html += "<i class='fa fa-plus'></i>";
			html += "</a>";
			html += "</div>";
			html += "<div class='clearfix'></div>";
			html += "</div>";
		}

		html += "<div class='border text-right into-row col-price '>";
		html += "<span class='hide-food-price'>";
		html += val.price;
		html += "</span>";
		html += "</div>";
		html += "</div>";
		html += "</div>";
	});
	return html;
}


function fooditemdata(id){
	var params="action=foodItemData&currentController=store&item_id="+id+"&tbl=viewFoodItem";
	params+="&category_id=" + $(this).data("category_id");
	if(window.itemDetails && itemDetails[id])
	{
		var data = {
			details:itemDetails[id]
		};
		processItemInFroms(data);
	}else{
		$.ajax({    
			type: "POST",
			url: ajax_url,
			data: params,
			dataType: 'json',       
			success: function(data){
				
				processItemInFroms(data);
	
			}, 
			error: function(){	        	    	
				//busy(false); 
			}		
			}); 
	}

	$('.dropdowAddon').select2({
		minimumResultsForSearch: Infinity
	});
}

function processItemInFroms(data)
{
			//busy(false);
			console.log(data.details);
			if (data.details.hidden['two_flavors']) {
				$( ".two_flavors" ).clone().appendTo( "#frm-fooditem" );
				$('#frm-fooditem').find(".two_flavors").attr('id','two_flavors');

			} else {
				$('#frm-fooditem').find("#two_flavors").remove();
			}
			var singleAddonLayout = (data.details.hidden['one_addon_layout']) ? data.details.hidden['one_addon_layout'] : null;

			$.each(data.details.hidden, function(i,v) {
				$('#'+i).val(v);
			});

			if(data.details.not_available){
				$('.item-available').hide();
				$('.item-not-available').show();
			}else{
				$('.item-available').show();
				$('.item-not-available').hide();
				
				$('#frm-fooditem').find("#two_flavors").remove();
			}
			
			if (Object.keys(data.details.radio_price).length >= 1) {
				$.each(data.details.radio_price, function(v){
					$('.radio_prices').append(radio(data.details.radio_price[v],v));
				});
			}
			if (typeof data.details.addon !== 'undefined' && Object.keys(data.details.addon).length >= 1) {
				$.each(data.details.addon, function(i,v){
					var info = data.details.addon[i].info;
					var optionName = (data.details.addon[i].options)?Object.keys(data.details.addon[i].options)[0]:null;
					if (optionName == 'radio') {
						var isRequire = info.require_addons;
						var option = data.details.addon[i].options.radio;
						var oneAddonLayout = (data.details.hidden.one_addon_layout) ? JSON.parse(data.details.hidden.one_addon_layout) : null;
						var idDropDown = (oneAddonLayout) ? oneAddonLayout[option[0].data_id] : null;
						if(idDropDown && idDropDown != null && idDropDown != undefined){
							$('.sub-item-rows').append(addonInfo(info,dropDownAddon(option, isRequire)));
							console.log(">>>>>>=====>>>>>>", idDropDown);
						}else{
							$('.sub-item-rows').append(addonInfo(info,radioAddon(option, isRequire)));
							console.log(">>>>>>=====>>>>>>", idDropDown);
						}
					}

					if (optionName == 'checkbox') {
						var option = data.details.addon[i].options.checkbox;
						$('.sub-item-rows').append(addonInfo(info,checkboxAddon(option)));
					}

				});
			}
			$('[name=price]:checked').trigger('click');
			// $('.add_to_cart').prop( "disabled", false );

			window.addEventListener('load', function() {


			var img = $('<img />').attr('src', 'http://local.indolj.pk/assets/images/default-food-image.png')
			.on('load', function() {
			  if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
				console.log('broken image!');
			  } else {
				img.attr('alt', 'Grilled Beef Ribs');
				img.attr('title', 'Grilled Beef Ribs');
				img.attr('class', 'logo-smallx');
				$(".product-image").html(img);
			  }
			});

		  var hide_foodprice = $("#hide_foodprice").val();
		  if (hide_foodprice == "yes") {
			$(".hide-food-price").hide();
			$("span.price").hide();
			$(".food-detail-modal-footer").find(':input').each(function() {
			  $(this).hide();
			});
		  }


		  var price_cls = $(".price_cls:checked").length;
		  if (price_cls <= 0) {
			var x = 0
			$(".price_cls").each(function(index) {
			  if (x == 0) {
				// dump('set check');
				$(this).attr("checked", true);
			  }
			  x++;
			});
		  }

		  $(document).on("change", ".qty", function() {
			var value = parseInt($(this).val());
			if (value <= 0) {
			  $(this).val(1);
			}
		  });

		});
		if ($('#auto_addon_quantity').val()) {
			autoQuanitySet()
		}
}

function getAddonData($this){
	var id = $($this).data('id');
	$('#dumpDiscription'+id).html($('option:selected', $this).data('description'));
	// if($('option:selected', $this).data('img') != 'undefined'){
	// 	$('#dumpImg'+id).attr('src',$('option:selected', $this).data('img'));
	// }
	$('#dumpPrice'+id).html($('option:selected', $this).data('price'));
}

function toggleItemAddonsBySize(sizeId){
	
	var addonSize 	= $('#addon_sizes').val();	
	if(addonSize){
		var sizes 		= JSON.parse(addonSize);
		var available_addons = sizes[sizeId];

		if (available_addons) { 
			$('.addon_common').each(function(){
				let id = $(this).data('id');
				if (available_addons.includes(id)) {
					$(this).show();
					$('.sub_item_name_'+id).prop( "disabled", false );
					if($(this).children('input').hasClass('require_addon_tem')){
						$(this).children('input').addClass('require_addon').removeClass('require_addon_tem');
					}
				}else{

					$('.sub_item_name_'+id).prop( "disabled", true );
					$(this).hide();
					if($(this).children('input').hasClass('require_addon')){
						$(this).children('input').addClass('require_addon_tem').removeClass('require_addon');
					}
				}
			});
		}
	}
	if ($('#auto_addon_quantity').val()) {
		autoQuanitySet()
	}
}

window.addEventListener('load', function() {
	setTimeout(function(){
		var url_string = window.location.href;
		var url = new URL(url_string);
		var item_id_by_url = url.searchParams.get("item_id");
		$('.menu-item').each(function(i, obj) {
			var rel = $(obj).attr('rel');
			if(rel) {
				if (rel == item_id_by_url) {
					$('.menu-item[rel="'+rel+'"]').trigger('click');
				}
			}
		});
	}, 1500);


})


function setBranchDetails(current_branch) 
{
	var branch_details = '';
	$.ajax({  
		type: "GET",
		url: ajax_url + "?tbl=1&action=getBranchById&component=branches&id="+current_branch,
		dataType: 'json',
		async:false,
		success: function(resp){
			console.log(resp,"^^^^^^^^^^^^");
			if (resp.status) {
				localStorage.setItem('branch_details',JSON.stringify(resp.data));
				branch_details = resp.data;
			}
		},
	  });
	 return branch_details;
}

$('#myModal, #food-item-modal').on('hidden.bs.modal', function () {
    $('#notes').val("");
});

$( document ).on( "click", ".rider-cancelled-btn", function() {    	       	 	       
	var params = "action=riderOrderCancellationReason&tbl=riderOrderCancellationReason&order_id=" + encodeURI($('#order_id').val()) + "&merchant_id=" + encodeURI($('#merchant_id').val()) + "&branch_id=" + encodeURI($('#branch_id').val()) + "&status=" + encodeURI($('#status').val()) + "&currentController=" + $("#currentController").val();
	open_fancy_box(params);      
});


//Menu Rendering Step by Step - Start
function getCategories(){
	//showPreloader(1);

	$.ajax({  
		type: "GET",
		url: ajax_url + "?tbl=1&action=getCategoriesView&cat_number="+1,
		dataType: 'json',
		async:false,
		success: function(resp){
			console.log(resp);
			$('#dynamic-categories').append(resp.details);
			//showPreloader(0);

			// console.log(resp,"^^^^^^^^^^^^");
			// if (resp.status) {
			// 	localStorage.setItem('branch_details',JSON.stringify(resp.data));
			// 	branch_details = resp.data;
			// }
			//pause = true;
			$('.lazy').Lazy();
		},
	  });
}

window.pause = false;
window.currentScrollLoc = $(window).scrollTop();
$(function(){
	if($('#menu_rendering_on_scroll').val() == 1 && $('#load_menu_in_chunks').val() == 1) {
		$(window).scroll(function(){
			if($(window).scrollTop() > currentScrollLoc && !pause){
				//console.log(currentScrollLoc);
				currentScrollLoc += 1200;
				//console.log(currentScrollLoc);
				getCategories();
			}
		});
	}
});
//Menu Rendering Step by Step - End

function autoQuanitySet(){
    if($("#food-item-modal:visible").length > 0){
    	let multipleAddonLimit 	= JSON.parse($("#multiple_option_value").val())
    
    	$.each(multipleAddonLimit, (item_id, quantity) => {
    		console.log(1)
    		if($(`#addon_wrapper_${item_id}:visible .require_addon_${item_id}`).length > 0){
    			console.log(2)	
    			let HowManyItems = $(`.sub_item_name_${item_id}:visible`).length
    			let howCanDivide = parseInt(quantity) / HowManyItems
    			let tempQuantityForIterating = quantity - 1
    
                if($(`.sub_item_name_${item_id}:visible`).length > quantity) {
    				console.log(3)
    				$(`.sub_item_name_${item_id}:visible`).each(function(key, item){
    					console.log(4)
    					if(key <= parseInt(tempQuantityForIterating)){
    						console.log(5)
    						if( !$(item).is(':checked') ){
    							console.log(6)
    							$(item).trigger('click')
    						}
    				// 		$('.addon_qty:visible').val(1)
    					}
    				})
    			} else{
    				console.log(7)
    				let tempRound = parseInt(parseFloat(howCanDivide.toString()))
    				let tempProcess = tempRound * ( HowManyItems - 1 )
    				let lastAddonQuantity = parseInt(quantity) - tempProcess
    				let lastAddonKey = $(`.sub_item_name_${item_id}:visible`).length - 1
    
    				if( howCanDivide % 1 === 0 ){
    					console.log(8)
    					$(`.sub_item_name_${item_id}:visible`).each(function(_key1, _item1){
    						console.log(9)
    						if( !$(_item1).is(':checked') ){
    							console.log(10)
    							$(_item1).trigger('click')
    						}
    						$(`#addon_wrapper_${item_id}:visible .addon_qty:visible`).each(function(_k1, _v1){
    							console.log(11)
    							$(_v1).val(tempRound)
    						})
    					})
    
    				}else{
    					console.log(12)
    					$(`.sub_item_name_${item_id}:visible`).each(function(_key2, _item2){
    						console.log(13)
    						if( !$(_item2).is(':checked') ){
    							console.log(14)
    							$(_item2).trigger('click')
    						}
    					})
    					$(`#addon_wrapper_${item_id}:visible .addon_qty:visible`).each(function(_k3, _v3){
    						console.log(15)
    						if(lastAddonKey == _k3){
    							console.log(16)
    							$(_v3).val(lastAddonQuantity)
    						}else{
    						    console.log(17)
    							$(_v3).val(tempRound)
    						}
    					})
    				}
    			}
    
    		}
    	})
    }
}