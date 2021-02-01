# Band Pass Filter

Input
1) Sound wave, frequencies - array of integers
2) Low threshold - 40 default, customisable
3) High threshold - 1000 default, customisable

Output
* Array of frequencies

Example Inputs/Outputs

[60, 10, 45, 60, 1500] =>	[60,40,45,60,1000] - Case where the array has frequency above and below threshold, defaults used
[30, 60, 90], 30, 90 => [30, 60, 90] - Case where all fall within range
[30], 40, 90 => [40] - Case where array only has frequency below
[90], 40, 80 => [80] - Case where array only has frequency above

[], 40, 90 => Throw error 'No sound save found'