// selected = localStorage.getItem('kr_location_area_518');
// selected = JSON.parse(selected);
//if(!selected){
                //   document.getElementsByTagName("body")[0].style.overflow = "hidden";



                  let availableBranches = [{"id":"306","name":"Oh My Grill Defence","phone_number":"03111664664","inquiry_phone":null,"address":"Shop 4, Plot 6C , Sehar Commercial, Main Commercial Avenue , DHA Phase 7, Karachi","status":"1","is_pick_up":"1","is_delivery":"1","is_dinein":"0","is_default":"0","merchant_id":"518","is_deleted":"0"},{"id":"307","name":"Oh My Grill Gulshan","phone_number":"03111664664","inquiry_phone":"","address":"Shop 3, Sumera Square, Plot SB8 & SB 11 Block 4 Gulshan","status":"1","is_pick_up":"1","is_delivery":"1","is_dinein":"0","is_default":"1","merchant_id":"518","is_deleted":"0"},{"id":"308","name":"Oh My Grill Bahadurabad","phone_number":"03111664664","inquiry_phone":null,"address":"Shop 9, Bahadurabad Centre, Bahadur Shah Zafar Road, Karachi","status":"1","is_pick_up":"1","is_delivery":"1","is_dinein":"0","is_default":"0","merchant_id":"518","is_deleted":"0"},{"id":"309","name":"Oh My Grill Zamzama","phone_number":"03111664664","inquiry_phone":null,"address":"Shop No 2 , Plot 16C, Lane 10 Zamzama, DHA Phase 5, Karachi","status":"1","is_pick_up":"1","is_delivery":"1","is_dinein":"0","is_default":"0","merchant_id":"518","is_deleted":"0"}];
                  var widthauto = $('.transaction_type').width();
                //   $('#area, .select2-standard').select2({
                //       width: widthauto // need to override the changed default
                //   });
                //   $('#area').on('change', function() {
                //     $('#area_id').val($(this).val());
                //   });
                //   $('.area-modal-button').on('click', function() {
                //     setTimeout(() => {
                //       var area_id = $('#area_id').val();
                //       var delivery_branch_id = $('#delivery_branch_id').val();
                //       var branch_id_select = $('#branch_modal_select').val();
                //       var city_id = $('#cities').val();
                //       let locationTextArea = false;
                //       var area_check = $('#area').val();
                //       if((area_check == 0 || area_check === null) && $('#delivery').hasClass('active')){
                //         uk_msg('Please Select Area');
                //         return;
                //       }
                //       if($('#delivery').hasClass('active') && area_id > 0){
                //                                   locationTextArea  = $('#area').find(':selected').text();
                //                                   console.log("hereee");
                //               removeOtherBranchItems(area_id,false);                     
                //       }
                //       console.log(branch_id_select,'babuuuu')
                //       if($('#pickup').hasClass('active') && branch_id_select && branch_id_select != 0){
                //           console.log(branch_id_select,"hereee22222");
                //           locationTextArea  = $('#branch_modal_select').find(':selected').text();
                //           removeOtherBranchItems(false,true,branch_id_select);
                //       }
                //       if (delivery_branch_id && delivery_branch_id != 0) {
                //           console.log(delivery_branch_id,"hereee22222");
                //           locationTextArea  = $('#delivery_branch_select').find(':selected').text();
                //           removeOtherBranchItems(false,true,delivery_branch_id);
                //       }
                //       if (locationTextArea) {
                //         let locationBtn         = $('#branch-location');
                //         let locationText        = locationTextArea;
                //         let html_Location       = '<span>'+locationText+'</span>';
                //         $('#branch-location > span').remove();
                //           locationBtn.append(html_Location);
                //           locationBtn.attr('href', 'javascript:;');
                //           $('#branch-location').click(function(){
                //             $("#locationModal").addClass("show");
                //           });
                //       }
                //       let initialPopUp = {
                //         area_id:area_id,
                //         branch_id_select:branch_id_select,
                //         delivery_branch_id:delivery_branch_id,
                //         city_id:city_id
                //       };
                //       localStorage.setItem('initialPopUp_518',JSON.stringify(initialPopUp));
                //     }, 800);
                //   });
                //   $('#cities').on('change',function(){
                //     let city_id = $(this).val();
                //     $.getJSON(front_ajax + '/GetCityBranchesByMerchant?merchant_id=518&city_id='+city_id+'&branch_delivery=', function (response) {
                //       if (response.details) {
                //         $("#branch_modal_select").empty();
                //         $("#delivery_branch_select").empty();
                //         $("#branches").empty();
                //         $.each(response.details,function(i,v){
                //           var newOption = new Option(v.name, v.id, true, true);
                //           $('#branch_modal_select').append(newOption);
                //         });
                //         $.each(response.details,function(i,v){
                //           var newOption = new Option(v.name, v.id, true, true);
                //           $('#branches').append(newOption);
                //         });
                //         if($('#pickup').hasClass('active')){
                //           $('#pickup-content').show();
                //           $('#branch_modal_select').select2({
                //               width: widthauto // need to override the changed default
                //           });
                //           $('#delivery-branch-content').hide();
                //         } else {
                //                               }
                //       }
                //     });
                      
                //     let loadAreasDropDown = (areas) => {
                //       $("#area").empty();
                //       if($('#delivery').hasClass('active')){
                //         $("#delivery-content").show();
                //       }
                //       if (areas) {
                //         var newOption = new Option('Select Area', 0, true, true);
                //         $('#area').append(newOption).trigger('change');
                //         $.each(areas,function(i,v){
                //           var newOption = new Option(v.area_name, v.area_id, true, true);
                //           newOption.setAttribute('data-branch-id',v.branch_id);
                //           $('#area').append(newOption);
                //         });
                //         $('#area').val(0).trigger('change');
                //         setTimeout(() => {
                //             getcartareas(city_id,areas);
                //         },1000);
                //       }
                //     }
                //     loadAreasDropDown(deliveryAreasPreload[city_id]);
                //     // $.getJSON(front_ajax + '/GetLocationFee?merchant_id=518&city_id='+city_id, function (response) {
                //     // });
                //   });
                //   $(".cancle").on("click", function(){
                //     var delivery_branch_id = $('#delivery_branch_select').val();
                //                     //   getCategories();
                //     var branch_check = $('#branch_modal_select').val();
                //     if((branch_check == 0 || branch_check === null) && $('#pickup').hasClass('active')){
                //       uk_msg('Please Select Branch');
                //       return;
                //     }  
                //     $('#locationModal').removeClass('show');
                //     $("body").css("overflow", "visible");
                //   });
                //                 $('#delivery').on('click', function(){
                //       $('#Delivery').trigger('click');
                //       $('#area-modal-heading').text('Select Your Location');
                //       $('.transaction_type a').removeClass('active');
                //       $(this).addClass('active');
                //                             $('#delivery-content').show();
                //           $('#delivery-branch-content').show();
                //                         $('#pickup-content').hide();
                //   });
                //   $('#pickup').on('click', function(){
                //       $('#Pickup').trigger('click');
                //       var widthauto = $('.transaction_type').width();
                //       $('#branch_modal_select').select2({
                //         width: widthauto // need to override the changed default
                //       });
                //       $('#branches').val($('#branch_modal_select').val());
                //       $('#area-modal-heading').text('Please Select Branch');
                //       $('.transaction_type a').removeClass('active');
                //       $(this).addClass('active');
                //       $('#delivery-content').hide();
                //       $('#pickup-content').show();
                //       $('#delivery-branch-content').hide();
                //   });
                //   $('#branch_modal_select').on('change', function() {
                //       window.initialPopUpSelection = true;
                //       $('#branch_id_select').val($(this).val());
                //       $('#Pickup').trigger('click');
                //       if ($('#branch-location').exists()) {
                //         let locationBtn         = $('#branch-location');
                //         // let locationTextCity    = $('select#cities option:selected').text();
                //         // if(locationTextCity == ''){
                //         //     locationTextCity = '';
                //         // }else{
                //         //     locationTextCity = ', '+locationTextCity;
                //         // }
                //         let locationTextBranch  = $('option:selected',this).text();
                //         // let locationText        = locationTextBranch+locationTextCity;
                //         let locationText        = locationTextBranch;
                //         let html_Location       = '<span>'+locationText+'</span>';
                //         $('#branch-location > span').remove();
                //         locationBtn.append(html_Location);
                //         locationBtn.attr('href', 'javascript:;');
                //         $('#branch-location').click(function(){
                //           $("#locationModal").addClass("show");
                //         });
                //       }
                //   });
                //   $('#delivery_branch_select').on('change', function() {
                //       $('#delivery_branch_id').val($(this).val());
                //       $('#Delivery').trigger('click');
                //         var branch_id   = $(this).val();
                //         document.cookie = `branch=${branch_id}`;
                //       if ($('#branch-location').exists()) {
                //         let locationBtn         = $('#branch-location');
                //         // let locationTextCity    = $('select#cities option:selected').text();
                //         // if(locationTextCity == ''){
                //         //     locationTextCity = '';
                //         // }else{
                //         //     locationTextCity = ', '+locationTextCity;
                //         // }
                //         let locationTextBranch  = $('option:selected',this).text();
                //         // let locationText        = locationTextBranch+locationTextCity;
                //         let locationText        = locationTextBranch;
                //         let html_Location       = '<span>'+locationText+'</span>';
                //         $('#branch-location > span').remove();
                //         locationBtn.append(html_Location);
                //         locationBtn.attr('href', 'javascript:;');
                //         $('#branch-location').click(function(){
                //           $("#locationModal").addClass("show");
                //         });
                //       }
                //   });
                  let initialPopUp = JSON.parse(localStorage.getItem('initialPopUp_518'));
                  if(initialPopUp){
                    $('#cities').val(initialPopUp.city_id);
                    if ($('#cities').val()) {
                        $('#cities').trigger('change');                          
                    } else {
                                      }
                    $('#area').val(initialPopUp.area_id);
                    if ($('#area').val()) {
                        $('#area').trigger('change');
                    }
                  }
              // });
          
              window.addEventListener('load', function(){
                $('.navbar-toggle2').on('click', function(){
                  $('#navbar1').toggleClass('open');
                  $('.panel-overlay').toggleClass('open');
                });
                $('.panel-close').on('click', function(){
                  $('#navbar1').toggleClass('open');
                  $('.panel-overlay').toggleClass('open');
                });
                $('.panel-overlay').on('click', function(){
                  $('#navbar1').toggleClass('open');
                  $('.panel-overlay').toggleClass('open');
                });
              });


              function popover_make(obj,data) {
                var div_col_width = 12;
                content = ''; 
                content+= '<div class="dishdetail puppover item-ids-'+data.i_id+'"> ';
                content+= '<div class="row">';
                content+= ' <div class="col col-md-'+div_col_width+'">';
                content+= '   <div class="section image">'; 
                if(data.image) {
                    content+= '       <img data-src="'+data.image+'" border="0" class="lazy" />'; 
                }
                content+= '   </div>';
                if( data.dish_description != '' ) {
                    content+= '     <div class="section description">'+data.dish_description+'</div>'; 
                }
                content+= ' </div>';
                content+= '</div>';
                content+= '</div>';
                /*jQuery(obj).popover({ 
                    content: content,
                    title: data.t,
                    trigger: 'hover',
                    html: true,  
                    placement: 'auto right'
                });*/
            }

            window.addEventListener('load', function() { 
                $('.lazy').Lazy();
            
                $('[data-single=2]').each((index, node) => node.removeAttribute('data-toggle'));
            })
            function searchItemByTitle() {
                var input, filter, item, i, txtValue, categoryTitle, bannerContainer, sideBannerContainer;
                input = document.getElementById("search_item");
                filter = input.value.toUpperCase();
                item = document.getElementsByClassName('item-box-branch');
                categoryTitle = document.getElementsByClassName('title-base');
                bannerContainer = document.getElementsByClassName('fix-height-cate');
                sideBannerContainer = document.getElementsByClassName('category-image');
                if(categoryTitle.length>0){
                    for(cat = 0; cat < categoryTitle.length; cat++){
                        if(filter.length > 0){
                        categoryTitle[cat].style.display = "none";
                        }else{
                            categoryTitle[cat].style.display = "flex";
                        }
                    }
                }
                if(bannerContainer.length>0){
                    for(ban = 0; ban < bannerContainer.length; ban++){
                        if(filter.length > 0){
                            bannerContainer[ban].style.display = "none";
                        }else{
                            bannerContainer[ban].style.display = "flex";
                        }
                    }
                }
                if(sideBannerContainer.length>0){
                    for(sideBan = 0; sideBan < sideBannerContainer.length; sideBan++){
                        if(filter.length > 0){
                            sideBannerContainer[sideBan].style.display = "none";
                        }else{
                            sideBannerContainer[sideBan].style.display = "flex";
                        }
                    }
                }
                for (i = 0; i < item.length; i++) {
                    txtValue = item[i].getAttribute('data-title');
                    if($(item[i]).hasClass('hide-from-branch') != true){
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            item[i].style.display = "";
                        } else {
                            item[i].style.display = "none";
                        }
                    }
                }
                toggleCategories(list_cat);
            }
            function searchClose(){
                $('#search_item').val("");
                $('#search-item-icon').removeClass('open-search');
                var input, filter, item, i, txtValue;
                input = document.getElementById("search_item");
                filter = input.value.toUpperCase();
                item = document.getElementsByClassName('item-box-branch');
                for (i = 0; i < item.length; i++) {
                    txtValue = item[i].getAttribute('data-title');
                    if($(item[i]).hasClass('hide-from-branch') != true){
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            item[i].style.display = "";
                        } else {
                            item[i].style.display = "none";
                        }
                    }
                }
                toggleCategories(list_cat);
            }


            var msg = '<p class="msg-asap" id="msg-asap"><i class="fa fa-exclamation-circle"></i><span id="estimation-msg">\
            Your Order will be delivered</span> in <span class="delivey-est-time"><span id="transTypeTime"></span></span> minutes\
            </p>';
            msg += '<input type="checkbox" class="custom-checkbox" id="delivery_asap" name="delivery_asap" checked />\
            <label for="delivery_asap" class="custom-checkbox-label" style="">Change Delivery Time</label>';
            setTimeout(function(){
                if (window.jQuery) { 
                    let branchDetails = localStorage.getItem('branch_details');
                                            $('.delivery-type').show();
                        $('.delivery-asap').show();
                        $('#dynamic-date-time-schedule').show();
                        $('.checkout').show();
                        $('.checkout').html('Checkout');
                    $('.delivery-asap').html(msg);
                    ProcessTime();
                    ProcessTimeNext();
                    $('#delivery_asap').click(function(){
//                        console.log($('#delivery_asap').is(':checked'),'^^^^^^^');
                        if ($('#delivery_asap').is(':checked')) {
                                                            $("#date-time-schedule").hide();
                            $("#msg-asap").show();
                            return true;
                        }else{
                            $("#date-time-schedule").show();
                            $("#msg-asap").hide();
                            ProcessTime();
                            ProcessTimeNext();
                            return false;
                        }
                    });
                    if ($('#delivery_asap').is(':checked')) {
                        if ($('input[name=delivery_type]:checked').val() == "Delivery") {
                            $("#date-time-schedule").show();
                                                        $("#date-time-schedule").hide();
                                                        $(".custom-checkbox-label").text("Change Delivery Time");
                            $("#estimation-msg").text("Your Order will be delivered ");
                            load_item_cart();
                        }else{
                                                        $("#date-time-schedule").hide();
                        } 
                    }
                    if ($('#delivery_asap').is(':checked')) {
                        if ($('input[name=delivery_type]:checked').val() == "Pickup"){
                            $("#date-time-schedule").show();
                                                        $("#date-time-schedule").hide();
                            $(".custom-checkbox-label").text("Change Pickup Time");
                            $("#estimation-msg").text("Your order will be ready for pickup ");
                            $('#transTypeTime').text('45');
                            load_item_cart();
                        } else if ($('input[name=delivery_type]:checked').val() == "Dinein") {
                            $("#estimation-msg").text("Your order will be served piping hot ");
                            $(".custom-checkbox-label").text("Change Dine-in Time");
                            $('#transTypeTime').text('45');
                            $("#delivery_d_type").text("Dine-in");
                        } else if ($('input[name=delivery_type]:checked').val() == "Delivery") {
                            // $("#estimation-msg").text("Your order will be served piping hot ");
                            $('#transTypeTime').text('60');
                        } else{
                                                        $("#date-time-schedule").hide();
                                                    } 
                    }
                    // initial asigned
                    $('input[name=delivery_type]:checked').checked = true;
                    $("#delivery_d_type").text("Delivery");
                    // on change delivery type function
                    $("input[name=delivery_type]:radio").on("change", function () {
                        if ($('input[name=delivery_type]:checked').val() == "Delivery") {
                            $('.custom-checkbox').attr("name", "delivery_asap");
                            $('.custom-checkbox').attr("id", "delivery_asap");
                            $(".custom-checkbox-label").text("Change Delivery Time");
                            $("#estimation-msg").text("Your Order will be delivered ");
                            $("#delivery_d_type").text("Delivery");
                            $(".custom-checkbox-label").attr("for", "delivery_asap");
                            $('#transTypeTime').text('60');
                            $('.rst-name').hide();
                            $('.rst-strt').hide();
                            // $('.branchDropdow, .pickup-branch').hide();
                                                        $('document').ready(function(){
                                if ($('#delivery_asap').is(':checked') == true) {
                                    $("#date-time-schedule").hide();
                                    $("#msg-asap").show();
                                }
                            });
                            // This not effect on preoder
                            $('#delivery_asap').click(function(){
                                if ($('#delivery_asap').is(':checked')) {
                                    $("#date-time-schedule").hide();
                                    $("#msg-asap").show();
                                }else{
                                    $("#date-time-schedule").show();
                                    $("#msg-asap").hide();
                                }
                            });
                            //load_item_cart();
                        } else if ($('input[name=delivery_type]:checked').val() == "Pickup") {
                            $('.custom-checkbox').attr("name", "pickup_asap");
                            $('.custom-checkbox').attr("id", "pickup_asap");
                            $(".custom-checkbox-label").text("Change Pickup Time");
                            $("#estimation-msg").text("Your order will be ready for pickup ");
                            $("#delivery_d_type").text("Pickup");
                            $(".custom-checkbox-label").attr("for", "pickup_asap");
                            $('#transTypeTime').text('45');
                            // $(".branchDropdow, .pickup-branch").show();
                            $('.rst-name').show();
                            $('.rst-strt').show();
                            $("#msg-asap").show();
                                                        $('document').ready(function(){
                                if ($('#pickup_asap').is(':checked') == true) {
                                    $("#date-time-schedule").hide();
                                    $("#msg-asap").show();
                                }
                            });
                            // This not effect on preoder
                            $('#pickup_asap').click(function(){
                                if ($('#pickup_asap').is(':checked')) {
                                    $("#date-time-schedule").hide();
                                    $("#msg-asap").show();
                                }else{
                                    $("#date-time-schedule").show();
                                    $("#msg-asap").hide();
                                }
                            });
                            //load_item_cart();
                        } else if ($('input[name=delivery_type]:checked').val() == "Curbside") {
                            $('.custom-checkbox').attr("name", "curb_asap");
                            $('.custom-checkbox').attr("id", "curb_asap");
                            $(".custom-checkbox-label").text("Change Curbside Pickup Time");
                            $("#delivery_d_type").text("Curbside Pickup");
                            $(".custom-checkbox-label").attr("for", "curb_asap");
                            $('.rst-name').show();
                            $('.rst-strt').show();
                            $("#msg-asap").show();
                                                        $('document').ready(function(){
                                if ($('#curb_asap').is(':checked') == true) {
                                        $("#date-time-schedule").hide();
                                        $("#msg-asap").show();
                                    }
                                });
                            // This not effect on preoder
                            $('#curb_asap').click(function(){
                                if ($('#curb_asap').is(':checked')) {
                                    $("#date-time-schedule").hide();
                                    $("#msg-asap").show();
                                }else{
                                    $("#date-time-schedule").show();
                                    $("#msg-asap").hide();
                                }
                            });
                        // load_item_cart();
                        } else if ($('input[name=delivery_type]:checked').val() == "Dinein") {
                            $("#estimation-msg").text("Your order will be served piping hot ");
                            $('#transTypeTime').text('45');
                            $("#delivery_d_type").text("Dine-in");
                        }
                    });
                                            $('#date-time-schedule').show();
                }
            },1000);


            function ProcessTime(){
                if (typeof $("#hour").val() != 'undefined' && typeof $("#minute").val() != 'undefined' && typeof $("#half").val() != 'undefined') {
                    $('#delivery_date').trigger('change');
                    $('#delivery_time').val($("#hour").val() + ":" + $("#minute").val()+" "+$("#half").val().toUpperCase());
                    $('#delivery_d_time').html($("#hour").val() + ":" + $("#minute").val()+" "+$("#half").val().toUpperCase());
                    $('#delivery_d_time').val($("#hour").val() + ":" + $("#minute").val()+" "+$("#half").val().toUpperCase());
                }
            }
            function ProcessTimeNext(){
                if (typeof $("#hour_next").val() != 'undefined' && typeof $("#minute_next").val() != 'undefined' && typeof $("#half_next").val() != 'undefined') {
                    $('#delivery_date').trigger('change');
                    $('#delivery_time').val($("#hour_next").val() + ":" + $("#minute_next").val()+" "+$("#half_next").val().toUpperCase());
                    $('#delivery_d_time').html($("#hour_next").val() + ":" + $("#minute_next").val()+" "+$("#half_next").val().toUpperCase());
                    $('#delivery_d_time').val($("#hour_next").val() + ":" + $("#minute_next").val()+" "+$("#half_next").val().toUpperCase());
                //alert($('#delivery_d_time').val());
                }
            }
            function toggleDeliveryOption(){
                $( ".delivery-option" ).toggle( "fast", function() {
                    console.log("delivery Options toggle.")
                });
            }
            window.addEventListener('load', function() {
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var d = new Date($('#delivery_date').val());
            var dayName = days[d.getDay(), d.getMonth()];
            $('#delivery_d_day').html(dayName);
            //alert((dayName));
             // $("#delivery_date").on("change", function(){
                 // var d = new Date($('#delivery_date').val());
                   // var dayName = days[d.getDay(), d.getMonth()];
                    //console.log("dayName" , dayName);
             // });
             $(document).on('change','#hour',function(){
                  var dth = $(this).val();
                  console.log("THis is the new hour Value" , $(this).val());
                  $('.d-time-hour').html(dth);
                  ProcessTime();
              });
             $(document).on('change','#minute',function(){
                  var dtmin = $(this).val();
                  console.log("THis is the new min Value" , $(this).val());
                  $('.d-time-min').html(dtmin);
                  ProcessTime();
              });
              $(document).on('change','#half',function(){
                  var dthalf = $(this).val();
                  console.log("THis is the new half Value" , $(this).val());
                  $('.d-time-half').html(dthalf);
                  ProcessTime();
              });
              $(document).on('change','#hour_next',function(){
                  var dth = $(this).val();
                  console.log("THis is the new hour Value" , $(this).val());
                  $('.d-time-hour').html(dth);
                  ProcessTimeNext();
              });
              $(document).on('change','#minute_next',function(){
                  var dtmin = $(this).val();
                  console.log("THis is the new min Value" , $(this).val());
                  $('.d-time-min').html(dtmin);
                  ProcessTimeNext();
              });
              $(document).on('change','#half_next',function(){
                  var dthalf = $(this).val();
                  console.log("THis is the new half Value" , $(this).val());
                  $('.d-time-half').html(dthalf);
                  ProcessTimeNext();
              });
            });

            window.addEventListener('load', function() {
                $(function () {
                    window.DeliveryTypeChange = function(x){
                        console.log(x);
                        if(x == 'delivery') {
                            $('#delivery_zones').show();
                        }else {
                            $('#delivery_zones').hide();
                        }
                        $('#delivery_type').val(x);
                    };
                    window.is_Curbside = function(x){
                        console.log("setting curbside " , x);
                        $('#is_curbside_pickup').val(x);
                    };
                    $(document).on('click','#Delivery' , function(){
                        // alert(111);
                        DeliveryTypeChange("delivery");
                        is_Curbside(false);
                        var widthauto = $('#branches').width();
                                                $('#delivery_zones select').trigger("change");
                                            //$('.branchDropdow').show();
                        $('.branchDropdow, .pickup-branch').hide();
                        $('.dineInBranchDropdow, .dinein-branch').hide();
                        load_item_cart();
                    });
                    $(document).on('click','#Pickup' , function(){
                        DeliveryTypeChange("pickup");
                        is_Curbside(false);
                        $('.branchDropdow, .pickup-branch').show();
                        var delivery_branch_id = $("#delivery_zones select").find(':selected').data('branch-id');
                        if (window.initialPopUpSelection) {
                            initialPopUpSelection  = false;
                            var branch_id          = $('#branch_id_select').val();                        
                            $('#branches').val(branch_id);
                        } else if (delivery_branch_id) {
                            $('#branches').val(delivery_branch_id);
                        }
                        $('.dineInBranchDropdow, .dinein-branch').hide();
                        $('.deliverybranchDrop').hide();
                        $('#branches').trigger('change');
                    });
                    $(document).on('click','#Dinein' , function(){
                        console.log('here dine............');
                        DeliveryTypeChange("dinein");
                        is_Curbside(false);
                        $('.branchDropdow, .pickup-branch').hide();
                        $('.deliverybranchDrop').hide();
                        $('.dineInBranchDropdow').show();
                        // , .dinein-branch
                        $('#branches').trigger('change');
                    });
                    $(document).on('click','#Curbside' , function(){
                        DeliveryTypeChange("pickup");
                        is_Curbside(true);
                        $('.branchDropdow, .pickup-branch').show();
                        $('.dineInBranchDropdow, .dinein-branch').hide();
                        $('.deliverybranchDrop').hide();
                        $('#branches').trigger('change');
                        console.log('ssss');
                    });
                    $('#Curbside').trigger( "click" );
                    $('#Dinein').trigger( "click" );
                    $('#Pickup').trigger( "click" );
                    $('#Delivery').trigger( "click" ); 
                    $('document').ready(function(){
                                            //     var dt = new Date();
                        //    dt.setMinutes( dt.getMinutes() + 15 );
                        //    var hour = dt.getHours();
                        //    if((dt.getMinutes() + 15) - (dt.getMinutes() % 15) > 45){
                        //        $('#minute').val("00");
                        //        hour++;
                        //    }else {
                        //        $('#minute').val((dt.getMinutes() + 15) - (dt.getMinutes() % 15));
                        //    }
                        //    if(hour > 12){
                        //      $('#hour').val(hour-12);
                        //      $('#half').val('pm')
                        //    }else {
                        //      $('#hour').val(hour);
                        //      $('#half').val('am')
                        //    }
                    });
                });
                $('document').ready(function(){
                    if ($('#pickup_asap').is(':checked') == true) {
                        $("#date-time-schedule").hide();
                        $("#msg-asap").show();
                    }
                });
                $('#pickup_asap').click(function(){
                    if ($('#pickup_asap').is(':checked')) {
                            $("#date-time-schedule").hide();
                            $("#msg-asap").show();
                    }else{
                        $("#date-time-schedule").show();
                        $("#msg-asap").hide();
                    }
                });
            });


            window.addEventListener('load', function() {
                $(document).on('change','#branches',function(){
                    var branches    = [{"id":"306","name":"Oh My Grill Defence","phone_number":"03111664664","inquiry_phone":null,"address":"Shop 4, Plot 6C , Sehar Commercial, Main Commercial Avenue , DHA Phase 7, Karachi","status":"1","is_pick_up":"1","is_delivery":"1","is_dinein":"0","is_default":"0","merchant_id":"518","is_deleted":"0"},{"id":"307","name":"Oh My Grill Gulshan","phone_number":"03111664664","inquiry_phone":"","address":"Shop 3, Sumera Square, Plot SB8 & SB 11 Block 4 Gulshan","status":"1","is_pick_up":"1","is_delivery":"1","is_dinein":"0","is_default":"1","merchant_id":"518","is_deleted":"0"},{"id":"308","name":"Oh My Grill Bahadurabad","phone_number":"03111664664","inquiry_phone":null,"address":"Shop 9, Bahadurabad Centre, Bahadur Shah Zafar Road, Karachi","status":"1","is_pick_up":"1","is_delivery":"1","is_dinein":"0","is_default":"0","merchant_id":"518","is_deleted":"0"},{"id":"309","name":"Oh My Grill Zamzama","phone_number":"03111664664","inquiry_phone":null,"address":"Shop No 2 , Plot 16C, Lane 10 Zamzama, DHA Phase 5, Karachi","status":"1","is_pick_up":"1","is_delivery":"1","is_dinein":"0","is_default":"0","merchant_id":"518","is_deleted":"0"}];
                    var branchInfo  = branches.find(branches => branches.id == this.value);
                    let current_branch_id = $(this).val();
                    if($('.branchDropdow select').val(current_branch_id)){
                        $('.branchDropdow select').val(current_branch_id);
                    }
                    if(branchInfo){
                        $('.pickup-branch').show();
                        var branchDetails  = "<p>"+branchInfo.name+"</p>";
                        branchDetails     += "<p>"+branchInfo.address+"</p>";
                        branchDetails     += "<p>"+branchInfo.phone_number+"</p>";
                        $('.branch-info').html(branchDetails);
                    }else{
                        $('.pickup-branch').hide();
                        $('.branch-info').html("");
                    }
                    loadDynamicHtml('?action=getTimeBox&tbl=1&branch_id='+this.value);
                    removeOtherBranchItems(false,true,this.value);
                    //load_item_cart();
                });
                $(document).on('change','#deliveryBranch',function(){
                    var branches    = [{"id":"306","name":"Oh My Grill Defence","phone_number":"03111664664","inquiry_phone":null,"address":"Shop 4, Plot 6C , Sehar Commercial, Main Commercial Avenue , DHA Phase 7, Karachi","status":"1","is_pick_up":"1","is_delivery":"1","is_dinein":"0","is_default":"0","merchant_id":"518","is_deleted":"0"},{"id":"307","name":"Oh My Grill Gulshan","phone_number":"03111664664","inquiry_phone":"","address":"Shop 3, Sumera Square, Plot SB8 & SB 11 Block 4 Gulshan","status":"1","is_pick_up":"1","is_delivery":"1","is_dinein":"0","is_default":"1","merchant_id":"518","is_deleted":"0"},{"id":"308","name":"Oh My Grill Bahadurabad","phone_number":"03111664664","inquiry_phone":null,"address":"Shop 9, Bahadurabad Centre, Bahadur Shah Zafar Road, Karachi","status":"1","is_pick_up":"1","is_delivery":"1","is_dinein":"0","is_default":"0","merchant_id":"518","is_deleted":"0"},{"id":"309","name":"Oh My Grill Zamzama","phone_number":"03111664664","inquiry_phone":null,"address":"Shop No 2 , Plot 16C, Lane 10 Zamzama, DHA Phase 5, Karachi","status":"1","is_pick_up":"1","is_delivery":"1","is_dinein":"0","is_default":"0","merchant_id":"518","is_deleted":"0"}];
                    var branchInfo  = branches.find(branches => branches.id == this.value);
                    let current_branch_id = $(this).val();
                    if($('.deliverybranchDrop select').val(current_branch_id)){
                        $('.deliverybranchDrop select').val(current_branch_id);
                    }
                    if(branchInfo){
                        // $('.delivery-branch').show();
                        var branchDetails  = "<p>"+branchInfo.name+"</p>";
                        branchDetails     += "<p>"+branchInfo.address+"</p>";
                        branchDetails     += "<p>"+branchInfo.phone_number+"</p>";
                        $('.delivery-branch-info').html(branchDetails);
                    }else{
                        // $('.delivery-branch').hide();
                        $('.delivery-branch-info').html("");
                    }
                    loadDynamicHtml('?action=getTimeBox&tbl=1&branch_id='+this.value);
                    removeOtherBranchItems(false,true,this.value);
                    //load_item_cart();
                });
                // $('#branches').trigger('change');
                $('[name="delivery_type"]').on('change',function(){
                    let transType = $('[name="delivery_type"]:checked').val();
                    if (transType == "Pickup") {
                        $('#transTypeText2').text('You have to pickup your order from:');
                    } else if (transType == "Dinein") {
                        load_item_cart();
                        $('#transTypeText2').text('Your Selected Branch Address is:');
                    }
                    transType = (transType == "Dinein") ? "Dine-in" : transType; 
                    $('.transTypeText').text('Select your nearest Branch for ' + transType);
                });
            });
            setTimeout(
            function() {
                ProcessTime();
                ProcessTimeNext();  
            }, 3000);
    
            window.addEventListener('load', function() {
                jQuery(document).ready(function() {		
                    console.log("Binding the change on delivery date");
                        $('#delivery_date1').on("change", function(d){
                            console.log("data changed aaaaa" , d); 
                            var d = new Date();
                            var x = "";
                            var h = addZero(d.getHours());
                            var m = addZero(d.getMinutes());
                            var s = addZero(d.getSeconds());
                            x = "T" + h + ":" + m + ":" + s;
                            var a = new Date(d);
                            var b = new Date(Date.now());
                            if(a.getYear() == b.getYear() && a.getMonth() == b.getMonth() && a.getDate() == b.getDate()){
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
                            } else {
                                $('.timepicks').timepicker({
                                    timeFormat: 'h:mm p',
                                    interval: 10,
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
                            }
                        });	
                });
            })

        

            function getcartareas(city_id,details)
                        {   
                            $("#delivery_zones select").empty();
                            var city = (city_id) ? '&city_id='+city_id:'';
                            var process = function(details){
                                var areas = details;
                                console.log(areas);
                                areas.sort((a, b) => (a.area_name > b.area_name) ? 1 : (a.area_name === b.area_name) ? ((a.area_name > b.area_name) ? 1 : -1) : -1 )
                                var selected = {}
                                if(areas.length > 0) {
                                    $('#delivery_zones select').html(`<option value="0">Select Area</option>`);
                                    if(!selected.area_id) {
                                        try {
                                            selected = localStorage.getItem('kr_location_area_518');
                                            selected = JSON.parse(selected);
                                            if(selected.area_id) {
                                                $('#delivery_zones select option[value="0"]').remove();
                                            }
                                        } catch (error) { console.log('error_parse_json') }
                                    }
                                    areas.map(area => {
                                        let branch = (area.branch_id)?'data-branch-id="'+area.branch_id+'"':"";
                                        $('#delivery_zones select').append(`<option data-area-id="${area.area_id}" ${branch} value="${area.rate_id}">${area.area_name}</option>`);
                                    });
                                    if(!selected) {
                                        setTimeout(() => {
                                            //callAjax("SetLocationFee", "rate_id="+$('#delivery_zones select > option:first').val() );
                                        }, 1000);
                                    } else {
                                        if (selected.area_name) {
                                            setTimeout(() => {
                                                $('[name="delivery_zone"] option:contains("'+selected.area_name+'")').prop({selected: true}).trigger('change');
                                                // if(typeof($('[name="delivery_zone"]').select2) == 'function' && $('[name="delivery_zone"]').data('select2')) {
                                                //     //$('[name="delivery_zone"]').select2('val', selected.rate_id);
                                                //     $('[name="delivery_zone"]').val(selected.area_name).trigger('change')
                                                // } else {
                                                //     $('[name="delivery_zone"]').val(selected.area_name)
                                                // } 
                                                }, 800);
                                        }
                                    }
                                }
                            };
              
                      
                        }  
                        window.addEventListener('load', function () {                          
                        getcartareas();
                            $('#delivery_zones select').on('change', function () {
                                var area_id = $(this).find(':selected').data('area-id');
                                    // removeOtherBranchItems(area_id,true);
                                    // load_item_cart();
                                if($(this).val() > 0) {
                                                                        removeOtherBranchItemsByRate($(this).val(),area_id);
                                    var branch_id = $(this).find(':selected').data('branch-id');
                                    $('#delivery_zones').removeClass('error');
                                    $('#delivery_zones select option[value="0"]').remove();
                                    var area_id = $(this).find(':selected').data('area-id');
                                    callAjax("SetLocationFee", "rate_id="+$(this).val()+"&area_id="+area_id+"&branch_id="+branch_id, '', function(data) {
                                        console.log('return_data', data)
                                    });
                                }
                            })
                            $(document).ready(function() {
                                $('#delivery_zones select').select2();
                            })
                            // $(document).ready(function() {
                            //     if(518 == 12){
                            //         $('#delivery_zones select').select2();
                            //         setTimeout(() => {
                            //             // var current_zone = $('#delivery_zones select option')[$('#delivery_zones select').find(':selected').val()]
                            //             $('.select2-selection__rendered').text($("#delivery_zones select option:selected").text())
                            //         }, 1000);
                            //     }
                            // })
                        })
                 


                        window.addEventListener('load', function() {
                            $(".slide-toggle").click(function(){
                                var item = $('#check-cls').val();
                                if (item == '1') {
                                    $('#menu-right-content').addClass("shw-cart"); 
                                    $('#cart-placeholder').removeClass("shw-cart");
                                } else {
                                    $('#cart-placeholder').addClass("shw-cart"); 
                                    $('#menu-right-content').removeClass("shw-cart");
                                }
                                $(".shw-cart").animate({
                                    width: "toggle"
                                });
                            });
                            $(".close-cart, .close-text").click(function(){
                                $('#cart-placeholder').removeClass("shw-cart");
                                $('#menu-right-content').removeClass("shw-cart");
                            });
                            if($(window).width()>768){       
                                $(document).scroll(function () {
                                    if (window.scrollY > 450) {
                                        $(".sticky-category-container").addClass("fixi");
                                    } else {
                                        $(".sticky-category-container").removeClass("fixi");
                                    }
                                });
                            }
                            if($(window).width()<768){       
                                $(document).scroll(function () {
                                    if (window.scrollY > 350) {
                                        $(".sticky-category-container").addClass("fixi");
                                    } else {
                                        $(".sticky-category-container").removeClass("fixi");
                                    }
                                });
                            }
                            // For Item Counter on bottom
                            var c = $("#cart-count").html();
                            $(".cart_count").html(c);
                            if($(".cart_count").html() == "0" || $(".cart_count").html() == ""){
                                $(".cart_count").hide();
                            }
                            // For Item Price on botttom
                            if($("#t-p").html() == undefined){
                                $(".c-btn-price").hide();
                            } else {
                                $(".c-btn-price").show();
                                var tp = $("#t-p").html();
                                $("#c-btn-price").html(tp);
                            }
                            // For Counter box on bottom
                            if($(".cart_count").html() == "0" || $(".cart_count").html() == ""){
                                $(".cart-fix-btm").hide();
                            }
                        });
                        function myFunction() {
                            if(typeof($) == 'function' && $('#navbar-example li.active').offset()) {
                                var myScrollPos = $('#navbar-example li.active').offset().left + $('#navbar-example li.active').outerWidth(true)/2 + $('#navbar-example ul').scrollLeft() - $('#navbar-example ul').width()/2;
                                $('#navbar-example ul').scrollLeft(myScrollPos);
                            }
                        }
                        window.addEventListener('scroll', function() {
                            myFunction();
                        })
                        window.addEventListener('load', function() {
                            // $('body').scrollspy({target: ".navbar", offset: 50});
                            $(".nav li a").on('click', function(event) {
                                if (this.hash !== "") {
                                    event.preventDefault();
                                    var hash = this.hash;
                                    $('html, body').animate({
                                        scrollTop: $(hash).offset().top
                                    }, 800, function() {
                                        window.location.hash = hash;
                                    });
                                }
                            });
                        })