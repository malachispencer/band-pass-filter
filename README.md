# Band Pass Filter

Makers Review Two

### Input

1) Sound wave, which is an array of frequencies.
2) Low threshold value, which is an integer (40 by default).
3) High threshold value, which is an integer (1000 by default).

### Output

* Array of frequencies.
* Frequencies below low threshold become low threshold.
* Frequencies above high threshold become high threshold.

### Example Input/Outputs

1) Sound wave contains frequencies above high threshold and below low threshold:
- [60, 10, 45, 60, 1500], 40, 1000 =>	[60, 40, 45, 60, 1000]
2) Only frequencies below low threshold:
- [30, 60, 90], 70, 90 => [70, 70, 90]
3) Only frequencies below high threshold:
- [30, 60, 90], 30, 50 => [30, 50, 50]
4) All frequencies fall in range:
- [30, 60, 90], 30, 90 => [30, 60, 90]
5) Default thresholds are used instead of custom:
- [30, 500, 1001] => [40, 500, 1000]
6) No sound wave provided:
- [], 60, 90 => Error: No sound wave found