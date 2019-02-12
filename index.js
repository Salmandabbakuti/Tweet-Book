 function log(message) {
    $('#log').append($('<p>').text(message));
    $('#log').scrollTop($('#log').prop('scrollHeight'));
  }
  function error(message) {
    $('#log').append($('<p>').addClass('dark-red').text(message));
    $('#log').scrollTop($('#log').prop('scrollHeight'));
  }
  function waitForReceipt(hash, cb) {
    web3.eth.getTransactionReceipt(hash, function (err, receipt) {
      if (err) {
        error(err);
      }
      if (receipt !== null) {
        // Transaction went through
        if (cb) {
          cb(receipt);
        }
      } else {
        // Try again in 1 second
        window.setTimeout(function () {
          waitForReceipt(hash, cb);
        }, 1000);
      }
    });
  }
  const address = "0x794df8f310198Ed001f8ca9C9A792dF16b76DA4b";
  const abi = [{"constant":true,"inputs":[],"name":"viewYourAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewYourName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_title","type":"string"}],"name":"getTweetTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"getUserLocation","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"getUserAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"getUserBio","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getMessageTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewYourBio","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getMessageWrittenBy","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewYourLocation","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_title","type":"string"}],"name":"deleteTweet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_title","type":"string"}],"name":"getTweetWrittenBy","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getMessageContent","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_title","type":"string"},{"name":"_content","type":"string"}],"name":"addTweet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_title","type":"string"}],"name":"getTweetContent","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_location","type":"string"},{"name":"_bio","type":"string"}],"name":"updateCredentials","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_location","type":"string"},{"name":"_bio","type":"string"}],"name":"createAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"_content","type":"string"}],"name":"writeMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"getUserName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allTweets","outputs":[{"name":"content","type":"string"},{"name":"writtenBy","type":"address"},{"name":"timestamp","type":"uint256"},{"name":"isTweeted","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}];
  $(function () {
    var tweetBook;
    $('#myAccount').click(function (e) {
      e.preventDefault();
      tweetBook.viewYourAddress.call( function (err, result1) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getProfileAddress").innerHTML = result1;
      });
    });
    $('#myAccount').click(function (e) {
      e.preventDefault();
            tweetBook.viewYourBio.call( function (err, result2) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getProfileBio").innerHTML = result2;
      });
     });
     $('#myAccount').click(function (e) {
      e.preventDefault();
            tweetBook.viewYourLocation.call( function (err, result3) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getProfileLocation").innerHTML = result3;
      });
     });
      $('#myAccount').click(function (e) {
      e.preventDefault();
            tweetBook.viewYourName.call( function (err, result4) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getProfileName").innerHTML = result4;
      });
     });
      $('#getUser').click(function (e) {
      e.preventDefault();
            tweetBook.getUserName.call(document.getElementById("userAddress").value, function (err, result5) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getProfileName").innerHTML = result5;
      });
     });
      $('#getUser').click(function (e) {
      e.preventDefault();
            tweetBook.getUserBio.call(document.getElementById("userAddress").value, function (err, result6) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getProfileBio").innerHTML = result6;
      });
     });
       $('#getUser').click(function (e) {
      e.preventDefault();
            tweetBook.getUserLocation.call(document.getElementById("userAddress").value, function (err, result7) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getProfileLocation").innerHTML = result7;
      });
     });
        $('#getUser').click(function (e) {
      e.preventDefault();
            tweetBook.getUserAddress.call(document.getElementById("userAddress").value, function (err, result8) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getProfileAddress").innerHTML = result8;
      });
     });
     $('#getMessage').click(function (e) {
      e.preventDefault();
            tweetBook.getMessageContent.call(document.getElementById("messageIndex").value, function (err, result9) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getMessageContent").innerHTML = result9;
      });
     });
      $('#getMessage').click(function (e) {
      e.preventDefault();
            tweetBook.getMessageWrittenBy.call(document.getElementById("messageIndex").value, function (err, result10) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getMessageWrittenBy").innerHTML = result10;
      });
     });
       $('#getMessage').click(function (e) {
      e.preventDefault();
            tweetBook.getMessageTimestamp.call(document.getElementById("messageIndex").value, function (err, result11) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getMessageTimestamp").innerHTML = result11;
      });
     });
        $('#getTweet').click(function (e) {
      e.preventDefault();
            tweetBook.getTweetContent.call(document.getElementById("searchTweetTitle").value, function (err, result12) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getTweetContent").innerHTML = result12;
      });
     });
         $('#getTweet').click(function (e) {
      e.preventDefault();
            tweetBook.getTweetWrittenBy.call(document.getElementById("searchTweetTitle").value, function (err, result13) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getTweetWrittenBy").innerHTML = result13;
      });
     });
     $('#getTweet').click(function (e) {
      e.preventDefault();
            tweetBook.getTweetTimestamp.call(document.getElementById("searchTweetTitle").value, function (err, result14) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getTweetTimestamp").innerHTML = result14;
      });
     });
    $('#createAccount').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      tweetBook.createAccount.sendTransaction(document.getElementById("name").value, document.getElementById("address").value, document.getElementById("about").value, function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Account Created. Start Having Fun..");
        });
      });
    });
    $('#updateCredentials').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      tweetBook.updateCredentials.sendTransaction(document.getElementById("name").value, document.getElementById("address").value, document.getElementById("about").value, function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Credentials Updated.");
        });
      });
    });
    $('#addTweet').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      tweetBook.addTweet.sendTransaction(document.getElementById("tweetTitle").value, document.getElementById("content").value, function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Tweet Added.");
        });
      });
    });
        $('#deleteTweet').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      tweetBook.deleteTweet.sendTransaction(document.getElementById("searchTweetTitle").value, function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Tweet Deleted.");
        });
      });
    });
     $('#sendMessage').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      tweetBook.writeMessage.sendTransaction(document.getElementById("addressTo").value, document.getElementById("messageContent").value, function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Message Sent..");
        });
      });
    });
    if (typeof(web3) === "undefined") {
      error("Unable to find web3. " +
            "Please run MetaMask (or something else that injects web3).");
    } else {
      log("Found injected web3.");
      web3 = new Web3(web3.currentProvider);
      ethereum.enable();
      if (web3.version.network != 3) {
        error("Wrong network detected. Please switch to the Ropsten test network.");
      } else {
        log("Connected to the Ropsten test network.");
        tweetBook = web3.eth.contract(abi).at(address);
        $('#myAccount').click();
        }
    }
  });