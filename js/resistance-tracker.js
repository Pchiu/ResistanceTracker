var resistanceTracker = angular.module('ResistanceTracker', [])
resistanceTracker.controller('ResistanceTrackerController', function ($scope) {
	$scope.players = []
	$scope.rounds = [];
	$scope.currentRound = [];
	$scope.playerText = "";
	$scope.gameActive = false;
	$scope.currentRoundNumber = 1;

	$scope.setPlayers = function()
	{
		$scope.players = []
		$scope.currentRound = []
		var players = $scope.playerText.split('\n')
		players.forEach(function(name) {
			$scope.players.push(name)
			$scope.currentRound.push({name: name, hasGun: false, votedApprove: false})
			$scope.gameActive = true;
		})
		$scope.rounds = []
		$scope.currentRoundNumber = 1;
	}

	$scope.endRound = function()
	{
		var round = {};
		round.votes = []
		for (var i = 0; i < $scope.currentRound.length; i++)
		{
			var item = {};
			item.hasGun = $scope.currentRound[i].hasGun;
			item.votedApprove = $scope.currentRound[i].votedApprove;
			round.votes.push(item);
		}
		round.winner = $scope.currentRound.winner
		round.number = $scope.currentRoundNumber;
		$scope.currentRoundNumber += 1;

		$scope.rounds.push(round);
		if ($scope.rounds.length >= 5)
		{
			$scope.gameActive = false;
		}
	}

	$scope.init = function()
	{
		$scope.currentRound = []
		$scope.currentRound.winner = "";
	}
	$scope.init();
})