import { deserialize, serialize } from "../Serialize.js";


let tests = [
  [[1, 2, 2, 3, 3, 3, 4, 4, 4, 4], "1 1 2 2 3 3 4 4"],
  [[1, 2, 3, 4, 5], "1 1 1 2 1 3 1 4 1 5"],
  [[1, 1, 1, 1, 1], "5 1"],
  [[1, 1, 2, 2, 3, 3], "2 1 2 2 2 3"],
  [[1, 1, 2, 2, 3, 3, 3, 3], "2 1 2 2 4 3"],
  [[100, 100, 100, 100, 100], "5 100"],
  [[1, 10, 100, 200, 300], "1 1 1 10 1 100 1 200 1 300"],
  [[111, 222, 333, 111, 222, 333, 111, 222, 333], "3 111 3 222 3 333"],
  [
    Array.from({ length: 900 }, (_, i) => i % 300 + 1),
    "3 1 3 2 3 3 3 4 3 5 3 6 3 7 3 8 3 9 3 10 3 11 3 12 3 13 3 14 3 15 3 16 3 17 3 18 3 19 3 20 3 21 3 22 3 23 3 24 3 25 3 26 3 27 3 28 3 29 3 30 3 31 3 32 3 33 3 34 3 35 3 36 3 37 3 38 3 39 3 40 3 41 3 42 3 43 3 44 3 45 3 46 3 47 3 48 3 49 3 50 3 51 3 52 3 53 3 54 3 55 3 56 3 57 3 58 3 59 3 60 3 61 3 62 3 63 3 64 3 65 3 66 3 67 3 68 3 69 3 70 3 71 3 72 3 73 3 74 3 75 3 76 3 77 3 78 3 79 3 80 3 81 3 82 3 83 3 84 3 85 3 86 3 87 3 88 3 89 3 90 3 91 3 92 3 93 3 94 3 95 3 96 3 97 3 98 3 99 3 100 3 101 3 102 3 103 3 104 3 105 3 106 3 107 3 108 3 109 3 110 3 111 3 112 3 113 3 114 3 115 3 116 3 117 3 118 3 119 3 120 3 121 3 122 3 123 3 124 3 125 3 126 3 127 3 128 3 129 3 130 3 131 3 132 3 133 3 134 3 135 3 136 3 137 3 138 3 139 3 140 3 141 3 142 3 143 3 144 3 145 3 146 3 147 3 148 3 149 3 150 3 151 3 152 3 153 3 154 3 155 3 156 3 157 3 158 3 159 3 160 3 161 3 162 3 163 3 164 3 165 3 166 3 167 3 168 3 169 3 170 3 171 3 172 3 173 3 174 3 175 3 176 3 177 3 178 3 179 3 180 3 181 3 182 3 183 3 184 3 185 3 186 3 187 3 188 3 189 3 190 3 191 3 192 3 193 3 194 3 195 3 196 3 197 3 198 3 199 3 200 3 201 3 202 3 203 3 204 3 205 3 206 3 207 3 208 3 209 3 210 3 211 3 212 3 213 3 214 3 215 3 216 3 217 3 218 3 219 3 220 3 221 3 222 3 223 3 224 3 225 3 226 3 227 3 228 3 229 3 230 3 231 3 232 3 233 3 234 3 235 3 236 3 237 3 238 3 239 3 240 3 241 3 242 3 243 3 244 3 245 3 246 3 247 3 248 3 249 3 250 3 251 3 252 3 253 3 254 3 255 3 256 3 257 3 258 3 259 3 260 3 261 3 262 3 263 3 264 3 265 3 266 3 267 3 268 3 269 3 270 3 271 3 272 3 273 3 274 3 275 3 276 3 277 3 278 3 279 3 280 3 281 3 282 3 283 3 284 3 285 3 286 3 287 3 288 3 289 3 290 3 291 3 292 3 293 3 294 3 295 3 296 3 297 3 298 3 299 3 300",
  ],
];

test(' ', () => { 
  for (test of tests) {
    const actual = test[0];
    const expected = test[1];

    //serialize

    expect(serialize(actual)).toEqual(expected);

    //deserialize
    const actual1 = test[1];
    const expected1 = test[0].join(' ');
    expect(deserialize(actual1)).toEqual(expected1);

  }
 })