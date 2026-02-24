const fs = require('fs');

let code = fs.readFileSync('src/App.jsx', 'utf-8');

code = code.replace(
    `              <div className="thumb-label">CRUMBZ CAFE</div>
            </div>
          </div>
        </div>
          </div>
        </div>

        {/* Home Decor */}`,
    `              <div className="thumb-label">CRUMBZ CAFE</div>
            </div>
          </div>
        </div>

        {/* Home Decor */}`
);

fs.writeFileSync('src/App.jsx', code);
console.log('Fixed extra divs.');
